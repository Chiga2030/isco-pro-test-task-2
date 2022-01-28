import styles from './ToggleBar.module.css';

const buttons = [
  'Учебная деятельность',
  'Курсовые',
  'Практика',
];

const ToggleBar = () => (
  <div className={ styles.ToggleBar }>
    <div className={ styles.buttonBar }>
      { buttons.map(button => (
        <Button textButton={ button } />
      )) }
    </div>
    <hr/>
    <div>content</div>
  </div>
);


const Button = ({
  textButton,
}) => (
  <input type="button" className={ styles.button } value={ textButton } />
);

export default ToggleBar;
