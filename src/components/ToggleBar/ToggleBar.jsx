import styles from './ToggleBar.module.css';

import {
  useState,
  useEffect,
  useRef,
} from 'react';

import {
  detectAndSetNewActiveButton,
} from './utils';

import ActiveArea from './ActiveArea';
import Button from './Button';

const Content = () => (
  <>
    any content
  </>
);

const initialState = [
  {
    button: {
      id: 0,
      text: 'Учебная деятельность',
    },
    content: {
      id: 0,
      content: <Content/>,
    },
  },
  {
    button: {
      id: 1,
      text: 'Курсовые',
    },
    content: {
      id: 1,
      content: 'text content',
    },
  },
  {
    button: {
      id: 2,
      text: 'Практика',
    },
    content: {
      id: 2,
      content: (<Content/>),
    },
  },
  {
    button: {
      id: 3,
      text: 'Очень очень длинная кнопка',
    },
    content: {
      id: 3,
      content: (<Content/>),
    },
  },
  {
    button: {
      id: 4,
      text: 'Нет',
    },
    content: {
      id: 4,
      content: (<Content/>),
    },
  },
  {
    button: {
      id: 5,
      text: 'Еще одна кнопка',
    },
    content: {
      id: 5,
      content: (<Content/>),
    },
  },
  {
    button: {
      id: 6,
      text: 'И еще одна кнопка',
    },
    content: {
      id: 6,
      content: (<Content/>),
    },
  },
  {
    button: {
      id: 7,
      text: 'И еще одна кнопка 2',
    },
    content: {
      id: 7,
      content: (<Content/>),
    },
  },
  {
    button: {
      id: 8,
      text: 'И еще одна кнопка 3',
    },
    content: {
      id: 8,
      content: (<Content/>),
    },
  },
  {
    button: {
      id: 9,
      text: 'И еще одна кнопка 4',
    },
    content: {
      id: 9,
      content: (<Content/>),
    },
  },
  {
    button: {
      id: 10,
      text: 'И еще одна кнопка 5',
    },
    content: {
      id: 10,
      content: (<Content/>),
    },
  },
];


const ToggleBar = ({
  buttons = initialState.map(state => state.button),
  contents = initialState.map(state => state.content),
}) => {
  const [
    position,
    setPosition,
  ] = useState({});

  const [
    pointerStartPosition,
    setPointerStartPosition,
  ] = useState(null);
  const [
    isChangeActive,
    setIsChageActive,
  ] = useState(true);

  const [
    contentId,
    setContentId,
  ] = useState(0);

  const buttonsBar = useRef(null);
  const buttonsWrapper = useRef(null);

  const onClickButtonHandler = detectAndSetNewActiveButton.bind(
    null,
    position.centerPosition,
    setPosition,
    buttonsWrapper.current,
  );

  useEffect(() => {
    setPosition({
      centerPosition: {
        width: window.getComputedStyle(
          buttonsWrapper.current.firstChild, null).width,
      },
      rightPosition: {
        transform: `translateX(calc(${window.getComputedStyle(
          buttonsWrapper.current.firstChild, null).width} + 1.7rem))`,
      },
    });

    buttonsWrapper.current.firstChild.style.color = 'var(--text-color-light)';
  }, []);


  return (
    <div className={ styles.ToggleBar }>
      <div ref={ buttonsBar } className={ styles.buttonsBar }>
        <span
          ref={ buttonsWrapper }
          className={styles.buttonsWrapper}
          onPointerDown={ event => {
            setPointerStartPosition(event.pageX
              + buttonsWrapper.current.scrollLeft);
          } }
          onPointerMove={ event => {
            if (pointerStartPosition
              && event.pointerType !== 'touch') {
              setIsChageActive(false);
              buttonsWrapper.current.scrollTo(
                pointerStartPosition - event.pageX, null);
            }
          } }
          onTouchMove={event => {
            if (pointerStartPosition) {
              setIsChageActive(false);
              buttonsWrapper.current.scrollTo(
                pointerStartPosition - event.touches[0].clientX, null);
            }
          } }
          onTouchEnd={ () => {
            setPointerStartPosition(null);
            setTimeout(() => setIsChageActive(true), 200);
          } }
          onPointerUp={ event => {
            if (event.pointerType !== 'touch') {
              setPointerStartPosition(null);
              setTimeout(() => setIsChageActive(true), 200);
            }
          } }
          onPointerLeave={ event => {
            if (event.pointerType !== 'touch') {
              setPointerStartPosition(null);
              setIsChageActive(true);
            }
          } }
          onWheel={ event => {
            buttonsWrapper.current.scrollBy(event.deltaY, null);
          } }
        >
          { buttons.map(button => (
            <Button
              key={ button.id }
              onClickButtonHandler={
                onClickButtonHandler }
              textButton={ button.text }
              isChangeActive={ isChangeActive }
              setContentId={ () => setContentId(button.id) }
            />
          )) }
          <ActiveArea
            position={ position }
          />
        </span>
      </div>
      <hr/>
      { contents[contentId].content }
    </div>
  );
};


export default ToggleBar;
