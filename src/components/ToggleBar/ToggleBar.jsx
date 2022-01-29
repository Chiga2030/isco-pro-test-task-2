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
  const [
    rightPosition,
    setRightPosition,
  ] = useState({});

  const buttonsWrapper = useRef(null);

  useEffect(() => {
    setCenterPosition({
      width: window.getComputedStyle(
        buttonsWrapper.current.firstChild, null).width,
    });

    setRightPosition({
      transform: `translateX(calc(${window.getComputedStyle(
        buttonsWrapper.current.firstChild, null).width} + .7rem))`,
    });
  }, []);


  const onDetectNewActivePositionHandler = button => {
    const widthButton = Math.ceil(
      window.getComputedStyle(button, null).width.match(/\d+.+\d/));

    const currentWidth = Math.ceil(
      centerPosition.width.match(/\d+./));

    const newScale = widthButton / currentWidth;

    setCenterPosition({
      ...centerPosition,
      transform: `translateX(calc(${
        button.offsetLeft}px + .75rem)) scaleX(${newScale})`,
    });

    setRightPosition({
      transform: `translateX(calc(${
        button.offsetLeft + widthButton}px + .75rem))`,
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
          rightPosition={ rightPosition }
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
