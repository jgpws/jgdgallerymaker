/* jgdGalleryMaker JavaScript file */
import '../style.css';
import logo from '../images/jgm-logo-large.png';
import defaultGalImg from '../images/default-image.png';

import * as globals from './js/global-vars.js';

import { init, resetFields, count } from './js/main.js';

import { instrPanel, slideInLeft, showInstructions } from './js/interface.js';
globals.instructionsBtn.addEventListener('click', showInstructions);

import { getImgURL, getAltText } from './js/get-values.js';
import { createImgArray, addImgTile, replaceEmptyImgs } from './js/create-images.js';
addImgTile();
globals.imgBtn.addEventListener('click', addImgTile);
globals.imgBtn.addEventListener('click', resetFields);

import * as edit from './js/edit-images.js';
globals.editSelect.addEventListener('change', edit.editImgTile);
globals.nextBtn.addEventListener('click', edit.selectNext);
globals.prevBtn.addEventListener('click', edit.selectPrev);
globals.moveRightBtn.addEventListener('click', edit.moveImgRight);
globals.moveLeftBtn.addEventListener('click', edit.moveImgLeft);
globals.delBtn.addEventListener('click', edit.deleteImg);
globals.removeBtn.addEventListener('click', edit.removeGallery);

import { selectGalPadding, selectImgSize, selectGridGaps } from './js/image-options.js';
globals.galPadSelect.addEventListener('change', selectGalPadding);
globals.imgSizeSelect.addEventListener('change', selectImgSize);
globals.gridGapsSelect.addEventListener('change', selectGridGaps);

import { storageAvailable, addToLocalStorage } from './js/local-storage.js';

import { img240CSS, img320CSS, img560CSS, img640CSS } from './js/image-css-text.js';

import { displayHTML, displayCSS, highlightHTMLFunc, highlightCSSFunc } from './js/display-html-css.js';
globals.imgBtn.addEventListener('click', displayHTML);
globals.moveRightBtn.addEventListener('click', displayHTML);
globals.moveLeftBtn.addEventListener('click', displayHTML);
globals.delBtn.addEventListener('click', displayHTML);
globals.galPadSelect.addEventListener('change', displayHTML);
globals.imgSizeSelect.addEventListener('change', displayHTML);
globals.imgSizeSelect.addEventListener('change', displayCSS);
globals.gridGapsSelect.addEventListener('change', displayHTML);
globals.selectHTMLBtn.addEventListener('click', highlightHTMLFunc);
globals.selectCSSBtn.addEventListener('click', highlightCSSFunc);

/* Page load event listeners */
window.addEventListener('load', function() {
  globals.imgError.innerText = '';
  globals.altError.innerText = '';
  replaceEmptyImgs();
  displayHTML();
  displayCSS();
});
window.addEventListener('DOMContentLoaded', init);
