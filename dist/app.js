const members = [
  {
    id: "wooyeon", name: "WOOYEON", local: "우연", emoji: "🍙", color: "#ff5b55",
    human: "assets/wooyeon-human-game.jpg", animal: "assets/wooyeon-animal-game.jpg", animalLabel: "雪橇犬系狼形態",
    role: "大哥 · 主唱感 · 幸運配送員",
    facts: ["狼齡 667 歲，五人中的大哥", "會在 3:33 發送幸運訊息", "喜歡唱歌、作詞，也會畫畫與玩遊戲"]
  },
  {
    id: "xiu", name: "XIU", local: "시우", emoji: "😈", color: "#9b65ff",
    human: "assets/xiu-human-game.jpg", animal: "assets/xiu-animal-game.jpg", animalLabel: "柴犬系狼形態",
    role: "隊長 · 舞蹈線 · 能量核心",
    facts: ["狼齡 666 歲，是團體隊長", "舞蹈與舞台魅力最突出", "愛運動和辣食，氣勢強但其實怕鬼、也怕高"]
  },
  {
    id: "taegang", name: "TAEGANG", local: "태강", emoji: "🍊", color: "#ff8426",
    human: "assets/taegang-human-2026.jpg", animal: "assets/taegang-animal-game.jpg", animalLabel: "牛頭梗系狼形態",
    role: "氣氛製造者 · 料理擔當",
    facts: ["狼齡 663 歲，團內中間順位", "會做料理，也用圖畫日記記錄生活", "喜歡遊戲與搖滾／樂團音樂，性格很會照顧人"]
  },
  {
    id: "zero", name: "ZERO", local: "제로 · Zero Lee", emoji: "🍍", color: "#6f7a78",
    human: "assets/zero-human-game.jpg", animal: "assets/zero-animal-game.jpg", animalLabel: "黑貓系狼形態",
    role: "音樂製作 · 指揮家氣質 · DailyLog",
    facts: ["狼齡 660 歲，是唯一明顯的貓系動物形態", "在 X 發布 DailyLog 日常紀錄", "喜歡爵士與音樂製作，主持過 Cantabile 音樂節目"]
  },
  {
    id: "kuta", name: "KUTA", local: "쿠우타", emoji: "🪽", color: "#64dbff",
    human: "assets/kuta-human-game.jpg", animal: "assets/kuta-animal-game.jpg", animalLabel: "耳廓狐系狼形態",
    role: "日本忙內 · 成長系 · 雙語日記",
    facts: ["狼齡只有 6 歲，是壓倒性的忙內", "來自日本，會用韓日雙語記錄成長", "喜歡奶茶、騎單車和 K/J-pop，不太能吃辣"]
  }
];

const quiz = [
  { label: "FIRST IMPRESSION", lead: "隊長雷達啟動📡", question: "誰最有可能是隊長？", hint: "不要只看氣場，也可以相信你對『會帶隊的人』的第一直覺。", kind: "photo", options: ["wooyeon","xiu","taegang","zero","kuta"], answer: "xiu", reveal: "XIU 是 WE GO-6 的隊長，也是能量很強的舞蹈線成員。" },
  { label: "PERFORMANCE", lead: "舞台氣場偵測中🔥", question: "誰最可能是舞擔？", hint: "五張人形照裡，找一位你覺得一上台就會切換模式的人。", kind: "photo", options: ["zero","taegang","kuta","xiu","wooyeon"], answer: "xiu", reveal: "仍然是 XIU。運動系隊長加上有力的舞台表現，是他的招牌組合。" },
  { label: "X TIMELINE", lead: "時間線搜查開始🔎", question: "誰會在 X 發布 DailyLog？", hint: "這位成員把日常切成一篇篇帶點觀察感的紀錄。", kind: "photo", options: ["kuta","zero","wooyeon","taegang","xiu"], answer: "zero", reveal: "ZERO 會發布 DailyLog；他的文字與音樂品味一樣，常有安靜而細膩的觀察。" },
  { label: "LUCKY TIME", lead: "幸運時刻降臨🍀", question: "誰常在 3:33 送出幸運？", hint: "數字 3:33 是這位大哥的小小固定儀式。", kind: "photo", options: ["taegang","wooyeon","xiu","kuta","zero"], answer: "wooyeon", reveal: "WOOYEON 是 3:33 幸運配送員，也是唱歌、作詞、畫畫都會的大哥。" },
  { label: "DAILY LIFE", lead: "生活技能樹展開🎨", question: "料理與圖畫日記，最像誰的技能樹？", hint: "一邊照顧大家，一邊把生活畫下來。", kind: "photo", options: ["xiu","kuta","taegang","zero","wooyeon"], answer: "taegang", reveal: "TAEGANG 會做料理，也會用圖畫日記留下日常，是很有生活感的氣氛製造者。" },
  { label: "JAPAN LINE", lead: "跨國成員情報🌏", question: "誰是來自日本的成員？", hint: "他會用韓文和日文記錄自己的成長。", kind: "photo", options: ["zero","kuta","taegang","wooyeon","xiu"], answer: "kuta", reveal: "KUTA 來自日本；雙語日記、奶茶和成長感是很容易記住的關鍵詞。" },
  { label: "AGE ORDER", lead: "超級挑戰😎", question: "狼齡由大到小，哪個排序正確？", hint: "把五位成員的照片拖到 1—5；1 為最大，5 為最小。", kind: "sort", options: ["wooyeon","xiu","taegang","zero","kuta"], answer: ["wooyeon","xiu","taegang","zero","kuta"], reveal: "大哥到忙內依序是 WOOYEON、XIU、TAEGANG、ZERO、KUTA。" },
  { label: "MATH, BUT WOLF", lead: "熱知識：此團平均年齡達到 500 多歲❗️", question: "所以⋯猜猜看大哥與忙內差幾個狼年？", hint: "答案就藏在剛才的排序裡。", kind: "text", options: [["A","6"],["B","61"],["C","661"],["D","666"]], answer: 2, reveal: "答案是 661 個狼年。這大概是虛擬偶像界最誇張的團內年齡差之一。" },
  { label: "MUSIC ROOM", lead: "音樂腦電波連線🎧", question: "誰最像團內音樂製作人？", hint: "爵士、編曲、指揮家氣質，以及曾經出現過的 Cantabile。", kind: "photo", options: ["xiu","wooyeon","zero","taegang","kuta"], answer: "zero", reveal: "ZERO 喜歡爵士與音樂製作，也主持過 Cantabile 音樂節目。" },
  { label: "TASTE TEST", lead: "口味反差測試🧋", question: "奶茶 OK、辣食 NG，是誰？", hint: "這位成員的可愛反差，比耳朵還好認。", kind: "photo", options: ["wooyeon","taegang","kuta","xiu","zero"], answer: "kuta", reveal: "KUTA 喜歡奶茶，不太能吃辣；巨大耳朵的耳廓狐形態也很好認。" }
];

const state = {
  playerName: "", preference: "", score: 0, matchScore: 0, emojiScore: 0, quizScore: 0,
  selectedAnimal: null, matchPairs: new Map(), matchEvaluated: false,
  animalOrder: [], humanOrder: [], selectedEmoji: null, emojiPairs: new Map(), emojiEvaluated: false, emojiOrder: [], emojiOptions: [],
  quizIndex: 0, answered: false, selectedSortMember: null
};
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showScreen(id) {
  $$(".screen").forEach(el => el.classList.toggle("is-active", el.id === id));
  window.scrollTo(0, 0);
  $("#app").focus({ preventScroll: true });
}

function updateStatus(stage) {
  $("#top-stage").textContent = stage;
  $("#top-score").textContent = String(state.score).padStart(2, "0");
  $("#top-score").classList.remove("is-bumping");
  requestAnimationFrame(() => $("#top-score").classList.add("is-bumping"));
}

function memberById(id) { return members.find(member => member.id === id); }

let imagesPreloaded = false;
function preloadGameImages() {
  if (imagesPreloaded) return;
  imagesPreloaded = true;
  members.flatMap(member => [member.animal, member.human]).forEach(src => {
    const image = new Image();
    image.decoding = "async";
    image.fetchPriority = "high";
    image.src = src;
  });
}

function updateNicknameState() {
  const input = $("#nickname");
  const name = input.value.trim();
  const ready = name.length > 0;
  state.playerName = name;
  $("#nickname-count").textContent = `${input.value.length} / 16`;
  $("#preference-card").classList.toggle("is-locked", !ready);
  $$(".pref-button").forEach(button => { button.disabled = !ready; });
  $("#nickname-hint").textContent = ready ? `收到！${name}，現在選擇你的派系。` : "結束時會把名字印在你的二十三世紀身份證上。";
  if (ready) preloadGameImages();
}

function setFeedback(selector, lead, detail) {
  const target = $(selector);
  target.replaceChildren();
  const headline = document.createElement("strong");
  headline.className = "feedback-lead";
  headline.textContent = lead;
  const score = document.createElement("span");
  score.className = "feedback-score";
  score.textContent = detail;
  target.append(headline, score);
}

function startGame(preference) {
  const nickname = $("#nickname").value.trim();
  if (!nickname) {
    $("#nickname-hint").textContent = "先輸入暱稱，才可以取得身份通行證喔！";
    $("#nickname").focus();
    $("#nickname-step")?.classList.add("is-shake");
    setTimeout(() => $("#nickname-step")?.classList.remove("is-shake"), 380);
    return;
  }
  state.playerName = nickname;
  state.preference = preference;
  state.score = 0; state.matchScore = 0; state.emojiScore = 0; state.quizScore = 0;
  state.selectedAnimal = null; state.matchPairs = new Map(); state.matchEvaluated = false;
  state.animalOrder = shuffle(members); state.humanOrder = shuffle(members);
  state.selectedEmoji = null; state.emojiPairs = new Map(); state.emojiEvaluated = false;
  state.emojiOrder = shuffle(members); state.emojiOptions = shuffle(members.map(member => member.emoji));
  state.quizIndex = 0; state.answered = false;
  renderMatchBoard();
  updateStatus("形態配對中");
  showScreen("match-screen");
}

function identityButton(member, form, index) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "identity-card";
  button.dataset.id = member.id;
  button.dataset.form = form;
  const alt = form === "animal" ? `動物形態選項 ${index + 1}` : `人類形態選項 ${index + 1}`;
  button.style.setProperty("--card-delay", `${index * 70}ms`);
  button.innerHTML = `<span class="card-image"><img src="${member[form]}" alt="${alt}" decoding="async" fetchpriority="high"></span><span class="card-code">${form === "animal" ? "ANIMAL" : "HUMAN"}-${String(index + 1).padStart(2,"0")}</span>`;
  button.addEventListener("click", () => handleIdentityClick(button));
  return button;
}

function renderMatchBoard() {
  const animalGrid = $("#animal-grid");
  const humanGrid = $("#human-grid");
  animalGrid.replaceChildren(); humanGrid.replaceChildren();
  state.animalOrder.forEach((member, index) => animalGrid.append(identityButton(member, "animal", index)));
  state.humanOrder.forEach((member, index) => humanGrid.append(identityButton(member, "human", index)));
  $("#match-count").textContent = "0";
  $("#match-feedback").textContent = "先點上方動物，再點下方人形；連完五組才一起揭曉。";
  $("#match-actions").classList.add("is-hidden");
  requestAnimationFrame(drawConnections);
}

function handleIdentityClick(button) {
  const { id, form } = button.dataset;
  if (state.matchEvaluated) return;

  if (form === "animal") {
    const previousHuman = state.matchPairs.get(id);
    if (previousHuman) {
      state.matchPairs.delete(id);
      const previousHumanCard = $(`.identity-card[data-form="human"][data-id="${previousHuman}"]`);
      button.classList.remove("is-pending");
      previousHumanCard?.classList.remove("is-pending");
    }
    $$(".identity-card[data-form='animal']").forEach(el => el.classList.remove("is-selected"));
    state.selectedAnimal = id;
    button.classList.add("is-selected");
    $("#match-count").textContent = String(state.matchPairs.size);
    $("#match-feedback").textContent = `已選 ${button.querySelector(".card-code").textContent}，現在從下方選一張人形。`;
    drawConnections();
    return;
  }

  if (!state.selectedAnimal) {
    $("#match-feedback").textContent = "要先選一張上方的動物卡，再選下方的人形。";
    return;
  }

  const animalCard = $(`.identity-card[data-form="animal"][data-id="${state.selectedAnimal}"]`);
  const ownerOfHuman = [...state.matchPairs.entries()].find(([, humanId]) => humanId === id)?.[0];
  if (ownerOfHuman && ownerOfHuman !== state.selectedAnimal) {
    button.classList.add("is-shake");
    setTimeout(() => button.classList.remove("is-shake"), 350);
    $("#match-feedback").textContent = "這張人形已經有連線了；先點他的動物卡即可重新配對。";
    return;
  }

  state.matchPairs.set(state.selectedAnimal, id);
  animalCard.classList.remove("is-selected");
  animalCard.classList.add("is-pending");
  button.classList.add("is-pending");
  state.selectedAnimal = null;
  $("#match-count").textContent = String(state.matchPairs.size);
  $("#match-feedback").textContent = state.matchPairs.size < members.length ? `已連好 ${state.matchPairs.size} 組，答案繼續保密。` : "五條線完成，正在一次揭曉結果⋯";
  drawConnections();
  if (state.matchPairs.size === members.length) evaluateMatches();
}

function drawConnections() {
  const board = $("#connect-board");
  const svg = $("#link-layer");
  if (!board || !svg) return;
  const boardRect = board.getBoundingClientRect();
  svg.setAttribute("viewBox", `0 0 ${boardRect.width} ${boardRect.height}`);
  svg.replaceChildren();
  state.matchPairs.forEach((humanId, animalId) => {
    const animal = $(`.identity-card[data-form="animal"][data-id="${animalId}"]`);
    const human = $(`.identity-card[data-form="human"][data-id="${humanId}"]`);
    if (!animal || !human) return;
    const a = animal.getBoundingClientRect();
    const h = human.getBoundingClientRect();
    const x1 = a.left + a.width / 2 - boardRect.left;
    const y1 = a.bottom - boardRect.top;
    const x2 = h.left + h.width / 2 - boardRect.left;
    const y2 = h.top - boardRect.top;
    const midY = y1 + (y2 - y1) / 2;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`);
    path.classList.add("link-path");
    if (state.matchEvaluated) path.classList.add(animalId === humanId ? "is-correct" : "is-wrong");
    svg.append(path);
  });
}

function evaluateMatches() {
  state.matchEvaluated = true;
  let correct = 0;
  state.matchPairs.forEach((humanId, animalId) => {
    const isCorrect = animalId === humanId;
    if (isCorrect) correct += 1;
    const animalCard = $(`.identity-card[data-form="animal"][data-id="${animalId}"]`);
    const humanCard = $(`.identity-card[data-form="human"][data-id="${humanId}"]`);
    [animalCard, humanCard].forEach(card => {
      card.classList.remove("is-pending", "is-selected");
      card.classList.add(isCorrect ? "is-correct" : "is-wrong");
      card.disabled = true;
      card.querySelector(".card-code").textContent = isCorrect ? `${memberById(animalId).name} ✓` : "NOT A MATCH ×";
    });
  });
  state.matchScore = correct * 2;
  state.score = state.matchScore + state.emojiScore + state.quizScore;
  drawConnections();
  updateStatus("配對答案揭曉");
  const instinct = correct === 5
    ? "你竟然全對！你其實是活在二十三世紀的人吧？"
    : correct === 4
      ? "只差一組！你的二十三世紀直覺已經快要覺醒了。"
      : correct === 3
        ? "直覺有一半以上命中，再看一眼輪廓就能抓到規律。"
        : correct >= 1
          ? "有幾條線被直覺帶去散步了，但你已經找到突破口。"
          : "完全避開正確答案也是一種天賦；現在開始重新認識他們吧！";
  setFeedback("#match-feedback", instinct, `${correct} 組正確、${5 - correct} 組錯誤，得到 ${state.matchScore} / 10 分。`);
  $("#match-actions").classList.remove("is-hidden");
}

function retryMatch() {
  state.score = state.emojiScore + state.quizScore;
  state.matchScore = 0;
  state.selectedAnimal = null;
  state.matchPairs = new Map();
  state.matchEvaluated = false;
  renderMatchBoard();
  updateStatus("形態配對中");
}

function renderEmojiRound() {
  const topGrid = $("#emoji-top");
  const bottomGrid = $("#emoji-bottom");
  const bank = $("#emoji-bank");
  topGrid.replaceChildren();
  bottomGrid.replaceChildren();
  bank.replaceChildren();
  state.selectedEmoji = null;
  state.emojiPairs = new Map();
  state.emojiEvaluated = false;
  state.emojiOrder.forEach((member, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "emoji-member-card";
    button.dataset.id = member.id;
    button.style.setProperty("--card-delay", `${index * 80}ms`);
    button.innerHTML = `<span class="card-image"><img src="${member.human}" alt="${member.name} 的人類形態" decoding="async"></span><strong class="card-name">${member.name}</strong><span class="assigned-emoji" aria-hidden="true">?</span>`;
    button.addEventListener("click", () => assignEmojiToMember(button));
    (index < 2 ? topGrid : bottomGrid).append(button);
  });
  state.emojiOptions.forEach(emoji => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "emoji-option";
    button.dataset.emoji = emoji;
    button.setAttribute("aria-label", `選擇 ${emoji}`);
    button.textContent = emoji;
    button.addEventListener("click", () => selectEmojiOption(button));
    bank.append(button);
  });
  $("#emoji-count").textContent = "0";
  $("#emoji-feedback").textContent = "先選一個代表 emoji，再點一位成員。";
  $("#emoji-actions").classList.add("is-hidden");
}

function emojiOptionButton(emoji) {
  return $$(".emoji-option").find(button => button.dataset.emoji === emoji);
}

function selectEmojiOption(button) {
  if (state.emojiEvaluated || button.disabled) return;
  $$(".emoji-option").forEach(option => option.classList.remove("is-selected"));
  state.selectedEmoji = button.dataset.emoji;
  button.classList.add("is-selected");
  $("#emoji-feedback").textContent = `已選 ${state.selectedEmoji}，現在點一位成員。`;
}

function assignEmojiToMember(memberCard) {
  if (!state.selectedEmoji || state.emojiEvaluated) {
    $("#emoji-feedback").textContent = "要先選 emoji，再點成員圖像。";
    return;
  }
  const memberId = memberCard.dataset.id;
  const emoji = state.selectedEmoji;
  const previousEmoji = state.emojiPairs.get(memberId);
  if (previousEmoji && previousEmoji !== emoji) {
    const previousOption = emojiOptionButton(previousEmoji);
    if (previousOption) previousOption.disabled = false;
  }
  state.emojiPairs.set(memberId, emoji);
  memberCard.classList.add("is-pending");
  memberCard.querySelector(".assigned-emoji").textContent = emoji;
  const option = emojiOptionButton(emoji);
  if (option) {
    option.disabled = true;
    option.classList.remove("is-selected");
  }
  state.selectedEmoji = null;
  $("#emoji-count").textContent = String(state.emojiPairs.size);
  $("#emoji-feedback").textContent = state.emojiPairs.size < members.length ? `已配好 ${state.emojiPairs.size} 組，請再選下一個 emoji。` : "五組 emoji 完成，正在揭曉⋯";
  if (state.emojiPairs.size === members.length) evaluateEmojiRound();
}

function evaluateEmojiRound() {
  state.emojiEvaluated = true;
  let correct = 0;
  state.emojiPairs.forEach((emoji, memberId) => {
    const isCorrect = memberById(memberId).emoji === emoji;
    if (isCorrect) correct += 1;
    const card = $(`.emoji-member-card[data-id="${memberId}"]`);
    card.classList.remove("is-pending", "is-selected");
    card.classList.add(isCorrect ? "is-correct" : "is-wrong");
    card.disabled = true;
  });
  state.emojiScore = correct;
  state.score = state.matchScore + state.emojiScore + state.quizScore;
  updateStatus("Emoji 答案揭曉");
  const emojiComment = correct === 5
    ? "五個訊號全數接收！你和狼群的默契已經連上線。"
    : correct === 4
      ? "只差一個訊號！你的 emoji 雷達幾乎沒有死角。"
      : correct === 3
        ? "命中一半以上！再記住一個小習慣就能全部對上。"
        : correct >= 1
          ? "已經抓到幾個關鍵訊號，下一輪會更快認出他們。"
          : "今天的狼群訊號有點亂，但五個答案已經全部解鎖啦！";
  setFeedback("#emoji-feedback", emojiComment, `${correct} 組正確、${5 - correct} 組錯誤，得到 ${correct} / 5 分。`);
  $("#emoji-actions").classList.remove("is-hidden");
}

function retryEmojiRound() {
  state.score = state.matchScore + state.quizScore;
  state.emojiScore = 0;
  renderEmojiRound();
  updateStatus("代表 Emoji 配對中");
}

function renderQuiz() {
  const item = quiz[state.quizIndex];
  state.answered = false;
  $("#quiz-screen").classList.remove("is-sort-result");
  $("#quiz-number").textContent = String(state.quizIndex + 1);
  $("#progress-fill").style.width = `${((state.quizIndex + 1) / quiz.length) * 100}%`;
  $("#question-label").textContent = item.label;
  $("#quiz-title").innerHTML = `<span class="question-callout">${item.lead}</span><span class="question-copy">${item.question}</span>`;
  $("#question-hint").textContent = item.hint;
  $("#answer-reveal").classList.add("is-hidden");
  const panel = $("#answers-panel");
  panel.replaceChildren();
  panel.classList.toggle("is-sort", item.kind === "sort");

  if (item.kind === "sort") {
    renderSortChallenge(item, panel);
    return;
  }

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button"; button.className = "answer-button"; button.dataset.value = String(index);
    if (item.kind === "photo") {
      const member = memberById(option);
      button.classList.add("has-photo"); button.dataset.answer = option;
      button.innerHTML = `<span class="card-image"><img src="${member.human}" alt="${member.name} 的人類形態" decoding="async"></span><b class="card-name">${member.name}</b>`;
    } else {
      button.dataset.answer = String(index);
      button.innerHTML = `<span>${option[0]}</span>${option[1]}`;
    }
    button.addEventListener("click", () => answerQuiz(button));
    panel.append(button);
  });
}

function renderSortChallenge(item, panel) {
  state.selectedSortMember = null;
  const challenge = document.createElement("div");
  challenge.className = "sort-challenge";
  challenge.innerHTML = `<div class="sort-scroll"><div class="sort-workspace"><section class="sort-column"><p class="sort-column-label">待排序成員</p><div class="sort-tray" id="sort-tray" aria-label="尚未排序的成員"></div></section><section class="sort-column"><p class="sort-column-label">狼齡排名 · 1 最大 / 5 最小</p><div class="sort-slots" id="sort-slots">${["1","2","3","4","5"].map((label, index) => `<div class="sort-slot" data-label="${label}" data-index="${index}" role="button" tabindex="0" aria-label="狼齡排序位置 ${label}"></div>`).join("")}</div></section></div></div><button class="primary-button sort-submit" id="submit-sort" type="button" disabled>揭曉排序 <span>→</span></button>`;
  panel.append(challenge);
  const tray = $("#sort-tray");
  shuffle(item.options).forEach(id => tray.append(createSortCard(id)));
  tray.addEventListener("dragover", event => event.preventDefault());
  tray.addEventListener("drop", event => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    const card = $(`.sort-card[data-id="${id}"]`);
    if (card) tray.append(card);
    updateSortSubmit();
  });
  $$(".sort-slot").forEach(slot => {
    slot.addEventListener("dragover", event => event.preventDefault());
    slot.addEventListener("drop", event => {
      event.preventDefault();
      placeSortCard(event.dataTransfer.getData("text/plain"), slot);
    });
    slot.addEventListener("click", () => {
      if (state.selectedSortMember) placeSortCard(state.selectedSortMember, slot);
    });
    slot.addEventListener("keydown", event => {
      if ((event.key === "Enter" || event.key === " ") && state.selectedSortMember) {
        event.preventDefault();
        placeSortCard(state.selectedSortMember, slot);
      }
    });
  });
  $("#submit-sort").addEventListener("click", () => evaluateSortChallenge(item));
}

function createSortCard(id) {
  const member = memberById(id);
  const button = document.createElement("button");
  button.type = "button";
  button.className = "sort-card";
  button.dataset.id = id;
  button.draggable = true;
  button.innerHTML = `<span class="card-image"><img src="${member.human}" alt="${member.name} 的人類形態" decoding="async"></span><strong class="card-name">${member.name}</strong>`;
  button.addEventListener("dragstart", event => event.dataTransfer.setData("text/plain", id));
  button.addEventListener("click", event => {
    event.stopPropagation();
    if (state.answered) return;
    $$(".sort-card").forEach(card => card.classList.remove("is-selected"));
    state.selectedSortMember = id;
    button.classList.add("is-selected");
  });
  return button;
}

function placeSortCard(id, slot) {
  if (!id || state.answered) return;
  const card = $(`.sort-card[data-id="${id}"]`);
  if (!card) return;
  const occupied = slot.querySelector(".sort-card");
  if (occupied && occupied !== card) $("#sort-tray").append(occupied);
  slot.append(card);
  card.classList.remove("is-selected");
  state.selectedSortMember = null;
  updateSortSubmit();
}

function updateSortSubmit() {
  const complete = $$(".sort-slot").every(slot => slot.querySelector(".sort-card"));
  $("#submit-sort").disabled = !complete;
}

function evaluateSortChallenge(item) {
  if (state.answered) return;
  const order = $$(".sort-slot").map(slot => slot.querySelector(".sort-card")?.dataset.id);
  if (order.some(id => !id)) return;
  state.answered = true;
  $("#quiz-screen").classList.add("is-sort-result");
  const correct = order.every((id, index) => id === item.answer[index]);
  if (correct) { state.quizScore += 1; state.score += 1; }
  $$(".sort-slot").forEach((slot, index) => {
    slot.classList.add(order[index] === item.answer[index] ? "is-correct" : "is-wrong");
    const card = slot.querySelector(".sort-card");
    card.draggable = false;
    card.disabled = true;
  });
  $("#submit-sort").disabled = true;
  $("#reveal-mark").textContent = correct ? "PERFECT ORDER +1" : "ORDER REVEALED";
  $("#reveal-title").textContent = correct ? "超級挑戰成功！" : "紅色位置需要重新排隊";
  $("#reveal-copy").textContent = item.reveal;
  $("#next-question").innerHTML = state.quizIndex === quiz.length - 1 ? "查看總成績 <span>→</span>" : "下一題 <span>→</span>";
  $("#answer-reveal").classList.remove("is-hidden");
  updateStatus("特點問答中");
}

function answerQuiz(button) {
  if (state.answered) return;
  state.answered = true;
  const item = quiz[state.quizIndex];
  const chosen = item.kind === "photo" ? button.dataset.answer : Number(button.dataset.answer);
  const correct = chosen === item.answer;
  if (correct) { state.quizScore += 1; state.score += 1; }
  $$(".answer-button").forEach((el, index) => {
    el.disabled = true;
    const value = item.kind === "photo" ? el.dataset.answer : index;
    if (value === item.answer) el.classList.add("is-correct");
  });
  if (!correct) button.classList.add("is-wrong");
  $("#reveal-mark").textContent = correct ? "CORRECT +1" : "NOT THIS ONE";
  $("#reveal-title").textContent = correct ? "直覺命中！" : "答案已解鎖";
  $("#reveal-copy").textContent = item.reveal;
  $("#next-question").innerHTML = state.quizIndex === quiz.length - 1 ? "查看總成績 <span>→</span>" : "下一題 <span>→</span>";
  $("#answer-reveal").classList.remove("is-hidden");
  updateStatus("特點問答中");
}

function nextQuestion() {
  if (!state.answered) return;
  if (state.quizIndex < quiz.length - 1) { state.quizIndex += 1; renderQuiz(); if (window.scrollY) window.scrollTo(0, 0); }
  else showResults();
}

function resultBand(score) {
  if (score === 25) return ["23 世紀認證馴狼師", "零失誤完成身份辨識。你不是路過森林，你已經拿到狼群的永久通行證。"];
  if (score >= 20) return ["準出道班班長", "人形、動物形態、代表 emoji 和成員特點都已經記得很穩。正式出道時，你大概可以直接負責向朋友安利。"];
  if (score >= 14) return ["狼群觀察員", "你已經認得大部分身份，也抓到了幾個最鮮明的性格關鍵詞。再看一次直播，五個人就會徹底對上。"];
  if (score >= 8) return ["剛進森林的新朋友", "第一輪能分清五張臉本來就不容易。好消息是：最難的形態與 emoji 配對你都已經玩過一次了。"];
  return ["迷路的人類", "目前五隻還在你腦內自由奔跑。別擔心，下面的成員卡就是你的快速辨識指南。"];
}

function renderProfiles() {
  const container = $("#member-profiles"); container.replaceChildren();
  members.forEach((member, index) => {
    const article = document.createElement("article"); article.className = "profile-card"; article.style.setProperty("--member", member.color);
    article.innerHTML = `<div class="profile-images"><img src="${member.human}" alt="${member.name} 人形" loading="lazy" decoding="async"><img src="${member.animal}" alt="${member.name} 動物形態" loading="lazy" decoding="async"></div><div class="profile-body"><span class="profile-index">FILE 0${index + 1} ${member.emoji}</span><h3>${member.name}<span>${member.local}</span></h3><p class="profile-role">${member.role}</p><ul>${member.facts.map(fact => `<li>${fact}</li>`).join("")}</ul></div>`;
    container.append(article);
  });
}

function launchCelebration() {
  const layer = $("#celebration-layer");
  layer.replaceChildren();
  const colors = ["#7cff68", "#38d9ff", "#ff5c7d", "#ffcf40", "#ffffff"];
  for (let index = 0; index < 56; index += 1) {
    const piece = document.createElement("i");
    piece.className = index % 9 === 0 ? "is-party" : "";
    piece.textContent = index % 9 === 0 ? "🎉" : "";
    piece.style.setProperty("--x", `${Math.random() * 100}%`);
    piece.style.setProperty("--drift", `${Math.round(Math.random() * 180 - 90)}px`);
    piece.style.setProperty("--delay", `${(Math.random() * 0.9).toFixed(2)}s`);
    piece.style.setProperty("--duration", `${(2.8 + Math.random() * 2.1).toFixed(2)}s`);
    piece.style.setProperty("--color", colors[index % colors.length]);
    piece.style.setProperty("--spin", `${Math.round(Math.random() * 900 - 450)}deg`);
    layer.append(piece);
  }
  layer.classList.remove("is-celebrating");
  requestAnimationFrame(() => layer.classList.add("is-celebrating"));
}

function passportCode(name) {
  const value = [...name].reduce((total, character) => total + character.codePointAt(0), state.score * 37);
  return `WG6-${String(value % 10000).padStart(4, "0")}`;
}

function resetPassport() {
  const card = $("#passport-card");
  card.classList.remove("is-flipped", "is-intro");
  card.setAttribute("aria-pressed", "false");
  card.style.setProperty("--tilt-x", "0deg");
  card.style.setProperty("--tilt-y", "0deg");
  card.style.setProperty("--holo-x", "50%");
  card.style.setProperty("--holo-y", "50%");
}

let passportIntroTimers = [];
function playPassportIntro() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const card = $("#passport-card");
  passportIntroTimers.forEach(clearTimeout);
  card.classList.remove("is-intro", "is-flipped");
  card.setAttribute("aria-pressed", "false");
  void card.offsetWidth;
  card.classList.add("is-intro");
  passportIntroTimers = [
    setTimeout(() => { card.classList.add("is-flipped"); card.setAttribute("aria-pressed", "true"); }, 560),
    setTimeout(() => { card.classList.remove("is-flipped"); card.setAttribute("aria-pressed", "false"); }, 2550),
    setTimeout(() => card.classList.remove("is-intro"), 3700)
  ];
}

function showResults() {
  const [title, message] = resultBand(state.score);
  $("#result-score").textContent = String(state.score).padStart(2, "0");
  $("#result-name").textContent = state.playerName || "UNKNOWN";
  $("#result-title").textContent = title;
  const bonus = state.preference === "貓派" ? "貓派的你，先記住唯一的黑貓 ZERO 會最快入門。" : state.preference === "狗派" ? "狗派的你，三位犬系輪廓應該會越看越好分。" : "大人全都要的你很適合這個世界觀：這裡本來就不只一種形態。";
  $("#result-message").textContent = `${message} ${bonus}`;
  $("#result-pref").textContent = `你的派系：${state.preference}`;
  $("#result-matches").textContent = `形態：${state.matchScore} / 10`;
  $("#result-emoji").textContent = `Emoji：${state.emojiScore} / 5`;
  $("#result-quiz").textContent = `問答：${state.quizScore} / 10`;
  $("#passport-code").textContent = passportCode(state.playerName || "UNKNOWN");
  resetPassport(); renderProfiles(); updateStatus("辨識完成"); showScreen("result-screen");
  requestAnimationFrame(playPassportIntro);
  launchCelebration();
}

function goHome() { updateStatus("等待辨識"); showScreen("intro-screen"); }

$("#nickname").addEventListener("input", updateNicknameState);
$("#nickname").addEventListener("focus", preloadGameImages, { once: true });
$("#nickname").addEventListener("keydown", event => {
  if (event.key === "Enter" && $("#nickname").value.trim()) $(".pref-button[data-pref='我是大人我全都要']").focus();
});
$$('.pref-button').forEach(button => button.addEventListener('click', () => startGame(button.dataset.pref)));
$("#retry-match").addEventListener("click", retryMatch);
$("#to-emoji").addEventListener("click", () => { renderEmojiRound(); updateStatus("代表 Emoji 配對中"); showScreen("emoji-screen"); });
$("#retry-emoji").addEventListener("click", retryEmojiRound);
$("#to-quiz").addEventListener("click", () => { state.quizIndex = 0; renderQuiz(); updateStatus("特點問答中"); showScreen("quiz-screen"); });
$("#next-question").addEventListener("click", nextQuestion);
$("#restart-game").addEventListener("click", goHome);
$("#brand-home").addEventListener("click", event => { event.preventDefault(); goHome(); });

const passport = $("#passport-card");
passport.addEventListener("pointermove", event => {
  if (event.pointerType === "touch" || passport.classList.contains("is-intro")) return;
  const rect = passport.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;
  passport.style.setProperty("--tilt-x", `${((0.5 - y) * 10).toFixed(2)}deg`);
  passport.style.setProperty("--tilt-y", `${((x - 0.5) * 14).toFixed(2)}deg`);
  passport.style.setProperty("--holo-x", `${(x * 100).toFixed(1)}%`);
  passport.style.setProperty("--holo-y", `${(y * 100).toFixed(1)}%`);
});
passport.addEventListener("pointerleave", () => {
  passport.style.setProperty("--tilt-x", "0deg");
  passport.style.setProperty("--tilt-y", "0deg");
});
function flipPassport() {
  if (passport.classList.contains("is-intro")) return;
  const flipped = passport.classList.toggle("is-flipped");
  passport.setAttribute("aria-pressed", String(flipped));
}
passport.addEventListener("click", flipPassport);
passport.addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") { event.preventDefault(); flipPassport(); }
});

updateNicknameState();

function registerWebMCP() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const tools = [
    {
      name: "start_wego6_identity_game",
      title: "開始 WE GO-6 身份配對",
      description: "以指定的貓狗偏好開始或重新開始 WE GO-6 身份配對遊戲，並更新可見畫面。",
      inputSchema: { type: "object", properties: { nickname: { type: "string", minLength: 1, maxLength: 16 }, preference: { type: "string", enum: ["貓派","狗派","我是大人我全都要"] } }, required: ["nickname", "preference"], additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) { if (!input || !input.nickname?.trim() || !["貓派","狗派","我是大人我全都要"].includes(input.preference)) throw new Error("需要 1–16 字暱稱，preference 必須是貓派、狗派或我是大人我全都要"); $("#nickname").value = input.nickname.trim().slice(0, 16); updateNicknameState(); startGame(input.preference); return { stage: "matching", nickname: state.playerName, preference: state.preference, score: state.score }; }
    },
    {
      name: "read_wego6_game_state",
      title: "讀取遊戲進度",
      description: "讀取目前 WE GO-6 遊戲階段、分數和已完成配對數，不改變遊戲。",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true, untrustedContentHint: false },
      execute() { return { nickname: state.playerName || null, preference: state.preference || null, score: state.score, matchedPairs: state.matchPairs.size, matchEvaluated: state.matchEvaluated, emojiPairs: state.emojiPairs.size, emojiEvaluated: state.emojiEvaluated, quizQuestion: state.quizIndex + 1, quizAnswered: state.answered }; }
    }
  ];
  tools.forEach(tool => { try { Promise.resolve(context.registerTool(tool)).catch(() => {}); } catch (_) {} });
}

registerWebMCP();
window.addEventListener("resize", () => requestAnimationFrame(drawConnections));
