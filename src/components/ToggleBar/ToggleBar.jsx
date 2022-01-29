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
];

const ToggleBar = () => {
  const [
    centerPosition,
    setCenterPosition,
  ] = useState({});

  const buttonsWrapper = useRef(null);

  useEffect(() => {
    setCenterPosition({
      width: window.getComputedStyle(
        buttonsWrapper.current.firstChild, null).width,
    });
  }, []);

  const onDetectNewActivePositionHandler = button => {
    const widthButton = Math.ceil(
      window.getComputedStyle(button, null).width.match(/\d+.+\d/));

    const currentWidth = Math.ceil(
      centerPosition.width.match(/\d+.+\d/));

    const newScale = widthButton / currentWidth;

    setCenterPosition({
      ...centerPosition,
      transform: `translateX(calc(${
        button.offsetLeft}px + .75rem)) scaleX(${newScale})`,
    });
  };


  return (
    <div className={ styles.ToggleBar }>
      <div className={ styles.buttonBar }>
        <span ref={ buttonsWrapper } className={styles.buttonsWrapper}>
          { buttons.map(button => (
            <Button
              key={ button }
              onDetectNewActivePositionHandler={
                onDetectNewActivePositionHandler }
              textButton={ button }
            />
          )) }
        </span>
        <ActiveArea
          centerPosition={ centerPosition }
        />
      </div>
      <hr/>
      <div>content</div>
    </div>
  );
};


const Button = ({
  onDetectNewActivePositionHandler,
  textButton,
}) => {
  console.log();
  const button = useRef(null);

  return (
    <input
      ref={ button }
      type="button"
      className={ styles.button }
      value={ textButton }
      onClick={ () => onDetectNewActivePositionHandler(button.current) }
    />
  );
};


export default ToggleBar;
