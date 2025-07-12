import { offcanvas } from './offcanvas.js';
import { initTree, treeCollapse } from './collapse.js';
// import { } from './modal.js';
import { initTheme, switchThemes } from './switchThemes.js';

function main(){
  initTheme();
  switchThemes();
  initTree();
  treeCollapse();
  offcanvas();
}

document.addEventListener('DOMContentLoaded', main)