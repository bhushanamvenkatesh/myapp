
import { Outlet } from 'react-router';
import './App.css';
import { Provider } from 'react-redux';

import Navbar from './Components/Navbar';
import store from './store/store';


function App() {

  return (<>
    <Provider store={store}>
      <Navbar />
      <Outlet></Outlet>
    </Provider>



  </>);
}

export default App;
