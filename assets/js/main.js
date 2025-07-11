// import { } from './offcanvas.js';
import { treeCollapse } from './collapse.js';
// import { } from './modal.js';
import { initTheme, switchThemes } from './switchThemes.js';

function main(){
  initTheme();
  switchThemes();
  treeCollapse()
}

document.addEventListener('DOMContentLoaded', main)