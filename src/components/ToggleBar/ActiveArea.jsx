import styles from './ActiveArea.module.css';

const ActiveArea = ({
  firstPosition,
}) => (
  <>
    <span className={ styles.activeAreaLeft }></span>
    <span
      style={ {
        left: firstPosition.left,
        height: firstPosition.height,
        width: firstPosition.width,
      } }
      className={ styles.activeAreaCenter }></span>
    <span className={ styles.activeAreaRight }></span>
  </>
);


export default ActiveArea;
