# WEGO-6! 🐺

[English](#english) · [繁體中文](#繁體中文)

<a id="english"></a>
## English

A fan-made introduction game for WE GO-6! 
In a twenty-third-century world where humans can transform into anything, use your intuition to match five members’ animal and human forms—and collect clues about who they are.

### How to play

1. Enter a nickname and choose Team Cat/Dog or Both.
2. Match each animal photo with a human photo. All five answers are revealed together.
3. Select an emoji, then tap the member you think it represents.
4. Answer ten questions about the members, including a wolf-age ranking challenge.
5. See your score, interactive identity pass, and member profiles.

The game works on desktop and mobile! On a phone, you can complete the age-ranking challenge by tapping a photo and then a numbered slot—dragging is optional.


### Run locally

From the repository root:

```bash
python3 -m http.server 8000 --directory dist
```

Open `http://localhost:8000` in your browser. The game is a static website; no JavaScript package installation or backend is required.


### Project structure

```text
dist/
├── index.html                 # Game screens
├── style.css                  # Styling and responsive layout
├── app.js                     # Questions, interactions, and scoring
└── assets/                    # Member images and animation assets
scripts/
└── build_transformation.py    # Cover animation generator
```

### Disclaimer and credits

This is an unofficial fan-made project by SALLY. It is not affiliated with WE GO-6 or its company. Character names, images, and related materials belong to their respective rights holders. Please verify permission before redistributing or commercially using those assets. The cover’s intermediate transformation character was created with AI assistance.

---

<a id="繁體中文"></a>
## 繁體中文

一款讓大家認識WE GO-6 的非官方粉絲小遊戲！
在「人類能變成萬物」的二十三世紀，憑直覺配對五位成員的動物與人類形態，逐步收集關於他們的情報。

### 遊戲玩法

1. 輸入暱稱，選擇貓派、狗派，或「我是大人我全都要」。
2. 點選動物照片，再點選對應的人形照片；五組完成後一起揭曉答案。
3. 先選代表 Emoji，再點選對應的成員。
4. 回答十道成員問題，包括狼齡排序挑戰。
5. 查看總分、互動身份通行證和成員介紹。

桌面與手機都能遊玩。手機版的狼齡排序可以先點照片、再點數字位置，不一定要拖曳。


### 本機執行

在專案根目錄執行：

```bash
python3 -m http.server 8000 --directory dist
```

然後在瀏覽器開啟 `http://localhost:8000`。遊戲是純前端網站，不需要安裝 JavaScript 套件或設定後端。

### 專案結構

```text
dist/
├── index.html                 # 遊戲頁面
├── style.css                  # 樣式與響應式排版
├── app.js                     # 題目、互動與計分邏輯
└── assets/                    # 成員圖片與動畫素材
scripts/
└── build_transformation.py    # 封面動畫產生器
```

### 聲明與製作

> <small>本專案由 SALLY 製作，屬非官方粉絲作品，與 WE GO-6 及其所屬公司沒有官方關聯。角色名稱、圖片及相關素材的權利歸各自權利人；重新散布或商業使用素材前，請先確認使用權。封面變身動畫的中間角色圖包含 AI 輔助生成內容。</small>

UNOFFICIAL FAN-MADE INTRO GAME · MADE BY SALLY
