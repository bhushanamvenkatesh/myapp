
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './store/store';
import './App.css';
import {Link} from 'react-router-dom'

function App() {
  
  return (
    <Provider store={store}>
    <Link to='counter'>Counter</Link>
    <Link to='todos'>Todos</Link>

    </Provider>

   
  );
}

export default App;
