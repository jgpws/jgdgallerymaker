let instrPanel = document.querySelector(".instructions");


/* Animations */
function slideInLeft(elToSlide) {
  let hideShow = (elToSlide.classList.contains("off-screen-left") ? elToSlide.classList.remove("off-screen-left") : elToSlide.classList.add("off-screen-left"));
}


function showInstructions() {
  slideInLeft(instrPanel);
}

export { instrPanel, slideInLeft, showInstructions };
