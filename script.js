// 模拟的词汇表（英文 -> 人造语言的映射关系）
const lexicon = {
    "water": "K",
    "fire": "L",
    "earth": "M",
    "life": "E",
    "all": "F",
    "night": "N",
    "morning": "O",
    "evening": "P",
    "yes": "Q",
    "no": "R",
    "eternal existance": "A",
    "eternal element": "C",
    "transient life": "B",
    "transient object": "D",
    "eternity": "S",
    // ... 添加其他单词
  };
  
  // 页面加载时显示开机动画，3秒后进入主界面
  window.onload = function() {
    setTimeout(() => {
      document.getElementById("splash-screen").style.display = "none";
      document.getElementById("main-content").style.display = "block";
    }, 5000); // 5秒后进入主页，可以调整时间
  }
  
  
  // 显示翻译界面
  function showTranslator() {
    document.getElementById("main-content").style.display = "none";
    document.getElementById("translator").style.display = "block";
  }
  
  
  function translateText() {
    const inputText = document.getElementById("inputText").value.trim().toLowerCase();
    const translatedWords = inputText.split(" ").map(word => {
      return lexicon[word] || word; // 若词汇表中没有找到单词，则原样返回
    });
    document.getElementById("outputText").textContent = translatedWords.join(" ");
  }
  
  
  // 显示词典界面
  function showDictionary() {
    const dictionaryList = document.getElementById("dictionaryList");
    dictionaryList.innerHTML = ""; // 清空之前的内容
  
    for (let [english, custom] of Object.entries(lexicon)) {
      const listItem = document.createElement("li");
  
      // 创建英文单词元素
      const englishWord = document.createElement("span");
      englishWord.textContent = english;
      englishWord.classList.add("english-word");
  
      // 创建自定义语言单词元素
      const customWord = document.createElement("span");
      customWord.textContent = custom;
      customWord.classList.add("custom-language-word");
  
      // 将两个元素添加到列表项中
      listItem.appendChild(englishWord);
      listItem.appendChild(document.createTextNode(" - "));
      listItem.appendChild(customWord);
  
      dictionaryList.appendChild(listItem);
    }
    
    document.getElementById("main-content").style.display = "none";
    document.getElementById("dictionary").style.display = "block";
  }
  
  
  // 返回主界面
  function showHome() {
    document.getElementById("translator").style.display = "none";
    document.getElementById("dictionary").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }
  
  // 翻译功能
  function translateText() {
    const inputText = document.getElementById("inputText").value.trim().toLowerCase();
    const translatedWords = inputText.split(" ").map(word => {
      return lexicon[word] || word; // 若词汇表中没有找到单词，则原样返回
    });
    document.getElementById("outputText").textContent = translatedWords.join(" ");
  }
  