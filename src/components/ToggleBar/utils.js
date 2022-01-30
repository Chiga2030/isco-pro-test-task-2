export const onDetectAndSetNewActivePositionHandler = (
  centerPosition, setPosition, buttonsWrapper, button) => {
  const widthButton = Math.ceil(
    window.getComputedStyle(button, null).width.match(/\d+.+\d/));

  const currentWidth = Math.ceil(
    centerPosition.width.match(/\d+./));

  const newScale = Math.round((widthButton / currentWidth) * 100) / 100 ;

  setPosition({
    leftPosition: {
      transform: `translateX(${
        button.offsetLeft}px)`,
    },
    centerPosition: {
      ...centerPosition,
      transform: `translateX(calc(${
        button.offsetLeft}px + .75rem)) scaleX(${newScale})`,
    },
    rightPosition: {
      transform: `translateX(calc(${
        button.offsetLeft + widthButton}px + .7rem))`,
    },
  });

  setButtonsColor(buttonsWrapper.children, button);
};


const setButtonsColor = (buttons, activeButton) => {
  Array.prototype.forEach.call(
    buttons,
    element => element.style.color = 'var(--text-color-main)');

  setTimeout(() => {
    activeButton.style.color = 'var(--text-color-light)';
  }, 200);
};
