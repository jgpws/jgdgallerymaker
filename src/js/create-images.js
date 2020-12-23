import { gallery, galImgsArray, editSelect } from './global-vars.js';
import { getImgURL, getAltText } from './get-values.js';

function createImgArray() {
  /* Create an object that holds url and alt text */
  const image = {
    imgUrl: getImgURL(),
    alt: getAltText(),
  }

  /* Add image using unshift;
   * subsequent images should be added before the previous.
   */
  /* Limits number of URLs to 48. */
  if (image.imgUrl !== '' && galImgsArray.length !== 48) {
    galImgsArray.unshift(image);
  }

  /* We also loop through galImgsArray and set the length to the maximum of 48. */
  for (let i = 0; i < galImgsArray.length; i++) {
    if (i === 48) {
      galImgsArray.length = 48;
    }
  }

  /* Put images into local storage */
  localStorage.setItem('imagesArray', JSON.stringify(galImgsArray));

  /* Remove disabled state for editing select box */
  editSelect.removeAttribute("disabled");

  return galImgsArray;
}


function addImgTile(arr) {
  /* Assign array result from createImgArray() to arr parameter */
  arr = createImgArray();

  /* Clear previous HTML content before looping */
  gallery.innerHTML = '';

  /* Loop through each image and add HTML tags around them */
  for (let i = 0, len = arr.length; i < len; i++) {
    gallery.innerHTML += `\n  <figure class="jgd-gallery__image">
    <a href="${arr[i].imgUrl}">
      <img src="${arr[i].imgUrl}" alt="${arr[i].alt}" />
    </a>
  </figure>\n`;
}

  return gallery.innerHTML;
}


function replaceEmptyImgs() {
  let images = document.querySelectorAll(".jgd-gallery img");
  let closestUrl;

  for (let i = 0, len = images.length; i < len; i++) {

    /* If any image has a width of 0 (does not exist)
     * replace with a default image
     */
    if (images[i].naturalWidth === 0) {
      images[i].setAttribute("src", "images/default-image.png");
      closestUrl = images[i].closest("a").href;
    }
  }
}

export { createImgArray, addImgTile, replaceEmptyImgs };
