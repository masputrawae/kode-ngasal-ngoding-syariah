// import { } from './offcanvas.js';
import { initTree, treeCollapse } from './collapse.js';
// import { } from './modal.js';
import { initTheme, switchThemes } from './switchThemes.js';

function main(){
  initTheme();
  switchThemes();
  initTree();
  treeCollapse();
}

document.addEventListener('DOMContentLoaded', main)