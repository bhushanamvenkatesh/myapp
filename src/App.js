import { Provider } from 'react-redux';
import store from './store/store'
import Todos from './Todos';

import './App.css';

function App() {
  
  return (
    <Provider store={store}>
      <Todos/>
    </Provider>
  );
}

export default App;
