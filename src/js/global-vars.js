// Main interface buttons
export let instructionsBtn = document.querySelector(".instructions-btn"),
    imgBtn = document.querySelector(".img-submit-btn"),
    removeBtn = document.querySelector(".clear-btn"),
    selectHTMLBtn = document.querySelector(".select-html-btn"),
    selectCSSBtn = document.querySelector(".select-css-btn"),
    galPadSelect = document.getElementById("gallery-padding"),
    imgSizeSelect = document.getElementById("image-size"),
    gridGapsSelect = document.getElementById("grid-gaps"),
    galLayoutSelect = document.getElementById("layout-style"),
    editSelect = document.getElementById("gallery-mode");

// Edit buttons
export let nextBtn = document.getElementById("next-img"),
    prevBtn = document.getElementById("prev-img"),
    moveRightBtn = document.getElementById("move-img-right"),
    moveLeftBtn = document.getElementById("move-img-left"),
    delBtn = document.getElementById("delete-img");

// Copy boxes
export let codePanel = document.querySelector(".code-panel");
export let copyCSS = document.getElementById("css-box");

// Error boxes
export let imgError = document.getElementById("img-url-error"),
    altError = document.getElementById("alt-text-error");

// Select values
export let editSelectVal = document.getElementById("gallery-mode").value;

export let gallery = document.querySelector(".jgd-gallery");

export let imgsPlaceholder = '<p class="img-placeholder">Images will appear here.</p>';

/* Get images array from local storage, if stored there
 * or set an empty array if not
 */
export let galImgsArray = localStorage.getItem('imagesArray') ? JSON.parse(localStorage.getItem('imagesArray')) : [];

/* grab other local storage values on page load */
export let galPaddingLocalVal = localStorage.getItem('galleryPadding') ? localStorage.getItem('galleryPadding') : 'pad-24';
export let imgSizeLocalVal = localStorage.getItem('imageSize') ? localStorage.getItem('imageSize') : 'px-320';
export let gridGapLocalVal = localStorage.getItem('gridGap') ? localStorage.getItem('gridGap') : 'px-16';
export let galLayoutLocalVal = localStorage.getItem('galLayout') ? localStorage.getItem('galLayout') : 'square';

/* Add images to the parent container .jgd-gallery */
gallery.innerHTML = galImgsArray;
