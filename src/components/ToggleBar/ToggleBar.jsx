import styles from './ToggleBar.module.css';

import {
  useState,
  useEffect,
  useRef,
} from 'react';

import ActiveArea from './ActiveArea';

const buttons = [
  'Учебная деятельность',
  'Курсовые',
  'Практика',
  'Еще одна кнопка',
  'И еще одна кнопка',
  'И еще одна кнопка 2',
  'И еще одна кнопка 3',
  'И еще одна кнопка 4',
];

const ToggleBar = () => {
  const [
    position,
    setPosition,
  ] = useState({});

  const buttonsWrapper = useRef(null);

  useEffect(() => {
    setPosition({
      centerPosition: {
        width: window.getComputedStyle(
          buttonsWrapper.current.firstChild, null).width,
      },
      rightPosition: {
        transform: `translateX(calc(${window.getComputedStyle(
          buttonsWrapper.current.firstChild, null).width} + .7rem))`,
      },
    });

    buttonsWrapper.current.firstChild.style.color = 'var(--text-color-light)';
  }, []);


  const onDetectAndSetNewActivePositionHandler = button => {
    const widthButton = Math.ceil(
      window.getComputedStyle(button, null).width.match(/\d+.+\d/));

    const currentWidth = Math.ceil(
      position.centerPosition.width.match(/\d+./));

    const newScale = Math.round((widthButton / currentWidth) * 100) / 100 ;

    setPosition({
      leftPosition: {
        transform: `translateX(${
          button.offsetLeft}px)`,
      },
      centerPosition: {
        ...position.centerPosition,
        transform: `translateX(calc(${
          button.offsetLeft}px + .75rem)) scaleX(${newScale})`,
      },
      rightPosition: {
        transform: `translateX(calc(${
          button.offsetLeft + widthButton}px + .7rem))`,
      },
    });

    setButtonsColor(buttonsWrapper.current.children, button);
  };

  const setButtonsColor = (buttons, activeButton) => {
    Array.prototype.forEach.call(
      buttons,
      element => element.style.color = 'var(--text-color-main)');

    setTimeout(() => {
      activeButton.style.color = 'var(--text-color-light)';
    }, 200);
  };


  return (
    <div className={ styles.ToggleBar }>
      <div className={ styles.buttonBar }>
        <span ref={ buttonsWrapper } className={styles.buttonsWrapper}>
          { buttons.map(button => (
            <Button
              key={ button }
              onDetectAndSetNewActivePositionHandler={
                onDetectAndSetNewActivePositionHandler }
              textButton={ button }
            />
          )) }
          <ActiveArea
            position={ position }
          />
        </span>
      </div>
      <hr/>
      <div>content</div>
    </div>
  );
};


const Button = ({
  onDetectAndSetNewActivePositionHandler,
  textButton,
}) => {
  const button = useRef(null);

  return (
    <input
      ref={ button }
      type="button"
      className={ styles.button }
      value={ textButton }
      onClick={ () => onDetectAndSetNewActivePositionHandler(button.current) }
    />
  );
};


export default ToggleBar;
