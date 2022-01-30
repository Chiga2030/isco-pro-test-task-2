import styles from './Button.module.css';

import {
  useRef,
} from 'react';

const Button = ({
  onClickButtonHandler,
  textButton,
}) => {
  const button = useRef(null);

  return (
    <input
      ref={ button }
      type="button"
      className={ styles.button }
      value={ textButton }
      onClick={ () => onClickButtonHandler(button.current) }
    />
  );
};


export default Button;
