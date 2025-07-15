const elHtml = document.documentElement
const overlay = document.querySelector('.overlay')

// SWITCH THEME HANDLER
function themeHandler() {
  const KEY_THEME = 'THEME'
  const button = document.querySelector('#switchTheme')

  function setTheme(theme) {
    elHtml.dataset.theme = theme
    sessionStorage.setItem(KEY_THEME, theme)
    if (theme === 'dark') {
      button.classList.add('darkIsActive')
    } else {
      button.classList.remove('darkIsActive')
    }
  }

  function initTheme() {
    const isDarkSystem = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'

    const storageTheme = sessionStorage.getItem(KEY_THEME)
    setTheme(storageTheme ? storageTheme : isDarkSystem)
  }

  function toggleTheme() {
    button.addEventListener('click', () => {
      const storageTheme = sessionStorage.getItem(KEY_THEME)
      const newTheme = storageTheme === 'dark' ? 'light' : 'dark'
      setTheme(newTheme)
    })
  }

  initTheme()
  toggleTheme()
}

// SIDEBAR HANDLER
function sidebarHandler() {
  const buttons = document.querySelectorAll('[data-sidebar]')

  buttons.forEach(btn => {
    const targetId = btn.getAttribute('data-sidebar')
    const targetEl = document.getElementById(targetId)

    btn.addEventListener('click', () => {
      targetEl.classList.toggle('sidebar--isOpen')
      overlay.classList.toggle('overlay--isActive')
    })

    overlay.addEventListener('click', () => {
      targetEl.classList.remove('sidebar--isOpen')
      overlay.classList.remove('overlay--isActive')
    })
  })
}

// TYPING
function typingHandler() {
  function startTypingEffect(
    element,
    texts,
    typingSpeed = 150,
    deletingSpeed = 50,
    delay = 1000
  ) {
    let textIndex = 0
    let charIndex = 0
    let isDeleting = false

    function type() {
      const currentText = texts[textIndex]

      if (!isDeleting) {
        element.textContent = currentText.substring(0, charIndex + 1)
        charIndex++

        if (charIndex === currentText.length) {
          isDeleting = true
          setTimeout(type, delay)
          return
        }
      } else {
        element.textContent = currentText.substring(0, charIndex - 1)
        charIndex--
        if (charIndex === 1) {
          isDeleting = false
          textIndex = (textIndex + 1) % texts.length // next text
        }
      }
      setTimeout(type, isDeleting ? deletingSpeed : typingSpeed)
    }
    type()
  }

  document.querySelectorAll('.typewriter').forEach(el => {
    const texts = JSON.parse(el.getAttribute('data-texts'))
    startTypingEffect(el, texts)
  })
}

function main() {
  themeHandler()
  sidebarHandler()
  typingHandler()
}

document.addEventListener('DOMContentLoaded', main)
