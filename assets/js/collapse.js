const TREE_KEY = 'TREE'
const folderButtons = document.querySelectorAll('[data-folder-target]')

export function initTree() {
  const treeState = JSON.parse(sessionStorage.getItem(TREE_KEY)) || {}

  folderButtons.forEach(button => {
    const targetId = button.getAttribute('data-folder-target')
    const targetEl = document.getElementById(targetId)

    // Apply saved state
    if (treeState[targetId]) {
      targetEl.classList.add('tree__children--is-open')
      button.classList.add('tree__btn--is-open')
    } else {
      targetEl.classList.remove('tree__children--is-open')
      button.classList.remove('tree__btn--is-open')
    }
  })
}

export function treeCollapse() {
  folderButtons.forEach(button => {
    const targetId = button.getAttribute('data-folder-target')
    const targetEl = document.getElementById(targetId)

    button.addEventListener('click', () => {
      const treeState = JSON.parse(sessionStorage.getItem(TREE_KEY)) || {}

      targetEl.classList.toggle('tree__children--is-open')
      button.classList.toggle('tree__btn--is-open')

      const isOpen = targetEl.classList.contains('tree__children--is-open')
      treeState[targetId] = isOpen

      sessionStorage.setItem(TREE_KEY, JSON.stringify(treeState))
    })
  })
}
