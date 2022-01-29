import styles from './ActiveArea.module.css';

import {
  useState,
  useEffect,
} from 'react';


const ActiveArea = ({
  centerPosition,
  rightPosition,
}) => {
  const [
    newCenterPosition,
    setNewCenterPosition,
  ] = useState({});
  const [
    newRightPosition,
    setNewRightPosition,
  ] = useState({});

  useEffect(() => {
    setNewCenterPosition(centerPosition);
  }, [
    centerPosition,
  ]);

  useEffect(() => {
    setNewRightPosition(rightPosition);
  }, [
    rightPosition,
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
        className={ styles.activeAreaLeft }></span>
      <span
        style={ {
          ...newCenterPosition,
        } }
        className={ styles.activeAreaCenter }></span>
      <span
        style={ {
          ...newRightPosition,
        } }
        className={ styles.activeAreaRight }></span>
    </>
  );
};


export default ActiveArea;
