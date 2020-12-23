import { gallery } from './global-vars.js';
import { replaceEmptyImgs } from './create-images.js';
import { img240CSS, img320CSS, img560CSS, img640CSS } from './image-css-text.js';

function displayHTML() {
  let displayedHTML = document.getElementById("html-box");
  if (gallery.innerHTML !== '') {
    let replacedImgUrl = gallery.innerHTML.replace(/(images\/default-image\.png)/gm, replaceEmptyImgs());
    let cleanedText = replacedImgUrl.replace(/\s(is-highlighted|is-editable)/g, "");

    displayedHTML.innerText = '<div class="' + gallery.className + '">' + cleanedText + '</div>';
  }
}


function displayCSS() {
  let displayedCSS = document.getElementById("generated-css");
  let imgSizeSelectVal = document.getElementById("image-size").value;

  // This area will display dynamically generated CSS

  switch (imgSizeSelectVal) {
    case 'px-240':
      displayedCSS.innerHTML = '';
      displayedCSS.innerHTML += img240CSS;
      break;
    case 'px-560':
    displayedCSS.innerHTML = '';
      displayedCSS.innerText += img560CSS;
      break;
    case 'px-640':
      displayedCSS.innerHTML = '';
      displayedCSS.innerHTML += img640CSS;
      break;
    default:
      displayedCSS.innerHTML = '';
      displayedCSS.innerHTML += img320CSS;
      break;
  }
}


let highlightHTMLFunc = () => {
  let html = document.getElementById("html-box");

  /* Select everything in the html box; Uses Selection API */
  window.getSelection().selectAllChildren(html);
}


let highlightCSSFunc = () => {
  let css = document.getElementById("css-box");

  /* Select everything in the css box */
  window.getSelection().selectAllChildren(css);
}

export { displayHTML, displayCSS, highlightHTMLFunc, highlightCSSFunc };
