import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Info from './Components/info';
import CountryDetails from './Components/CountryDetails';



  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path: "about",
            element: <About/>,
            
          },
          {
            path: "contact",
            element: <Contact/>
          },
          {
            path: "info",
            element: <Info/>
          },
          {
            path:"about/countrydetails/:cname",
            element:<CountryDetails/>
          }

      ]
    },
    
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
