const elHtml = document.documentElement;
const btnTheme = document.getElementById("switchTheme");
const KEY_THEME = 'THEME';

function applyTheme(theme) {
  elHtml.dataset.theme = theme;
  btnTheme.classList.toggle('isDark', theme === 'dark');
  sessionStorage.setItem(KEY_THEME, theme);
}

export function initTheme() {
  const isDarkSystem = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const systemTheme = isDarkSystem ? 'dark' : 'light';
  
  const storedTheme = sessionStorage.getItem(KEY_THEME);
  const initialTheme = storedTheme || systemTheme;
  
  applyTheme(initialTheme);
  if (!storedTheme) {
    sessionStorage.setItem(KEY_THEME, initialTheme);
  }
}

export function switchThemes() {
  btnTheme.addEventListener('click', () => {
    const currentTheme = sessionStorage.getItem(KEY_THEME);
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });
}