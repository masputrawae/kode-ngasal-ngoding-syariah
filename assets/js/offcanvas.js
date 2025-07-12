export function offcanvas(){
  const buttons = document.querySelectorAll('[data-sidebar-target]');
  buttons.forEach(data => {
    const targetId = data.getAttribute('data-sidebar-target');
    const targetEl = document.getElementById(targetId);

    data.addEventListener('click', ()=> {
      targetEl.classList.toggle('sidebar--is-open')
    })
  })
}