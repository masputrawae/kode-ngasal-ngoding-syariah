// TOC COLLAPSIBLE
document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('[data-toc="TableOfContents"]')
    .addEventListener('click', () => {
      document.getElementById('TableOfContents').classList.toggle('isActive')
    })
})
