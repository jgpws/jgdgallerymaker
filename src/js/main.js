import * as globals from './global-vars.js';
import { selectGalPadding, selectImgSize, selectGridGaps, selectGalLayout } from './image-options.js';

export function init() {
  let cookieBanner = document.querySelector(".cookie-banner");
  let cbCloseBtn = document.querySelector(".close-btn");
  /* Set the interface on load */

  /* Set cookie notice only once */
  if (localStorage.getItem('cookieSeen') !== 'shown') {
    cookieBanner.classList.remove("hide");
    localStorage.setItem('cookieSeen', 'shown');
  }

  cbCloseBtn.addEventListener('click', function() {
    cookieBanner.classList.add("hide");
  });

  if (globals.galImgsArray.length === 0 || globals.galImgsArray === undefined) {
    globals.gallery.innerHTML = globals.imgsPlaceholder;
  }

  if (globals.gallery.innerHTML === '' || globals.gallery.innerHTML === globals.imgsPlaceholder) {
    globals.editSelect.setAttribute("disabled", "");
  }

  /* Set the move left button to disabled if
   * the first image is selected
   */
  /*if (globals.imgTile[count.value()] === globals.imgTile[0]) {
    globals.prevBtn.setAttribute("disabled", "");
    globals.moveLeftBtn.setAttribute("disabled", "");
  }*/

  if (globals.galPaddingLocalVal) {
    /* Set onload gallery padding select value to the locally stored value */
    document.getElementById("gallery-padding").value = globals.galPaddingLocalVal;

    /* Re-call selectGalPadding() function */
    selectGalPadding();
  }

  if (globals.imgSizeLocalVal) {
    /* Set onload image size select value to the locally stored value */
    document.getElementById("image-size").value = globals.imgSizeLocalVal;

    /* Re-call selectImgSize() function */
    selectImgSize();
  }

  if (globals.gridGapLocalVal) {
    /* Set onload grid gaps select value to the locally stored value */
    document.getElementById("grid-gaps").value = globals.gridGapLocalVal;

    /* Re-call selectGridGaps() function */
    selectGridGaps();
  }

  if (globals.galLayoutLocalVal) {
    document.getElementById("layout-style").value = globals.galLayoutLocalVal;

    /* Re-call selectGalLayout() function */
    selectGalLayout();
  }

  /* Remove .error, .warning classes on load */
  globals.imgError.classList.remove("error");
  globals.altError.classList.remove("warning");
}


export function resetFields() {
  document.getElementById("image_url").value = '';
  document.getElementById("alt_text").value = '';
}


export let count = (function() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    countUp: function() {
      changeBy(1);
    },
    countDown: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();
