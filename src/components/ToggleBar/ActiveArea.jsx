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
    newLeftPosition,
    setNewLeftPosition,
  ] = useState({});
  const [
    newCenterPosition,
    setNewCenterPosition,
  ] = useState({});
  const [
    newRightPosition,
    setNewRightPosition,
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
    setNewLeftPosition(leftPosition);
    setNewCenterPosition(centerPosition);
    setNewRightPosition(rightPosition);
  }, [
    centerPosition,
  ]);


  return (
    <>
      <span
        ref={ leftEl }
        style={ {
          ...newLeftPosition,
        } }
        className={ styles.activeAreaLeft }></span>
      <span
        ref={ centerEl }
        style={ {
          ...newCenterPosition,
        } }
        className={ styles.activeAreaCenter }></span>
      <span
        ref={ rightEl }
        style={ {
          ...newRightPosition,
        } }
        className={ styles.activeAreaRight }></span>
    </>
  );
};


export default ActiveArea;
