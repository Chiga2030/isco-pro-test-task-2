import styles from './Button.module.css';

import {
  useRef,
} from 'react';

const Button = ({
  onClickButtonHandler,
  textButton,
  isChangeActive,
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
        }
      } }
    />
  );
};


export default Button;
