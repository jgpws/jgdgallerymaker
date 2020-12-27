import { removeBtn, nextBtn, prevBtn, moveLeftBtn, moveRightBtn, editSelect, gallery, galImgsArray } from './global-vars.js';
import { count } from './main.js';

function editImgTile(evt) {
  let imgTile = document.querySelectorAll(".jgd-gallery__image-tile");
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

      /* Add display: inline-block to tiles */
      imgTile[i].style.display = "inline-block";

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

      /* Remove display: inline-block from tiles */
      imgTile[i].style.display = "";
    }
  } // closes for loop
}


function selectNext() {
  let imgTile = document.querySelectorAll(".jgd-gallery__image-tile");
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


function selectPrev() {
  let imgTile = document.querySelectorAll(".jgd-gallery__image-tile");
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


function moveImgRight() {
  //debugger;
  let imgTile = document.querySelectorAll(".jgd-gallery__image-tile");
  let listLength = imgTile.length - 1;
  let currentIndex = count.value() - 1;
  let imgAnchor = document.querySelectorAll(".jgd-gallery__image-tile a");

  /* Increment count function */
  count.countUp();

  /* Loop through image tiles */
  for (let i = 0, len = imgTile.length; i < len; i++) {

    /* Set next index to the count value */
    let nextIndex = count.value();

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
  for (let i = 0, len = galImgsArray.length; i < len; i++) {
    let imgAnchorURL = imgAnchor[currentIndex].href;
    currentIndex = count.value() - 1;

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


function moveImgLeft() {
  //debugger;
  let imgTile = document.querySelectorAll(".jgd-gallery__image-tile");
  let currentIndex = count.value();
  let imgAnchor = document.querySelectorAll(".jgd-gallery__image-tile a");

  /* Decrement count function */
  count.countDown();

  /* Loop through image tiles */
  for (let i = 0, len = imgTile.length; i < len; i++) {

    let prevIndex = count.value();

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
  for (let i = 0, len = galImgsArray.length; i < len; i++) {
    let imgAnchorURL = imgAnchor[currentIndex].href;
    //currentIndex = count.value() - 1;
    currentIndex = count.value();

    /* If the image anchor URL matches the galImgsArray current index value
     * remove the image at the next index (which is the current image after moving forward)
     * and place it at the beginning of the current index
     */
    if (imgAnchorURL === galImgsArray[currentIndex].imgUrl) {
      let removedImg = galImgsArray.splice(currentIndex + 1, 1);
      removedImg;
      galImgsArray.splice(currentIndex, 0, removedImg[0]);
    }
  }

  /* Reset the local storage values to store updated values */
  localStorage.setItem('imagesArray', JSON.stringify(galImgsArray));
}


function deleteImg() {
  let imgTile = document.querySelectorAll(".jgd-gallery__image-tile");
  let currentIndex = count.value() - 1;

  /* Set the current index to 0 if it is one below the first (undefined) */
  if (currentIndex === -1) {
    currentIndex = 0;
  }

  let currentTile = imgTile[currentIndex];
  let imgAnchor = document.querySelectorAll(".jgd-gallery__image-tile a");

  /* Remove node */
  if (currentTile !== undefined) {
    currentTile.remove();
  }

  /* Loop through galImgsArray;
   * remove array reference in galImgsArray */
  for (let i = 0, len = galImgsArray.length; i < len; i++) {
    let imgAnchorURL = imgAnchor[currentIndex].href;

    if (imgAnchorURL === galImgsArray[i].imgUrl && galImgsArray !== undefined) {
      galImgsArray.splice(currentIndex, 1);
    }

    /* Reset the local storage values to store updated values */
    localStorage.setItem('imagesArray', JSON.stringify(galImgsArray));
  }
}


function removeGallery() {
  /* Remove the gallery, including removing the local storage references */
  localStorage.removeItem('galleryPadding');
  localStorage.removeItem('imagesArray');
  localStorage.removeItem('gridGap');
  localStorage.removeItem('imageSize');
  while (gallery.innerHTML = '') {
    gallery.innerHTML = '';
  }
  editSelect.setAttribute("disabled", "");
}

export { editImgTile, selectNext, selectPrev, moveImgRight, moveImgLeft, deleteImg, removeGallery };
