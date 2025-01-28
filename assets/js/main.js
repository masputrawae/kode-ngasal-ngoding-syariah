document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    leftSide: document.querySelector(".sidebar--left"),
    rightSide: document.querySelector(".sidebar--right"),
    leftOpen: document.getElementById("leftOpen"),
    rightOpen: document.getElementById("rightOpen"),
    leftClose: document.getElementById("leftClose"),
    rightClose: document.getElementById("rightClose"),
    switchTheme: document.getElementById("switchTheme")
  };

  function toggleSidebar(toggle, element) {
    if (toggle && element) {
      toggle.addEventListener('click', () => element.classList.toggle("open"));
    }
  }

  toggleSidebar(elements.leftOpen, elements.leftSide);
  toggleSidebar(elements.rightOpen, elements.rightSide);
  toggleSidebar(elements.leftClose, elements.leftSide);
  toggleSidebar(elements.rightClose, elements.rightSide);

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    // Change icon
    const icon = elements.switchTheme.querySelector("i");
    icon.classList.toggle("bi-sun", newTheme === "light");
    icon.classList.toggle("bi-moon", newTheme === "dark");
  }

  if (elements.switchTheme) {
    elements.switchTheme.addEventListener('click', toggleTheme);
  }
});