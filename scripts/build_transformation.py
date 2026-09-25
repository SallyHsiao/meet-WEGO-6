"""Render the clean, transparent wolf-to-human reveal on the cover.

The reference's convincing beat is an occluded cut: the wolf and man keep
their real proportions, and a rising spiral hides the switch for a moment.
There is deliberately no silhouette interpolation or body stretching.
"""

from pathlib import Path
import math

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "dist" / "assets"
OUT = ASSETS / "transformation-morph.webp"
SIZE = 400
FPS = 16
DURATION = 6.25


def form(name):
    image = Image.open(ASSETS / name).convert("RGBA")
    return image.resize((SIZE, SIZE), Image.Resampling.LANCZOS)


WOLF = form("transformation-animal-3d.png")
HYBRID = form("transformation-hybrid-3d.png")
MAN = form("transformation-human-3d.png")

def smoothstep(start, end, value):
    x = max(0.0, min(1.0, (value - start) / (end - start)))
    return x * x * (3 - 2 * x)


def bell(value, rise_start, rise_end, fall_start, fall_end):
    return smoothstep(rise_start, rise_end, value) * (1 - smoothstep(fall_start, fall_end, value))


def spiral(time):
    """Draw lit upper arcs behind the figure and lower arcs in front."""
    back = Image.new("RGBA", (SIZE, SIZE))
    front = Image.new("RGBA", (SIZE, SIZE))
    back_draw = ImageDraw.Draw(back)
    front_draw = ImageDraw.Draw(front)

    for index in range(4):
        age = (time - 1.50 - index * 0.27) / 1.44
        if not 0 < age < 1:
            continue
        strength = math.sin(math.pi * age) ** 0.75
        y = 350 - age * 272
        radius_x = 132 - age * 49
        radius_y = 18 - age * 5
        offset = 10 * math.sin(age * math.pi * 2 + index * 0.9)
        box = (200 - radius_x + offset, y - radius_y,
               200 + radius_x + offset, y + radius_y)
        alpha = round(220 * strength)
        back_draw.arc(box, 186, 354, fill=(80, 219, 255, round(alpha * .55)), width=3)
        front_draw.arc(box, 3, 177, fill=(240, 253, 255, alpha), width=3)
        front_draw.arc(
            (box[0] + 2, box[1] + 2, box[2] - 2, box[3] - 2),
            16, 157, fill=(119, 255, 182, round(alpha * .55)), width=1
        )

    return back, front


def luminous(layer):
    glow = layer.filter(ImageFilter.GaussianBlur(7))
    alpha = glow.getchannel("A").point(lambda value: min(255, round(value * 1.7)))
    glow.putalpha(alpha)
    return Image.alpha_composite(glow, layer)


def frame(time):
    back, front = spiral(time)
    canvas = luminous(back)

    # The short upright wolf-man pose bridges four legs and the final man.
    # Only the two nearly identical upright figures overlap as ears/tail fade.
    if time < 2.69 or time >= 5.73:
        figure = WOLF.copy()
    elif time < 2.92:
        figure = HYBRID.copy()
    elif time < 3.18:
        figure = Image.blend(HYBRID, MAN, smoothstep(2.92, 3.18, time))
    else:
        figure = MAN.copy()
    reset_fade = 1 - smoothstep(5.30, 5.55, time) if time < 5.73 else smoothstep(5.73, 6.12, time)
    if time >= 5.30:
        figure.putalpha(figure.getchannel("A").point(lambda value: round(value * reset_fade)))
    canvas = Image.alpha_composite(canvas, figure)
    canvas = Image.alpha_composite(canvas, luminous(front))

    # A narrow bolt punctuates the switch. The reference keeps the figures
    # dark and readable; a broad white cloud would bury the transformation.
    intensity = bell(time, 2.52, 2.65, 2.72, 2.87)
    if intensity:
        bolt = Image.new("RGBA", (SIZE, SIZE))
        draw = ImageDraw.Draw(bolt)
        path = [(206, 13), (197, 90), (209, 161), (191, 239), (204, 308), (196, 386)]
        draw.line(path, fill=(125, 228, 255, round(195 * intensity)), width=6)
        draw.line(path, fill=(255, 255, 255, round(240 * intensity)), width=2)
        canvas = Image.alpha_composite(canvas, luminous(bolt))
    return canvas


frames = [frame(index / FPS) for index in range(round(DURATION * FPS))]
frames[0].save(
    OUT,
    format="WEBP",
    save_all=True,
    append_images=frames[1:],
    duration=round(1000 / FPS),
    loop=0,
    quality=84,
    method=5,
)
print(f"{OUT}: {len(frames)} frames, {OUT.stat().st_size // 1024} KiB")
