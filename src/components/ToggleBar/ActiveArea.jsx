import styles from './ActiveArea.module.css';

import {
  useEffect,
  useRef,
} from 'react';


const ActiveArea = ({
  position,
}) => {
  const leftEl = useRef(null);
  const centerEl = useRef(null);
  const rightEl = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      [
        leftEl,
        centerEl,
        rightEl,
      ].forEach(
        element => element.current.classList.add(styles.activeAreaTransition)
      );
    }, 0);
  }, []);


  return (
    <>
      <span
        ref={ leftEl }
        style={ {
          ...position.leftPosition,
        } }
        className={ styles.activeAreaLeft }></span>
      <span
        ref={ centerEl }
        style={ {
          ...position.centerPosition,
        } }
        className={ styles.activeAreaCenter }></span>
      <span
        ref={ rightEl }
        style={ {
          ...position.rightPosition,
        } }
        className={ styles.activeAreaRight }></span>
    </>
  );
};


export default ActiveArea;
