const draggableElements = document.querySelectorAll('.menu')

let currentElement = null
let offsetX = 0
let offsetY = 0

draggableElements.forEach(el => {
  el.addEventListener('mousedown', e => {
    currentElement = el
    offsetX = e.clientX - el.offsetLeft
    offsetY = e.clientY - el.offsetTop
    el.style.cursor = 'grabbing'
  })
})

document.addEventListener('mousemove', e => {
  if (!currentElement) return
  currentElement.style.left = e.clientX - offsetX + 'px'
  currentElement.style.top = e.clientY - offsetY + 'px'
})

document.addEventListener('mouseup', () => {
  if (currentElement) {
    currentElement.style.cursor = 'grab'
  }
  currentElement = null
})

document.querySelectorAll('[data-menu]').forEach(menu => {
  const targetId = menu.getAttribute('data-menu')
  const targetEl = document.getElementById(targetId)

  menu.addEventListener('click', () => {
    targetEl.classList.toggle('menu--isOpen')
  })
})
