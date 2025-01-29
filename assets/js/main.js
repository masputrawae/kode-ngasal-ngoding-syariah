document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    leftSide: document.querySelector(".sidebar--left"),
    rightSide: document.querySelector(".sidebar--right"),
    leftOpen: document.getElementById("leftOpen"),
    rightOpen: document.getElementById("rightOpen"),
    leftClose: document.getElementById("leftClose"),
    rightClose: document.getElementById("rightClose"),
    switchTheme: document.getElementById("switchTheme"),
    fontAdjustment: document.getElementById('fontAdjustment')
  };

  const toggleSidebar = (toggle, element) => {
    if (toggle && element) {
      toggle.addEventListener('click', () => element.classList.toggle("open"));
    }
  };

  toggleSidebar(elements.leftOpen, elements.leftSide);
  toggleSidebar(elements.rightOpen, elements.rightSide);
  toggleSidebar(elements.leftClose, elements.leftSide);
  toggleSidebar(elements.rightClose, elements.rightSide);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    const icon = elements.switchTheme.querySelector("i");
    icon.classList.toggle("bi-sun", newTheme === "light");
    icon.classList.toggle("bi-moon", newTheme === "dark");
  };

  if (elements.switchTheme) {
    elements.switchTheme.addEventListener('click', toggleTheme);
  }

  const adjustFontSize = (size) => {
    document.documentElement.style.fontSize = size === 'default' ? '' : `${size}%`;
  };

  if (elements.fontAdjustment) {
    elements.fontAdjustment.addEventListener('change', function() {
      const selectedFont = this.value;
      localStorage.setItem('fontSize', selectedFont);
      adjustFontSize(selectedFont);
    });

    window.addEventListener('load', () => {
      const savedFont = localStorage.getItem('fontSize') || 'default';
      elements.fontAdjustment.value = savedFont;
      adjustFontSize(savedFont);
    });
  }
});

// World Count
document.addEventListener('DOMContentLoaded', function() {
  function updateWordCount() {
    const content = document.getElementById('contentArticle').innerText;
    const words = content.trim().split(/\s+/).filter(word => word.length > 0).length;
    const characters = content.replace(/\s+/g, '').length;

    document.getElementById('wordCount').innerText = words;
    document.getElementById('charCount').innerText = characters;
  }

  updateWordCount();

  // Optionally, update the count when the content changes
  const observer = new MutationObserver(updateWordCount);
  observer.observe(document.getElementById('contentArticle'), { childList: true, subtree: true, characterData: true });
});

// MENENTUKAN OVERFLOW MUNCUL, BORDER MUNCUL
const breadcrumbElement = document.getElementById('breadcrumbElement');

  function checkOverflow() {
    if (breadcrumbElement.scrollWidth > breadcrumbElement.clientWidth || breadcrumbElement.scrollHeight > breadcrumbElement.clientHeight) {
      breadcrumbElement.classList.add('has-overflow'); // Menambah class jika ada overflow
    } else {
      breadcrumbElement.classList.remove('has-overflow'); // Menghapus class jika tidak ada overflow
    }
  }

  // Periksa overflow saat ukuran berubah
  window.addEventListener('resize', checkOverflow);
  checkOverflow(); // Panggil pertama kali