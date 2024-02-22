// import logo from './logo.svg';
// import React, {useState} from 'react';
import Products from './Products'

import './App.css';

function App() {
  let peron={
    name:'venkat',
    gender:'male',
    city:'hyderabad',
    
  }
  return (
   <Products {...peron}/>
  );
}

export default App;
