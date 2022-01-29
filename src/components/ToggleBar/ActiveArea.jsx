import styles from './ActiveArea.module.css';

import {
  useState,
  useRef,
  useEffect,
} from 'react';


const ActiveArea = ({
  centerPosition,
}) => {
  const [
    newCenterPosition,
    setNewCenterPosition,
  ] = useState({});

  const leftEl = useRef(null);
  const centerEl = useRef(null);
  const rightEl = useRef(null);

  useEffect(() => {
    setNewCenterPosition(centerPosition);
  }, [
    centerPosition,
  ]);

  // useEffect(() => {
  //   rightEl.current.style.left = `${
  //     firstPosition.left + centerEl.current.offsetWidth}px`;
  // }, [
  //   firstPosition,
  // ]);

  return (
    <>
      <span
        ref={ leftEl }
        className={ styles.activeAreaLeft }></span>
      <span
        ref={ centerEl }
        style={ {
          ...newCenterPosition,
        } }
        className={ styles.activeAreaCenter }></span>
      <span
        ref={ rightEl }
        className={ styles.activeAreaRight }></span>
    </>
  );
};


export default ActiveArea;
