import './index.css';
import './fonts/fonts.css';

import {
  initialState,
} from './initialState';

import ToggleBar from './components/ToggleBar/ToggleBar';

const buttons = initialState.map(state => state.button);
const contents = initialState.map(state => state.content);

const App = () => (
  <>
    <ToggleBar
      buttons={ buttons }
      contents={ contents }
    />
  </>
);


export default App;
