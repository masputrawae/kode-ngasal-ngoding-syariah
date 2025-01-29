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
    if (toggle && element) {
      toggle.addEventListener("click", () => element.classList.toggle("open"));
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
    elements.switchTheme.addEventListener("click", toggleTheme);
  }

  const adjustFontSize = (size) => {
    document.documentElement.style.fontSize =
      size === "default" ? "" : `${size}%`;
  };

  if (elements.fontAdjustment) {
    elements.fontAdjustment.addEventListener("change", function () {
      const selectedFont = this.value;
      localStorage.setItem("fontSize", selectedFont);
      adjustFontSize(selectedFont);
    });

    window.addEventListener("load", () => {
      const savedFont = localStorage.getItem("fontSize") || "default";
      elements.fontAdjustment.value = savedFont;
      adjustFontSize(savedFont);
    });
  }
});

// World Count
document.addEventListener("DOMContentLoaded", function () {
  function updateWordCount() {
    const content = document.getElementById("contentArticle").innerText;
    const words = content
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    const characters = content.replace(/\s+/g, "").length;

    document.getElementById("wordCount").innerText = words;
    document.getElementById("charCount").innerText = characters;
  }

  updateWordCount();

  // Optionally, update the count when the content changes
  const observer = new MutationObserver(updateWordCount);
  observer.observe(document.getElementById("contentArticle"), {
    childList: true,
    subtree: true,
    characterData: true,
  });
});

// MENENTUKAN OVERFLOW MUNCUL, BORDER MUNCUL
const breadcrumbElement = document.getElementById("breadcrumbElement");

function checkOverflow() {
  if (
    breadcrumbElement.scrollWidth > breadcrumbElement.clientWidth ||
    breadcrumbElement.scrollHeight > breadcrumbElement.clientHeight
  ) {
    breadcrumbElement.classList.add("has-overflow"); // Menambah class jika ada overflow
  } else {
    breadcrumbElement.classList.remove("has-overflow"); // Menghapus class jika tidak ada overflow
  }
}

// Periksa overflow saat ukuran berubah
window.addEventListener("resize", checkOverflow);
checkOverflow(); // Panggil pertama kali

// Collapse
document.addEventListener("DOMContentLoaded", function () {
  // Menambahkan 'is-visible' pada submenu pertama (seperti sebelumnya)
  const firstSubmenu = document.querySelector(
    ".nav__item .nav__list--collapse"
  );
  if (firstSubmenu) {
    firstSubmenu.classList.add("is-visible");
    const firstButton = firstSubmenu
      .closest(".nav__item")
      .querySelector(".btn--collapse .btn__icon");
    firstButton.classList.remove("bi-folder2");
    firstButton.classList.add("bi-folder2-open");
  }

  // Event listener untuk tombol collapse individu
  const buttons = document.querySelectorAll(".btn--collapse");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const parentItem = button.closest(".nav__item");
      const submenu = parentItem.querySelector(".nav__list--collapse");

      // Toggle visibility
      submenu.classList.toggle("is-visible");

      // Change icon based on visibility
      const icon = button.querySelector(".btn__icon");
      if (submenu.classList.contains("is-visible")) {
        icon.classList.remove("bi-folder2");
        icon.classList.add("bi-folder2-open");
      } else {
        icon.classList.remove("bi-folder2-open");
        icon.classList.add("bi-folder2");
      }
    });
  });

  // Event listener untuk tombol "Buka Semua / Tutup Semua"
  const toggleButton = document.getElementById("toggleCollapseAll");
  toggleButton.addEventListener("click", function () {
    const allSubmenus = document.querySelectorAll(".nav__list--collapse");
    const allIcons = document.querySelectorAll(".btn__icon");

    let openAll = true;
    allSubmenus.forEach((submenu) => {
      if (!submenu.classList.contains("is-visible")) {
        openAll = false;
      }
    });

    if (openAll) {
      // Jika semua terbuka, tutup semua
      allSubmenus.forEach((submenu) => {
        submenu.classList.remove("is-visible");
      });
      allIcons.forEach((icon) => {
        icon.classList.remove("bi-folder2-open");
        icon.classList.add("bi-folder2");
      });
      toggleButton
        .querySelector(".btn__icon")
        .classList.remove("bi-folder2-open");
      toggleButton.querySelector(".btn__icon").classList.add("bi-folder2");
    } else {
      // Jika ada yang tertutup, buka semua
      allSubmenus.forEach((submenu) => {
        submenu.classList.add("is-visible");
      });
      allIcons.forEach((icon) => {
        icon.classList.remove("bi-folder2");
        icon.classList.add("bi-folder2-open");
      });
      toggleButton.querySelector(".btn__icon").classList.remove("bi-folder2");
      toggleButton.querySelector(".btn__icon").classList.add("bi-folder2-open");
    }
  });
});

// TABS MENU
// Fungsi untuk menangani perubahan tab berdasarkan grup
function switchTab(selectedTab, group) {
  const tabContents = document.querySelectorAll(
    `.tab-action[data-tabs-group="${group}"] ~ .tab-area .tab-area__content`
  );
  tabContents.forEach((tab) => {
    if (tab.getAttribute("data-tab") === selectedTab) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  // Simpan tab yang dipilih ke localStorage
  localStorage.setItem(`${group}-selectedTab`, selectedTab);
}

// Ambil semua elemen select untuk setiap grup
const tabSelects = document.querySelectorAll(".tab-action");

// Menambahkan event listener untuk setiap grup
tabSelects.forEach((tabSelect) => {
  tabSelect.addEventListener("change", (e) => {
    const selectedTab = e.target.value;
    const group = e.target.getAttribute("data-tabs-group");
    switchTab(selectedTab, group);
  });

  // Periksa apakah ada tab yang dipilih sebelumnya di localStorage
  const group = tabSelect.getAttribute("data-tabs-group");
  const savedTab = localStorage.getItem(`${group}-selectedTab`);

  // Jika ada tab yang disimpan di localStorage, pilih tab tersebut
  if (savedTab) {
    tabSelect.value = savedTab;
    switchTab(savedTab, group);
  } else {
    // Jika tidak ada yang disimpan, tampilkan tab default (tab pertama)
    switchTab(tabSelect.value, group);
  }
});