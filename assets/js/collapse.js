export function treeCollapse() {
  const folderButtons = document.querySelectorAll('[data-folder-target]')

  folderButtons.forEach(data => {
    const getAttr = data.getAttribute('data-folder-target')
    const targetId = document.getElementById(getAttr)

    data.addEventListener('click', () => {
      targetId.classList.toggle('tree__collapse--is-active')
      data.classList.toggle('tree__btn--is-active')
    })
  })
}
