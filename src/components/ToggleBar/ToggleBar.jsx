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
    firstPosition,
    setFirstPosition,
  ] = useState({});

  const buttonBar = useRef(null);

  useEffect(() => {
    setFirstPosition({
      left: buttonBar.current.firstChild.offsetLeft,
      height: buttonBar.current.firstChild.offsetHeight,
      width: buttonBar.current.firstChild.offsetWidth,
    });
  }, []);

  const onDetectNewActivePositionHandler = coord => {
    console.log(coord);

    const leftSize = coord.left;
    console.log(leftSize);
  };


  return (
    <div className={ styles.ToggleBar }>
      <div ref={ buttonBar } className={ styles.buttonBar }>
        { buttons.map(button => (
          <Button
            key={ button }
            onDetectNewActivePositionHandler={
              onDetectNewActivePositionHandler }
            textButton={ button }
          />
        )) }
        <ActiveArea
          firstPosition={ firstPosition }
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
      onClick={ () => onDetectNewActivePositionHandler({
        width: button.current.offsetWidth,
        height: button.current.offsetHeight,
        top: button.current.offsetTop,
        left: button.current.offsetLeft,
      }) }
    />
  );
};


export default ToggleBar;
