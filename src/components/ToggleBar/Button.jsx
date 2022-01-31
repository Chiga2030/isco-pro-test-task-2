import styles from './Button.module.css';

import {
  useRef,
} from 'react';

const Button = ({
  onClickButtonHandler,
  textButton,
  isChangeActive,
  setContentId,
}) => {
  const button = useRef(null);

  return (
    <input
      ref={ button }
      type="button"
      className={ styles.button }
      value={ textButton }
      onClick={ () => {
        if (isChangeActive) {
          onClickButtonHandler(button.current);
          setContentId();
        }
      } }
    />
  );
};


export default Button;
