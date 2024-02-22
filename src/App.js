// import logo from './logo.svg';
// import React, {useState} from 'react';
import Products from './Products'
// import { useState } from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  let [val, setVal] = useState(100)
  function update(e) {
    setVal(e.target.value)
    console.log(val)
  }

  return (
    <>
      <h1>{val}</h1>
      <button onClick={() => {

        setVal(val + 100)

      }
      }>change</button>
      <input type='text' onChange={(event) => {
        update(event)
      }} value={val} />

    </>

  );
}

export default App;
