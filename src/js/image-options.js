import { gallery } from './global-vars.js';

function selectGalPadding() {
  let galPaddingSelectVal = document.getElementById("gallery-padding").value;

  switch (galPaddingSelectVal) {
    case 'pad-48':
      gallery.classList.add("padding-48");
      gallery.classList.remove("padding-24", "padding-72", "padding-96");
      break;
    case 'pad-72':
      gallery.classList.add("padding-72");
      gallery.classList.remove("padding-24", "padding-48", "padding-96");
      break;
    case 'pad-96':
      gallery.classList.add("padding-96");
      gallery.classList.remove("padding-24", "padding-48", "padding-72");
      break;
    default:
      gallery.classList.add("padding-24");
      gallery.classList.remove("padding-48", "padding-72", "padding-96");
  }

  /* Set returnedimgTile = document.querySelectorAll(".jgd-gallery__image"); value into local storage to recall on load */
  localStorage.setItem('galleryPadding', galPaddingSelectVal);
}


function selectImgSize() {
  let imgSizeSelectVal = document.getElementById("image-size").value;

  switch (imgSizeSelectVal) {
    case 'px-240':
      gallery.classList.add("img240");
      gallery.classList.remove("img320", "img560", "img640");
      break;
    case 'px-560':
      gallery.classList.add("img560");
      gallery.classList.remove("img240", "img320", "img640");
      break;
    case 'px-640':
      gallery.classList.add("img640");
      gallery.classList.remove("img240", "img320", "img560");
      break;
    default:
      gallery.classList.add("img320");
      gallery.classList.remove("img240", "img560", "img640");
  }

  /* Set returned value into local storage to recall on load */
  localStorage.setItem('imageSize', imgSizeSelectVal);

  return selectImgSize;
}


function selectGridGaps() {
  let gridGapSelectVal = document.getElementById("grid-gaps").value;

  switch (gridGapSelectVal) {
    case 'zero':
      gallery.classList.remove("gap8", "gap16", "gap24", "gap32");
      break;
    case 'px-8':
      gallery.classList.add("gap8");
      gallery.classList.remove("gap16", "gap24", "gap32");
      break;
    case 'px-24':
      gallery.classList.add("gap24");
      gallery.classList.remove("gap8", "gap16", "gap32");
      break;
    case 'px-32':
      gallery.classList.add("gap32");
      gallery.classList.remove("gap8", "gap16", "gap24");
      break;
    default:
      gallery.classList.add("gap16");
      gallery.classList.remove("gap8", "gap24", "gap32");
  }

  /* Set returned value into local storage to recall on load */
  localStorage.setItem('gridGap', gridGapSelectVal);

  return gridGapSelectVal;
}

export { selectGalPadding, selectImgSize, selectGridGaps };
