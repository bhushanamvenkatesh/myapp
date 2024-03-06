
import Counter from './Counter';
import './App.css';
import Todos from './Todos';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {

  return (
    <>
      <Provider store={store}>
        <Counter />
        <hr />
        <Todos />
      </Provider>

    </>

  );
}

export default App;
