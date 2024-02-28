import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";
 import Login from './Components/Login';
 import Displayproducts from './Components/Displayproducts'
 import CartComponent from './Components/CartComponent';
 const router = createBrowserRouter([
   {
     path: "/",
     element: <App/>,
     children:[
      {
         path:'/',
         element:<Login/>
      },
      {
         path:'/displayproducts',
         element:<Displayproducts/>
      },
      {
         path:'/cartcomponent',
         element:<CartComponent/>
      }
     ]
   },
 ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
