import { imgError, altError } from './global-vars.js';

function getImgURL() {
  let imgURL = document.getElementById("image_url").value;

  /* Use endsWith to find strings ending with typical image extensions;
   * assign each to variables
   */
  let endJpg = imgURL.endsWith('.jpg');
  let endJpeg = imgURL.endsWith('.jpeg');
  let endGif = imgURL.endsWith('.gif');
  let endPng = imgURL.endsWith('.png');

  if (imgURL === '') {
    imgError.innerText = 'Image URL field must have a URL.';
    imgError.classList.add("error");
  } else {
    imgError.classList.remove("error");
  }

  /* Regex to replace quotes and greater than/less than symbols */
  const removeQuotes = /[\'"><]/g;

  /* If all variables equal false,
   * add an error message into the #img-url-error div and erase the value in the div
   */
  if (imgURL !== '') {
    if (endJpg === false && endJpeg === false && endGif === false && endPng === false) {
      imgError.innerText = 'Image URL must end with .jpg, .jpeg, .gif or .png';
      imgError.classList.add("error");
      imgURL = '';
    } else {
      imgError.classList.remove("error");
    }

    /* Remove single or double quotes */
    imgURL = imgURL.replace(removeQuotes, '');
  }

  return imgURL;
}


function getAltText() {
  let altInput = document.getElementById("alt_text").value;
  const regex = /[a-z0-9\.\?! \-_]+/i;
  let m;

  if ((m = regex.exec(altInput)) !== null) {
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
      if (altInput !== match) {
        altError.innerText = 'Image alt text can only contain letters, numbers, spaces, dashes (-) and underscores (_). The image has been added without alt text.';
        altError.classList.add("warning");
        altInput = '';
      } else {
        altError.classList.remove("warning");
      }
    });
}

  return altInput;
}

export { getImgURL, getAltText };
