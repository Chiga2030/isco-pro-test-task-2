import styles from './ToggleBar.module.css';

import {
  useState,
  useEffect,
  useRef,
} from 'react';

import {
  detectAndSetNewActiveButton,
} from './utils';

import ActiveArea from './ActiveArea';
import Button from './Button';

const initialButtonsState = [
  'Учебная деятельность',
  'Курсовые',
  'Практика',
  'Очень очень длинная кнопка',
  'Нет',
  'Еще одна кнопка',
  'И еще одна кнопка',
  'И еще одна кнопка 2',
  'И еще одна кнопка 3',
  'И еще одна кнопка 4',
];

const ToggleBar = ({
  buttons = initialButtonsState,
}) => {
  const [
    position,
    setPosition,
  ] = useState({});

  const [
    pointerStartPosition,
    setPointerStartPosition,
  ] = useState(null);
  const [
    isChangeActive,
    setIsChageActive,
  ] = useState(true);

  const buttonsBar = useRef(null);
  const buttonsWrapper = useRef(null);

  const onClickButtonHandler = detectAndSetNewActiveButton.bind(
    null,
    position.centerPosition,
    setPosition,
    buttonsWrapper.current,
  );

  useEffect(() => {
    setPosition({
      centerPosition: {
        width: window.getComputedStyle(
          buttonsWrapper.current.firstChild, null).width,
      },
      rightPosition: {
        transform: `translateX(calc(${window.getComputedStyle(
          buttonsWrapper.current.firstChild, null).width} + 1.7rem))`,
      },
    });

    buttonsWrapper.current.firstChild.style.color = 'var(--text-color-light)';
  }, []);


  return (
    <div className={ styles.ToggleBar }>
      <div ref={ buttonsBar } className={ styles.buttonsBar }>
        <span
          ref={ buttonsWrapper }
          className={styles.buttonsWrapper}
          onPointerDown={ event => {
            setPointerStartPosition(event.pageX
              + buttonsWrapper.current.scrollLeft);
          } }
          onPointerMove={ event => {
            if (pointerStartPosition
              && event.pointerType !== 'touch') {
              setIsChageActive(false);
              buttonsWrapper.current.scrollTo(
                pointerStartPosition - event.pageX, null);
            }
          } }
          onTouchMove={event => {
            if (pointerStartPosition) {
              setIsChageActive(false);
              buttonsWrapper.current.scrollTo(
                pointerStartPosition - event.touches[0].clientX, null);
            }
          } }
          onTouchEnd={ () => {
            setPointerStartPosition(null);
            setTimeout(() => setIsChageActive(true), 200);
          } }
          onPointerUp={ event => {
            if (event.pointerType !== 'touch') {
              setPointerStartPosition(null);
              setTimeout(() => setIsChageActive(true), 200);
            }
          } }
          onPointerLeave={ event => {
            if (event.pointerType !== 'touch') {
              setPointerStartPosition(null);
              setIsChageActive(true);
            }
          } }
          onWheel={ event => {
            buttonsWrapper.current.scrollBy(event.deltaY, null);
          } }
        >
          { buttons.map(button => (
            <Button
              key={ button }
              onClickButtonHandler={
                onClickButtonHandler }
              textButton={ button }
              isChangeActive={ isChangeActive }
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


export default ToggleBar;
