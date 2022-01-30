import styles from './ActiveArea.module.css';

import {
  useState,
  useEffect,
  useRef,
} from 'react';


const ActiveArea = ({
  leftPosition,
  centerPosition,
  rightPosition,
}) => {
  const [
    newPosition,
    setNewPosition,
  ] = useState({});

  const leftEl = useRef(null);
  const centerEl = useRef(null);
  const rightEl = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      leftEl.current.classList.add(styles.activeAreaTransition);
      centerEl.current.classList.add(styles.activeAreaTransition);
      rightEl.current.classList.add(styles.activeAreaTransition);
    }, 200);
  }, []);

  useEffect(() => {
    setNewPosition({
      leftEl: leftPosition,
      centerEl: centerPosition,
      rightEl: rightPosition,
    });
  }, [
    centerPosition,
  ]);


  return (
    <>
      <span
        ref={ leftEl }
        style={ {
          ...newPosition.leftEl,
        } }
        className={ styles.activeAreaLeft }></span>
      <span
        ref={ centerEl }
        style={ {
          ...newPosition.centerEl,
        } }
        className={ styles.activeAreaCenter }></span>
      <span
        ref={ rightEl }
        style={ {
          ...newPosition.rightEl,
        } }
        className={ styles.activeAreaRight }></span>
    </>
  );
};


export default ActiveArea;
