import FuncComponent from './components/Examles/FuncComponent';

export const initialState = [
  {
    button: {
      id: 0,
      text: 'Учебная деятельность',
    },
    content: {
      id: 0,
      content: <FuncComponent content="Это функциональный компонент"/>,
    },
  },
  {
    button: {
      id: 1,
      text: 'Курсовые',
    },
    content: {
      id: 1,
      content: 'Это просто текст без компонента',
    },
  },
  {
    button: {
      id: 2,
      text: 'Практика',
    },
    content: {
      id: 2,
      content: <FuncComponent
        content="Еще один функциональный компонент с большими отступами"
        bigPaddig={ true }
      />,
    },
  },
  {
    button: {
      id: 3,
      text: 'Очень очень длинная кнопка',
    },
    content: {
      id: 3,
      content: 'Еще один просто текст без компонента',
    },
  },
  {
    button: {
      id: 4,
      text: 'Нет',
    },
    content: {
      id: 4,
      content: <FuncComponent
        content="Еще один функциональный компонент
          с большими отступами и задним фоном"
        bigPaddig={ true }
        background = { true }
      />,
    },
  },
  {
    button: {
      id: 5,
      text: 'Еще одна кнопка',
    },
    content: {
      id: 5,
      content: 'Еще один просто текст без компонента',
    },
  },
  {
    button: {
      id: 6,
      text: 'И еще одна кнопка',
    },
    content: {
      id: 6,
      content: <FuncComponent content="Еще один функциональный компонент"/>,
    },
  },
  {
    button: {
      id: 7,
      text: 'И еще одна кнопка 2',
    },
    content: {
      id: 7,
      content: 'Еще один просто текст без компонента',
    },
  },
  {
    button: {
      id: 8,
      text: 'И еще одна кнопка 3',
    },
    content: {
      id: 8,
      content: <FuncComponent content="Еще один функциональный компонент"/>,
    },
  },
  {
    button: {
      id: 9,
      text: 'И еще одна кнопка 4',
    },
    content: {
      id: 9,
      content: 'Еще один просто текст без компонента',
    },
  },
  {
    button: {
      id: 10,
      text: 'И еще одна кнопка 5',
    },
    content: {
      id: 10,
      content: <FuncComponent content="Еще один функциональный компонент"/>,
    },
  },
];
