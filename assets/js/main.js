document.addEventListener("DOMContentLoaded", () => {
  const elements = {
    leftSide: document.querySelector(".sidebar--left"),
    rightSide: document.querySelector(".sidebar--right"),
    leftOpen: document.getElementById("leftOpen"),
    rightOpen: document.getElementById("rightOpen"),
    leftClose: document.getElementById("leftClose"),
    rightClose: document.getElementById("rightClose"),
    switchTheme: document.getElementById("switchTheme"),
    fontAdjustment: document.getElementById("fontAdjustment"),
  };

  const toggleSidebar = (toggle, element) => {
    toggle?.addEventListener("click", () => element.classList.toggle("open"));
  };

  ["leftOpen", "rightOpen", "leftClose", "rightClose"].forEach((key) => {
    toggleSidebar(elements[key], elements[key.replace("Open", "Side").replace("Close", "Side")]);
  });

  // Menetapkan tema default berdasarkan preferensi sistem
const setDefaultTheme = () => {
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme");

  // Jika tema sudah disimpan sebelumnya, gunakan tema tersebut, jika tidak, gunakan preferensi sistem
  const theme = savedTheme || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);

  const icon = elements.switchTheme.querySelector("i");
  icon.classList.toggle("bi-sun", theme === "light");
  icon.classList.toggle("bi-moon", theme === "dark");
};

// Fungsi untuk mengubah tema
const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);

  const icon = elements.switchTheme.querySelector("i");
  icon.classList.toggle("bi-sun", newTheme === "light");
  icon.classList.toggle("bi-moon", newTheme === "dark");

  // Simpan tema yang dipilih ke localStorage
  localStorage.setItem("theme", newTheme);
};

// Set tema default saat pertama kali digunakan
setDefaultTheme();

// Tambahkan event listener untuk tombol switch tema
elements.switchTheme?.addEventListener("click", toggleTheme);


  const adjustFontSize = (size) => {
    document.documentElement.style.fontSize = size === "default" ? "" : `${size}%`;
  };

  elements.fontAdjustment?.addEventListener("change", function () {
    const selectedFont = this.value;
    localStorage.setItem("fontSize", selectedFont);
    adjustFontSize(selectedFont);
  });

  window.addEventListener("load", () => {
    const savedFont = localStorage.getItem("fontSize") || "default";
    elements.fontAdjustment.value = savedFont;
    adjustFontSize(savedFont);
  });

  const updateWordCount = () => {
    const content = document.getElementById("contentArticle").innerText;
    const words = content.trim().split(/\s+/).filter((word) => word.length > 0).length;
    const characters = content.replace(/\s+/g, "").length;

    document.getElementById("wordCount").innerText = words;
    document.getElementById("charCount").innerText = characters;
  };

  updateWordCount();

  const observer = new MutationObserver(updateWordCount);
  observer.observe(document.getElementById("contentArticle"), {
    childList: true,
    subtree: true,
    characterData: true,
  });

  const breadcrumbElement = document.getElementById("breadcrumbElement");

  const checkOverflow = () => {
    breadcrumbElement.classList.toggle("has-overflow", 
      breadcrumbElement.scrollWidth > breadcrumbElement.clientWidth || 
      breadcrumbElement.scrollHeight > breadcrumbElement.clientHeight);
  };

  window.addEventListener("resize", checkOverflow);
  checkOverflow();

  const firstSubmenu = document.querySelector(".nav__item .nav__list--collapse");
  if (firstSubmenu) {
    firstSubmenu.classList.add("is-visible");
    const firstButton = firstSubmenu.closest(".nav__item").querySelector(".btn--collapse .btn__icon");
    firstButton.classList.replace("bi-folder2", "bi-folder2-open");
  }

  document.querySelectorAll(".btn--collapse").forEach((button) => {
    button.addEventListener("click", function () {
      const submenu = button.closest(".nav__item").querySelector(".nav__list--collapse");
      submenu.classList.toggle("is-visible");
      button.querySelector(".btn__icon").classList.toggle("bi-folder2-open", submenu.classList.contains("is-visible"));
      button.querySelector(".btn__icon").classList.toggle("bi-folder2", !submenu.classList.contains("is-visible"));
    });
  });

  const toggleButton = document.getElementById("toggleCollapseAll");
  toggleButton.addEventListener("click", function () {
    const allSubmenus = document.querySelectorAll(".nav__list--collapse");
    const allIcons = document.querySelectorAll(".btn__icon");
    const openAll = Array.from(allSubmenus).every(submenu => submenu.classList.contains("is-visible"));

    allSubmenus.forEach(submenu => submenu.classList.toggle("is-visible", !openAll));
    allIcons.forEach(icon => icon.classList.toggle("bi-folder2-open", !openAll));
    allIcons.forEach(icon => icon.classList.toggle("bi-folder2", openAll));
    toggleButton.querySelector(".btn__icon").classList.toggle("bi-folder2-open", !openAll);
    toggleButton.querySelector(".btn__icon").classList.toggle("bi-folder2", openAll);
  });

  const switchTab = (selectedTab, group) => {
    document.querySelectorAll(`.tab-action[data-tabs-group="${group}"] ~ .tab-area .tab-area__content`)
      .forEach(tab => tab.classList.toggle("active", tab.getAttribute("data-tab") === selectedTab));
    localStorage.setItem(`${group}-selectedTab`, selectedTab);
  };

  document.querySelectorAll(".tab-action").forEach((tabSelect) => {
    tabSelect.addEventListener("change", (e) => {
      switchTab(e.target.value, e.target.getAttribute("data-tabs-group"));
    });

    const group = tabSelect.getAttribute("data-tabs-group");
    const savedTab = localStorage.getItem(`${group}-selectedTab`);
    switchTab(savedTab || tabSelect.value, group);
  });
});
