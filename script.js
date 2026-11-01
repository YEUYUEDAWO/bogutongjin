const timelineItems = [
  {
    era: "约公元前 1200 年",
    object: "商 · 甲骨卜辞",
    title: "刻在龟甲上的问句",
    description:
      "风雨会不会来？收成会不会好？战争该不该起？先民把最迫切的疑问刻在龟甲与兽骨上，借裂纹想象来自天地的回答。",
    insight:
      "这是汉字目前所见最早的成熟体系之一。当问题被记录，文明就拥有了可以回溯的坐标。",
    connection:
      "今天，我们用数据建模未知；古人则在火与裂纹之间辨认答案。",
    image: "assets/oracle-bone.jpg",
    alt: "商代龟甲卜辞复制品，表面刻有甲骨文字",
  },
  {
    era: "汉代 · 约公元 100 年",
    object: "汉 · 浑天仪",
    title: "让天空有了骨架",
    description:
      "天在哪里，地是什么形状？张衡改进浑天仪，以一组圆环模拟日月星辰的位置与运行，让遥远的天空第一次以模型的方式来到眼前。",
    insight:
      "观测不只依赖眼睛，也依赖工具。仪器把庞大的宇宙压缩成可以理解、讨论和修正的结构。",
    connection:
      "今天的射电望远镜延续了同一件事：把感官无法直接抵达的世界，转化成可以读取的信号。",
    image: "assets/armillary-sphere.jpg",
    alt: "汉代浑天仪与赤道装置复制品，由多个铜环和龙形支架组成",
  },
  {
    era: "唐代 · 公元 868 年",
    object: "唐 · 《金刚经》印本",
    title: "第一缕印刷的墨香",
    description:
      "敦煌藏经洞中的《金刚经》卷轴，卷末留有“咸通九年”的纪年。木版、纸墨与重复印刷，让知识开始拥有更稳定的复制方式。",
    insight:
      "印刷改变的不只是书的生产速度，也改变了信息可以抵达的人数。文字从少数人的案头，走向更广的公共空间。",
    connection:
      "从雕版到互联网，我们始终在解决一个问题：如何让可靠的知识越过时间与距离，被更多人看见。",
    image: "assets/diamond-sutra.jpg",
    alt: "敦煌出土的唐代《金刚经》印本长卷，前有佛画，后为经文",
  },
  {
    era: "明代 · 公元 1637 年",
    object: "明 · 《天工开物》",
    title: "把技术写进书里",
    description:
      "宋应星记录农业与手工业生产，从谷物加工、纺织、染色到冶铸、造纸与兵器制造。技术不再只靠师徒口耳相传，也进入可以被整理的文本。",
    insight:
      "把经验写下来，是一次重要转译。身体里的手艺由此成为可复制、可比较、可继续改进的知识。",
    connection:
      "今天的技术文档、开源社区和工程标准，仍在做同一件事：让经验离开个人，成为群体可以接续的基础。",
    image: "assets/tiangong-pump.jpg",
    alt: "《天工开物》中的水转翻车与筒车技术线描插图",
  },
  {
    era: "当代 · 公元 2016 年",
    object: "今 · FAST 射电望远镜",
    title: "听见宇宙的呼吸",
    description:
      "位于贵州喀斯特洼地中的 FAST，以五百米口径球面接收宇宙中的微弱射电信号。曾经仰望的星空，如今成为可以被记录、筛选和分析的数据。",
    insight:
      "工具越精密，问题反而越谦逊：我们意识到可见宇宙只是极小的部分，而未知仍然辽阔。",
    connection:
      "从龟甲上的卜问到深空中的信号，人类始终在借助有限的感官，追问一个比自身更大的世界。",
    image: "assets/fast-telescope-photo.jpg",
    alt: "位于群山中的 FAST 五百米口径球面射电望远镜航拍照片",
  },
];

const compareTopics = {
  sky: {
    theme: "观天",
    kicker: "器物 01",
    object: "浑天仪",
    date: "汉代 · 约公元 100 年",
    image: "assets/armillary-sphere.jpg",
    alt: "汉代浑天仪与赤道装置复制品",
    pastTitle: "天，究竟如何运转？",
    pastText:
      "汉代学者以浑天说解释宇宙，认为天如蛋壳、地如蛋黄。张衡改进浑天仪，用圆环模拟天体运行，让抽象的天空变成可以观察和演示的模型。",
    nowTitle: "宇宙，如何留下自己的声音？",
    nowText:
      "今天，位于贵州的 FAST 射电望远镜接收遥远天体发出的微弱无线电波。观测尺度从肉眼可见的星空，扩展到肉眼不可见的宇宙深处。",
    synthesis:
      "从模型到射电，我们仍在做同一件事：为看不见的秩序寻找可感知的形状。",
  },
  make: {
    theme: "造物",
    kicker: "器物 02",
    object: "水转翻车",
    date: "明代 · 1637 年",
    image: "assets/tiangong-pump.jpg",
    alt: "《天工开物》中的水转翻车线描插图",
    pastTitle: "怎样让水往高处走？",
    pastText:
      "《天工开物》以图文记录水转翻车、筒车等生产工具。人们借水力、齿轮与连续提水的结构，把自然之力转化成灌溉农田的秩序。",
    nowTitle: "怎样让系统更少消耗、更可持续？",
    nowText:
      "现代水利、流体机械与智能调度把效率、生态和安全放在同一张图上。面对的问题不再只是“能不能”，还包括“应不应该、能否长久”。",
    synthesis:
      "造物从来不是征服自然的单向动作，而是人重新安排自己与自然关系的过程。",
  },
  write: {
    theme: "书写",
    kicker: "器物 03",
    object: "《金刚经》印本",
    date: "唐代 · 868 年",
    image: "assets/diamond-sutra.jpg",
    alt: "敦煌出土的唐代《金刚经》印本长卷",
    pastTitle: "怎样让一句话抵达更多的人？",
    pastText:
      "雕版印刷把文字反刻在木板上，再以纸墨复制。它降低了重复抄写的时间成本，让文本能够跨越地域，以更统一的形态流传。",
    nowTitle: "怎样让知识既快速流动，又仍然可信？",
    nowText:
      "数字出版把复制成本降到近乎为零，也让筛选、溯源与验证成为新的难题。信息从不稀缺，可信的上下文反而更珍贵。",
    synthesis:
      "媒介一再改变，阅读的核心任务却没有变：理解文本从哪里来，并判断它值不值得相信。",
  },
  travel: {
    theme: "行旅",
    kicker: "器物 04",
    object: "宫苑山水",
    date: "南宋 · 12 至 13 世纪",
    image: "assets/song-landscape.jpg",
    alt: "南宋佚名《宫苑图》，描绘山水间的宫苑与路径",
    pastTitle: "人如何理解自己身处的地方？",
    pastText:
      "山水画并不只是风景记录。高远、深远与平远的构图，承载着观看者的位置感、秩序感，以及人与天地之间应保持的距离。",
    nowTitle: "地图之外，我们还如何抵达一个地方？",
    nowText:
      "卫星定位给出精确坐标，影像、声音与个人记忆则补足地方的气味和温度。导航告诉我们怎样到达，经验才说明那里意味着什么。",
    synthesis:
      "地图回答“在哪里”，文化回答“为什么这里值得被记住”。两者合在一起，地方才真正成为地方。",
  },
};

const quotes = [
  {
    text: "温故而知新，可以为师矣。",
    source: "《论语 · 为政》",
    reading:
      "复习旧知并不是重复过去，而是在已有经验中发现尚未看见的新联系。知识因此不只是积累，也成为继续提问的能力。",
  },
  {
    text: "旧学商量加邃密，新知培养转深沉。",
    source: "朱熹《鹅湖寺和陆子寿》",
    reading:
      "旧学需要反复讨论，才能深密；新知需要持续培养，才会沉静。真正开阔的知识，往往在两种时间尺度之间来回生长。",
  },
  {
    text: "问渠那得清如许？为有源头活水来。",
    source: "朱熹《观书有感》",
    reading:
      "清澈不是因为静止，而是因为持续流动。传统若只被供奉，便会失去活水；不断被重新解释，才会继续滋养今天。",
  },
  {
    text: "观今宜鉴古，无古不成今。",
    source: "《增广贤文》",
    reading:
      "观察今天，需要以历史作镜；没有过去，也就没有现在。所谓“通”，不是把古今并排，而是理解它们如何彼此构成。",
  },
  {
    text: "欲知大道，必先为史。",
    source: "龚自珍《尊史》",
    reading:
      "历史提供的不是一串可以背诵的结论，而是理解变化如何发生的方法。懂得来路，才可能对去处作出更清醒的判断。",
  },
];

const quizQuestions = [
  {
    category: "印刷",
    question: "《金刚经》868 年印本，在文明史上最重要的特征是什么？",
    options: [
      "已知最早有明确纪年的完整印刷书籍之一",
      "已知最早使用彩色油墨的绘画作品",
      "已知最早的汉字书法理论著作",
    ],
    answer: 0,
    feedback:
      "咸通九年（868）的《金刚经》卷轴，证明雕版印刷在唐代已达到相当成熟的水平。",
  },
  {
    category: "观天",
    question: "汉代的浑天仪，主要用于做什么？",
    options: [
      "预测地下水的位置",
      "观察与演示天体的运行",
      "计算驿路与城市的距离",
    ],
    answer: 1,
    feedback:
      "浑天仪以同心圆环模拟天体位置，是观测、计算与演示宇宙结构的重要仪器。",
  },
  {
    category: "造物",
    question: "《天工开物》更接近哪一类著作？",
    options: [
      "记录宫廷礼仪的典章",
      "以山水为主题的画谱",
      "覆盖农业与手工业的技术百科",
    ],
    answer: 2,
    feedback:
      "宋应星在《天工开物》中系统记录谷物、纺织、冶铸、造纸等生产活动，是重要的技术文献。",
  },
];

const timelineImage = document.querySelector("#timeline-image");
const timelineObject = document.querySelector("#object-label");
const storyEra = document.querySelector("#story-era");
const storyNumber = document.querySelector("#story-number");
const storyTitle = document.querySelector("#story-title");
const storyDescription = document.querySelector("#story-description");
const storyInsight = document.querySelector("#story-insight");
const storyConnection = document.querySelector("#story-connection");
const railItems = [...document.querySelectorAll(".rail-item")];
const railProgress = document.querySelector("#rail-progress");
let currentTimeline = 0;

function renderTimeline(index, shouldAnimate = true) {
  currentTimeline = (index + timelineItems.length) % timelineItems.length;
  const item = timelineItems[currentTimeline];

  const updateContent = () => {
    timelineImage.src = item.image;
    timelineImage.alt = item.alt;
    timelineObject.textContent = item.object;
    storyEra.textContent = item.era;
    storyNumber.textContent = String(currentTimeline + 1).padStart(2, "0");
    storyTitle.textContent = item.title;
    storyDescription.textContent = item.description;
    storyInsight.textContent = item.insight;
    storyConnection.textContent = item.connection;
    timelineImage.classList.remove("is-switching");
  };

  if (shouldAnimate) {
    timelineImage.classList.add("is-switching");
    window.setTimeout(updateContent, 180);
  } else {
    updateContent();
  }

  railItems.forEach((itemNode, itemIndex) => {
    const isActive = itemIndex === currentTimeline;
    itemNode.classList.toggle("is-active", isActive);
    itemNode.setAttribute("aria-selected", String(isActive));
    itemNode.tabIndex = isActive ? 0 : -1;
  });
  railProgress.style.width = `${currentTimeline * 25}%`;
}

railItems.forEach((item, index) => {
  item.addEventListener("click", () => renderTimeline(index));
  item.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (index + direction + railItems.length) % railItems.length;
      renderTimeline(nextIndex);
      railItems[nextIndex].focus();
    }
  });
});

document.querySelector("#timeline-prev").addEventListener("click", () => renderTimeline(currentTimeline - 1));
document.querySelector("#timeline-next").addEventListener("click", () => renderTimeline(currentTimeline + 1));

const compareTabs = [...document.querySelectorAll(".compare-tab")];
const compareImage = document.querySelector("#compare-image");
const compareKicker = document.querySelector("#compare-kicker");
const compareObject = document.querySelector("#compare-object");
const compareDate = document.querySelector("#compare-date");
const compareTheme = document.querySelector("#compare-theme");
const comparePastTitle = document.querySelector("#compare-past-title");
const comparePastText = document.querySelector("#compare-past-text");
const compareNowTitle = document.querySelector("#compare-now-title");
const compareNowText = document.querySelector("#compare-now-text");
const compareSynthesis = document.querySelector("#compare-synthesis");

function renderCompare(topicKey) {
  const topic = compareTopics[topicKey];
  if (!topic) return;

  compareImage.classList.add("is-switching");
  window.setTimeout(() => {
    compareImage.src = topic.image;
    compareImage.alt = topic.alt;
    compareKicker.textContent = topic.kicker;
    compareObject.textContent = topic.object;
    compareDate.textContent = topic.date;
    compareTheme.textContent = topic.theme;
    comparePastTitle.textContent = topic.pastTitle;
    comparePastText.textContent = topic.pastText;
    compareNowTitle.textContent = topic.nowTitle;
    compareNowText.textContent = topic.nowText;
    compareSynthesis.textContent = topic.synthesis;
    compareImage.classList.remove("is-switching");
  }, 180);

  compareTabs.forEach((tab) => {
    const isActive = tab.dataset.topic === topicKey;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  });
}

compareTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => renderCompare(tab.dataset.topic));
  tab.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (index + direction + compareTabs.length) % compareTabs.length;
      compareTabs[nextIndex].focus();
      renderCompare(compareTabs[nextIndex].dataset.topic);
    }
  });
});

let currentQuote = 0;
const quoteFeature = document.querySelector(".quote-feature");
const quoteText = document.querySelector("#quote-text");
const quoteSource = document.querySelector("#quote-source");
const quoteReading = document.querySelector("#quote-reading");
const quoteIndex = document.querySelector("#quote-index");
const toast = document.querySelector("#toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

document.querySelector("#quote-next").addEventListener("click", () => {
  currentQuote = (currentQuote + 1) % quotes.length;
  quoteFeature.classList.add("is-switching");
  window.setTimeout(() => {
    const quote = quotes[currentQuote];
    quoteText.textContent = quote.text;
    quoteSource.textContent = quote.source;
    quoteReading.textContent = quote.reading;
    quoteIndex.textContent = `${String(currentQuote + 1).padStart(2, "0")} / ${String(quotes.length).padStart(2, "0")}`;
    quoteFeature.classList.remove("is-switching");
  }, 180);
});

document.querySelector("#quote-copy").addEventListener("click", async () => {
  const quote = quotes[currentQuote];
  const text = `${quote.text} ${quote.source}`;
  try {
    await navigator.clipboard.writeText(text);
    showToast("名句已复制");
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showToast("名句已复制");
  }
});

const quizContent = document.querySelector("#quiz-content");
const quizResult = document.querySelector("#quiz-result");
const quizCount = document.querySelector("#quiz-count");
const quizCategory = document.querySelector("#quiz-category");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const feedbackVerdict = document.querySelector("#feedback-verdict");
const feedbackText = document.querySelector("#feedback-text");
const nextQuestionButton = document.querySelector("#next-question");
const quizProgressBar = document.querySelector("#quiz-progress-bar");
const scoreValue = document.querySelector("#score-value");
const resultScore = document.querySelector("#result-score");
const resultTitle = document.querySelector("#result-title");
const resultCopy = document.querySelector("#result-copy");
let currentQuestion = 0;
let score = 0;
let hasAnswered = false;

function renderQuestion() {
  const question = quizQuestions[currentQuestion];
  hasAnswered = false;
  quizCount.textContent = `题目 ${String(currentQuestion + 1).padStart(2, "0")} / ${String(quizQuestions.length).padStart(2, "0")}`;
  quizCategory.textContent = question.category;
  quizQuestion.textContent = question.question;
  quizOptions.innerHTML = "";
  quizFeedback.hidden = true;

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.answer = String(index);
    const marker = document.createElement("span");
    marker.textContent = String.fromCharCode(65 + index);
    button.append(marker, document.createTextNode(option));
    button.addEventListener("click", () => answerQuestion(index));
    quizOptions.appendChild(button);
  });

  quizProgressBar.style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;
  quizContent.hidden = false;
  quizResult.hidden = true;
}

function answerQuestion(answerIndex) {
  if (hasAnswered) return;
  hasAnswered = true;
  const question = quizQuestions[currentQuestion];
  const buttons = [...quizOptions.querySelectorAll("button")];
  const isCorrect = answerIndex === question.answer;

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.answer) button.classList.add("is-correct");
    if (index === answerIndex && !isCorrect) button.classList.add("is-wrong");
  });

  if (isCorrect) {
    score += 1;
    scoreValue.textContent = String(score);
  }

  feedbackVerdict.textContent = isCorrect ? "答对了" : "再看一眼";
  feedbackText.textContent = question.feedback;
  nextQuestionButton.querySelector("span").textContent =
    currentQuestion === quizQuestions.length - 1 ? "查看结果" : "下一题";
  quizFeedback.hidden = false;
}

nextQuestionButton.addEventListener("click", () => {
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
    document.querySelector(".quiz-panel").scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    showQuizResult();
  }
});

function showQuizResult() {
  quizContent.hidden = true;
  quizResult.hidden = false;
  quizProgressBar.style.width = "100%";
  resultScore.textContent = String(score);
  if (score === 3) {
    resultTitle.textContent = "通今，也从识古开始。";
    resultCopy.textContent = "你已经抓住了器物背后的关键线索。历史并非标准答案，而是继续追问的起点。";
  } else if (score === 2) {
    resultTitle.textContent = "一条清晰的来路，正在展开。";
    resultCopy.textContent = "你已经辨认出多数关键变化。回到时间轴再看一眼，那些细节会拼出更完整的图景。";
  } else {
    resultTitle.textContent = "问题比答案走得更远。";
    resultCopy.textContent = "分数只是这一轮阅读的落点。带着未解之处再走一遍，古与今的关系会渐渐清晰。";
  }
}

document.querySelector("#restart-quiz").addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  scoreValue.textContent = "0";
  renderQuestion();
});

const header = document.querySelector("#site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

function setMenu(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "关闭导航菜单" : "打开导航菜单");
  mobileMenu.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
  menuToggle.innerHTML = `<i data-lucide="${open ? "x" : "menu"}" aria-hidden="true"></i>`;
  if (window.lucide) window.lucide.createIcons();
}

menuToggle.addEventListener("click", () => {
  setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenu(false);
  }
});

const navLinks = [...document.querySelectorAll(".desktop-nav .nav-link")];
const observedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
);

observedSections.forEach((section) => navObserver.observe(section));

window.addEventListener(
  "scroll",
  () => {
    header.classList.toggle("is-scrolled", window.scrollY > 32);
  },
  { passive: true }
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  revealObserver.observe(element);
});

function formatChineseDate(date) {
  const months = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"];
  const days = [
    "一", "二", "三", "四", "五", "六", "七", "八", "九", "十",
    "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
    "二十一", "二十二", "二十三", "二十四", "二十五", "二十六", "二十七", "二十八", "二十九", "三十", "三十一",
  ];
  return `${months[date.getMonth()]}月${days[date.getDate() - 1]}日`;
}

const today = new Date();
document.querySelector("#today-date").textContent = formatChineseDate(today);
document.querySelector("#today-date").dateTime = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, "0"),
  String(today.getDate()).padStart(2, "0"),
].join("-");

if (window.lucide) {
  window.lucide.createIcons({
    attrs: {
      "stroke-width": 1.5,
    },
  });
}

renderTimeline(0, false);
renderQuestion();
