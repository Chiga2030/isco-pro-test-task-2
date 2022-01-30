import styles from './ToggleBar.module.css';

import {
  useState,
  useEffect,
  useRef,
} from 'react';

import {
  onDetectAndSetNewActivePositionHandler,
} from './utils';

import ActiveArea from './ActiveArea';
import Button from './Button';

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

  const onClickButtonHandler = onDetectAndSetNewActivePositionHandler.bind(
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
          buttonsWrapper.current.firstChild, null).width} + .7rem))`,
      },
    });

    buttonsWrapper.current.firstChild.style.color = 'var(--text-color-light)';
  }, []);


  return (
    <div className={ styles.ToggleBar }>
      <div className={ styles.buttonBar }>
        <span ref={ buttonsWrapper } className={styles.buttonsWrapper}>
          { buttons.map(button => (
            <Button
              key={ button }
              onClickButtonHandler={
                onClickButtonHandler }
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


export default ToggleBar;
