export const detectAndSetNewActiveButton = (
  centerElement, setPosition, buttonsWrapper, nextButton) => {
  const widthNextButton = Math.ceil(
    window.getComputedStyle(nextButton, null).width.match(/\d+.+\d/));

  const centerElementWidth = Math.ceil(
    centerElement.width.match(/\d+./));

  const newScale = Math.round(
    (widthNextButton / centerElementWidth) * 100) * 0.01 ;

  setPosition({
    leftPosition: {
      transform: `translateX(${
        nextButton.offsetLeft}px)`,
    },
    centerPosition: {
      ...centerElement,
      transform: `translateX(calc(${
        nextButton.offsetLeft}px + .75rem)) scaleX(${newScale})`,
    },
    rightPosition: {
      transform: `translateX(calc(${
        nextButton.offsetLeft + widthNextButton}px + .7rem))`,
    },
  });

  setButtonsColor(buttonsWrapper.children, nextButton);
};


const setButtonsColor = (allButtons, activeButton) => {
  Array.prototype.forEach.call(
    allButtons,
    element => element.style.color = 'var(--text-color-main)');

  setTimeout(() => {
    activeButton.style.color = 'var(--text-color-light)';
  }, 200);
};
