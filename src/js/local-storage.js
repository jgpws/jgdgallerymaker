import { galImgsArray } from './global-vars.js';
import { addImgTile } from './create-images.js';

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


function addToLocalStorage() {
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
}

export { storageAvailable, addToLocalStorage };
