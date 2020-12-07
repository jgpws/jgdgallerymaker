/* jgdGalleryMaker JavaScript file */

(function() {

  // Main interface buttons
  let instructionsBtn = document.querySelector(".instructions-btn"),
      imgBtn = document.querySelector(".img-submit-btn"),
      removeBtn = document.querySelector(".clear-btn"),
      selectHTMLBtn = document.querySelector(".select-html-btn"),
      selectCSSBtn = document.querySelector(".select-css-btn"),
      galPadSelect = document.getElementById("gallery-padding"),
      imgSizeSelect = document.getElementById("image-size"),
      gridGapsSelect = document.getElementById("grid-gaps"),
      editSelect = document.getElementById("gallery-mode");

  // Edit buttons
  let nextBtn = document.getElementById("next-img"),
      prevBtn = document.getElementById("prev-img"),
      moveRightBtn = document.getElementById("move-img-right"),
      moveLeftBtn = document.getElementById("move-img-left"),
      delBtn = document.getElementById("delete-img");

  // Copy boxes
  let codePanel = document.querySelector(".code-panel");
  let copyCSS = document.getElementById("css-box");

  // Error boxes
  let imgError = document.getElementById("img-url-error"),
      altError = document.getElementById("alt-text-error");

  // Select values
  let editSelectVal = document.getElementById("gallery-mode").value;

  let gallery = document.querySelector(".jgd-gallery");

  let imgTile;

  let imgsPlaceholder = '<p class="img-placeholder">Images will appear here.</p>';

  /* Get images array from local storage, if stored there
   * or set an empty array if not
   */
  let galImgsArray = localStorage.getItem('imagesArray') ? JSON.parse(localStorage.getItem('imagesArray')) : [];

  /* grab other local storage values on page load */
  let galPaddingLocalVal = localStorage.getItem('galleryPadding') ? localStorage.getItem('galleryPadding') : 'pad-24';
  let imgSizeLocalVal = localStorage.getItem('imageSize') ? localStorage.getItem('imageSize') : 'px-320';
  let gridGapLocalVal = localStorage.getItem('gridGap') ? localStorage.getItem('gridGap') : 'px-16';

  /* Add images to the parent container .jgd-gallery */
  gallery.innerHTML = galImgsArray;


  function init() {
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

    if (galImgsArray.length === 0 || galImgsArray === undefined) {
      gallery.innerHTML = imgsPlaceholder;
    }

    if (gallery.innerHTML === '' || gallery.innerHTML === imgsPlaceholder) {
      editSelect.setAttribute("disabled", "");
    }

    /* Set the move left button to disabled if
     * the first image is selected
     */
    if (imgTile[count.value()] === imgTile[0]) {
      prevBtn.setAttribute("disabled", "");
      moveLeftBtn.setAttribute("disabled", "");
    }

    if (galPaddingLocalVal) {
      /* Set onload gallery padding select value to the locally stored value */
      document.getElementById("gallery-padding").value = galPaddingLocalVal;

      /* Re-call selectGalPadding() function */
      selectGalPadding();
    }

    if (imgSizeLocalVal) {
      /* Set onload image size select value to the locally stored value */
      document.getElementById("image-size").value = imgSizeLocalVal;

      /* Re-call selectImgSize() function */
      selectImgSize();
    }

    if (gridGapLocalVal) {
      /* Set onload grid gaps select value to the locally stored value */
      document.getElementById("grid-gaps").value = gridGapLocalVal;

      /* Re-call selectGridGaps() function */
      selectGridGaps();
    }

    /* Remove .error, .warning classes on load */
    imgError.classList.remove("error");
    altError.classList.remove("warning");
  }


  function showInstructions() {
    let instrPanel = document.querySelector(".instructions");
    let hideShowPanel = (instrPanel.classList.contains("off-screen-left") ? instrPanel.classList.remove("off-screen-left") : instrPanel.classList.add("off-screen-left"));
  }
  instructionsBtn.addEventListener('click', showInstructions);


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

  console.log(gallery.innerHTML);
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
  imgBtn.addEventListener('click', addImgTile);


  function resetFields() {
    document.getElementById("image_url").value = '';
    document.getElementById("alt_text").value = '';
  }
  imgBtn.addEventListener('click', resetFields);


  function editImgTile(evt) {
    imgTile = document.querySelectorAll(".jgd-gallery__image");
    let editControls = document.querySelector('.edit-button-panel');

    for (let i = 0, len = imgTile.length; i < len; i++) {
      if (evt.target.value === 'edit') {

        /* Show image editing controls */
        editControls.classList.remove("hide");

        /* Disable default link behavior on images */
        imgTile[i].onclick = function(evt2) {
          if (evt2.target && evt2.target.nodeName == 'a') {
            evt2.preventDefault();
          }
          return false;
        }

        /* Add .is-highlighted class to images */
        imgTile[i].classList.add("is-highlighted");

        let currentIndex = count.value();

        /* Add .is-editable class to the first element if not counted up
         * or to the current index if counted up
         */
        let isEditable = (currentIndex === 0) ? imgTile[0].classList.add("is-editable") : imgTile[currentIndex].classList.add("is-editable");

        /* Set next and previous buttons to disabled if there is only one image left */
        if (imgTile.length === 1) {
          nextBtn.setAttribute("disabled", "");
          prevBtn.setAttribute("disabled", "");
        } else {
          nextBtn.removeAttribute("disabled");
          prevBtn.removeAttribute("disabled");
        }

      /* If "View Gallery" is chosen in select box */
      } else {

        /* Hide image editing controls */
        editControls.classList.add("hide");

        /* Restore to normal click behavior */
        imgTile[i].onclick = function(evt2) {
          return true;
        }

        /* Remove .is-highlighted class */
        imgTile[i].classList.remove("is-highlighted");

        /* Remove .is-deletable class from all elements */
        imgTile[i].classList.remove("is-editable");
      }
    } // closes for loop
  }
  editSelect.addEventListener('change', editImgTile);


  let count = (function() {
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


  imgTile = document.querySelectorAll(".jgd-gallery__image");

  function selectNext() {
    let listLength = imgTile.length - 1;
    let currentIndex = count.value();

    currentIndex = currentIndex + 1;

    /* Increment count function */
    count.countUp();

    /* Add class .is-editable to next image tile */
    imgTile[currentIndex].classList.add("is-editable");
    if (imgTile[currentIndex - 1] !== undefined) {
      imgTile[currentIndex - 1].classList.remove("is-editable");
    }

    /* Set next image button to disabled if we are on the last image tile;
     * set previous image button to enabled
     */
    let disableNextBtn = (currentIndex === listLength ? nextBtn.setAttribute("disabled", "") : prevBtn.removeAttribute("disabled"));

    if (currentIndex > 0) {
      moveLeftBtn.removeAttribute("disabled");
    }

    if (currentIndex === listLength) {
      moveRightBtn.setAttribute("disabled", "");
    }
  }
  nextBtn.addEventListener('click', selectNext);


  function selectPrev() {
    let listLength = imgTile.length - 1;
    let currentIndex = count.value();

    /* Decrement count function */
    count.countDown();

    /* Add class .is-editable to previous image tile */
    if (currentIndex > 0) {
      imgTile[currentIndex - 1].classList.add("is-editable");
    }
    if (imgTile[currentIndex] !== undefined) {
      imgTile[currentIndex].classList.remove("is-editable");
    }

    /* Set previous image button to disabled if we are on the first image tile;
     * set next image button to enabled
     */
    let disablePrevBtn = ((currentIndex - 1) <= 0 ? prevBtn.setAttribute("disabled", "") : nextBtn.removeAttribute("disabled"));

    if ((currentIndex - 1) <= 0) {
      moveLeftBtn.setAttribute("disabled", "");
    }

    if ((currentIndex) <= listLength) {
      moveRightBtn.removeAttribute("disabled");
    }
  }
  prevBtn.addEventListener('click', selectPrev);


  function moveImgRight() {
    //debugger;
    imgTile = document.querySelectorAll(".jgd-gallery__image");
    listLength = imgTile.length - 1;
    let currentIndex = count.value() - 1;
    let imgAnchor = document.querySelectorAll(".jgd-gallery__image a");

    /* Increment count function */
    count.countUp();

    /* Loop through image tiles */
    for (i = 0, len = imgTile.length; i < len; i++) {

      /* Set next index to the count value */
      let nextIndex = count.value();
      console.log('Next index: ' + nextIndex);

      /* If the next image exists (is not undefined)
       * insert tile in current place after it
       */
      if (imgTile[nextIndex] !== undefined) {
        imgTile[nextIndex].after(imgTile[nextIndex - 1]);
      }

      /* Set move image right button to disabled if we are on the last image tile;
       * set move left button to enabled
       */
      let disableMoveRightBtn = (nextIndex === listLength ? moveRightBtn.setAttribute("disabled", "") : moveLeftBtn.removeAttribute("disabled"));
    }

    /* Set the current index to 0 if it is one below the first (undefined) */
    if (currentIndex === -1) {
      currentIndex = 0;
    }

    /* Loop through galImgsArray */
    for (i = 0, len = galImgsArray.length; i < len; i++) {
      let imgAnchorURL = imgAnchor[currentIndex].href;
      currentIndex = count.value() - 1;
      //console.log(currentIndex);

      /* If the image anchor URL matches the galImgsArray current index value
       * remove the image at the current index
       * and place it at the end of the next index
       */
      if (imgAnchorURL === galImgsArray[currentIndex].imgUrl) {
        let removedImg = galImgsArray.splice(currentIndex, 1);
        galImgsArray.splice(currentIndex + 1, 0, removedImg[0]);
      }
    }

    /* Reset the local storage values to store updated values */
    localStorage.setItem('imagesArray', JSON.stringify(galImgsArray));
  }
  moveRightBtn.addEventListener('click', moveImgRight);


  function moveImgLeft() {
    //debugger;
    imgTile = document.querySelectorAll(".jgd-gallery__image");
    let currentIndex = count.value();
    let imgAnchor = document.querySelectorAll(".jgd-gallery__image a");

    /* Decrement count function */
    count.countDown();

    /* Loop through image tiles */
    for (i = 0, len = imgTile.length; i < len; i++) {

      let prevIndex = count.value();
      console.log('Previous index: ' + prevIndex);

      if (imgTile[prevIndex] !== undefined) {
        imgTile[prevIndex].before(imgTile[prevIndex + 1]);
      }

      /* Set previous image button to disabled if we are on the first image tile;
       * set next image button to enabled
       */
      let disableMoveLeftBtn = (prevIndex === 0 ? moveLeftBtn.setAttribute("disabled", "") : moveRightBtn.removeAttribute("disabled"));
    }

    /* Set the current index to 0 if it is one below the first (undefined) */
    if (currentIndex === -1) {
      currentIndex = 0;
    }

    /* Loop through galImgsArray */
    for (i = 0, len = galImgsArray.length; i < len; i++) {
      let imgAnchorURL = imgAnchor[currentIndex].href;
      //currentIndex = count.value() - 1;
      currentIndex = count.value();
      console.log(imgAnchorURL);
      console.log(galImgsArray[currentIndex].imgUrl);
      console.log(imgAnchorURL === galImgsArray[currentIndex].imgUrl);

      /* If the image anchor URL matches the galImgsArray current index value
       * remove the image at the next index (which is the current image after moving forward)
       * and place it at the beginning of the current index
       */
      if (imgAnchorURL === galImgsArray[currentIndex].imgUrl) {
        let removedImg = galImgsArray.splice(currentIndex + 1, 1);
        removedImg;
        console.log(removedImg);
        galImgsArray.splice(currentIndex, 0, removedImg[0]);
      }
    }

    /* Reset the local storage values to store updated values */
    localStorage.setItem('imagesArray', JSON.stringify(galImgsArray));
  }
  moveLeftBtn.addEventListener('click', moveImgLeft);


  function deleteImg() {
    imgTile = document.querySelectorAll(".jgd-gallery__image");
    let currentIndex = count.value() - 1;

    /* Set the current index to 0 if it is one below the first (undefined) */
    if (currentIndex === -1) {
      currentIndex = 0;
    }

    let currentTile = imgTile[currentIndex];
    let imgAnchor = document.querySelectorAll(".jgd-gallery__image a");

    /* Remove node */
    if (currentTile !== undefined) {
      currentTile.remove();
    }

    /* Loop through galImgsArray;
     * remove array reference in galImgsArray */
    for (let i = 0, len = galImgsArray.length; i < len; i++) {
      let imgAnchorURL = imgAnchor[currentIndex].href;

      if (imgAnchorURL === galImgsArray[i].imgUrl) {
        galImgsArray.splice(currentIndex, 1);
      }

      /* Reset the local storage values to store updated values */
      localStorage.setItem('imagesArray', JSON.stringify(galImgsArray));
    }
  }
  delBtn.addEventListener('click', deleteImg);


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

    /* Set returned value into local storage to recall on load */
    localStorage.setItem('galleryPadding', galPaddingSelectVal);
  }
  galPadSelect.addEventListener('change', selectGalPadding);


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
  imgSizeSelect.addEventListener('change', selectImgSize);


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
  gridGapsSelect.addEventListener('change', selectGridGaps);


  function storageAvailable(type) {
    /* This function checks if the browser supports localStorage and has it available
     * from Mozilla Developer Network
     * https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
     */

    var storage;
    try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch(e) {
      return e instanceof DOMException && (
        // everything except Firefox
        e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        (storage && storage.length !== 0);
    }
  }


  if (storageAvailable('localStorage')) {
    console.log('localStorage is available');
  }
  else {
    console.log('localStorage is unavailable');
  }

  /* Local Storage */
  localStorage.setItem('imagesArray', JSON.stringify(galImgsArray));
  const data = JSON.parse(localStorage.getItem('imagesArray'));

  /* Add each item from localStorage memory, reusing the addImgTile() function */
  data.forEach((item) => {
    addImgTile(item);
  });

  /* Remove the gallery, including removing the local storage references */
  removeBtn.addEventListener('click', function() {
    localStorage.removeItem('galleryPadding');
    localStorage.removeItem('imagesArray');
    localStorage.removeItem('gridGap');
    localStorage.removeItem('imageSize');
    while (gallery.innerHTML = '') {
      gallery.innerHTML = '';
    }
    editSelect.setAttribute("disabled", "");
  });


  function displayHTML() {
    let displayedHTML = document.getElementById("html-box");
    if (gallery.innerHTML !== '') {
      let cleanedText = gallery.innerHTML.replace(/\s(is-highlighted|is-editable)/g, "");
      displayedHTML.innerText = '<div class="' + gallery.className + '">' + cleanedText + '</div>';
    }
  }
  imgBtn.addEventListener('click', displayHTML);
  moveRightBtn.addEventListener('click', displayHTML);
  moveLeftBtn.addEventListener('click', displayHTML);
  delBtn.addEventListener('click', displayHTML);
  galPadSelect.addEventListener('change', displayHTML);
  imgSizeSelect.addEventListener('change', displayHTML);
  gridGapsSelect.addEventListener('change', displayHTML);


  let img240CSS = `.img240 {
  grid-template-columns: repeat(auto-fit, 240px);
  max-width: 240px;
}

.img240 img {
  height: 240px;
  width: 240px;
}

@media (min-width: 768px) {
  .img240 {
    max-width: 480px;
  }

  .img240.gap8 {
    max-width: 488px;
  }

  .img240.gap16 {
    max-width: 496px;
  }

  .img240.gap24 {
    max-width: 504px;
  }

  .img240.gap32 {
    max-width: 512px;
  }
}

@media (min-width: 1366px) {
  .img240 {
    max-width: 960px;
  }

  .img240.gap8 {
    max-width: 984px;
  }

  .img240.gap16 {
    max-width: 1008px;
  }

  .img240.gap24 {
    max-width: 1032px;
  }

  .img240.gap32 {
    max-width: 1056px;
  }
}`;

  let img320CSS = `.img320 {
  grid-template-columns: repeat(auto-fit, 240px);
  max-width: 240px;
}

.img320 img {
  height: 240px;
  width: 240px;
}

@media (min-width: 768px) {
  .img320 {
    grid-template-columns: repeat(auto-fit, 320px);
    max-width: 640px;
  }

  .img320 img {
    height: 320px;
    width: 320px;
  }

  .img320.gap8 {
    max-width: 648px;
  }

  .img320.gap16 {
    max-width: 656px;
  }

  .img320.gap24 {
    max-width: 664px;
  }

  .img320.gap32 {
    max-width: 672px;
  }
}

@media (min-width: 1366px) {
  .img320 {
    max-width: 960px;
  }

  .img320.gap8 {
    max-width: 976px;
  }

  .img320.gap16 {
    max-width: 992px;
  }

  .img320.gap24 {
    max-width: 1008px;
  }

  .img320.gap32 {
    max-width: 1024px;
  }
}`;

  let img560CSS = `.img560 {
  grid-template-columns: repeat(auto-fit, 320px);
  max-width: 240px;
}

.img560 img {
  height: 240px;
  width: 240px;
}

@media (min-width: 768px) {
  .img560 {
    grid-template-columns: repeat(auto-fit, 560px);
    max-width: 560px;
  }

  .img560 img {
    height: 560px;
    width: 560px;
  }
}

@media (min-width: 1366px) {
  .img560 {
    max-width: 1120px;
  }

  .img560.gap8 {
    max-width: 1128px;
  }

  .img560.gap16 {
    max-width: 1136px;
  }

  .img560.gap24 {
    max-width: 1144px;
  }

  .img560.gap32 {
    max-width: 1152px;
  }
}`;

  let img640CSS = `.img640 {
  grid-template-columns: repeat(auto-fit, 240px);
  max-width: 240px;
}

.img640 img {
  height: 240px;
  width: 240px;
}

@media (min-width: 768px) {
  .img640 {
    grid-template-columns: repeat(auto-fit, 640px);
    max-width: 640px;
  }

  .img640 img {
    height: 640px;
    width: 640px;
  }
}`;


  function displayCSS() {
    let displayedCSS = document.getElementById("generated-css");
    let imgSizeSelectVal = document.getElementById("image-size").value;

    // This area will display dynamically generated CSS
    console.log(imgSizeSelectVal);

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
  imgSizeSelect.addEventListener('change', displayCSS);


  let highlightHTMLFunc = () => {
    let html = document.getElementById("html-box");

    /* Select everything in the html box; Uses Selection API */
    window.getSelection().selectAllChildren(html);
  }
  selectHTMLBtn.addEventListener('click', highlightHTMLFunc);


  let highlightCSSFunc = () => {
    let css = document.getElementById("css-box");

    /* Select everything in the css box */
    window.getSelection().selectAllChildren(css);
  }
  selectCSSBtn.addEventListener('click', highlightCSSFunc);


  /* Page load event listeners */
  window.addEventListener('load', function() {
    imgError.innerText = '';
    altError.innerText = '';
    displayHTML();
    displayCSS();
  });
  window.addEventListener('DOMContentLoaded', init);

})();
