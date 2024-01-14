import React from 'react';
import ReactDOM from 'react-dom/client';
import Learnmore from './Content/Learnmore/Learnmore';
import './index.css';
import Getstart from './Content/getStart/Getstart';
import Programsd from './Content/rogramsd/Programsd';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LAyout from './Content/LAyout';
import Testomore from './Content/testomore/Testomore';
import Plansd from './Content/Plansindetails/Plansd';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router =createBrowserRouter([
  {
    path:"/",
    element:<LAyout/>,
    children:[{
      path:"",
      element:<App/>
    },
  {
    path:"testomore",
    element:<Testomore/>
  },
{
  path:"plan",
  element:<Plansd/>
},
{
  path:"getstart",
  element:<Getstart/>
},
{
  path:"Programsd",
  element:<Programsd/>
}
,
{
  path:"learnmore",
  element:<Learnmore/>

}]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
      <RouterProvider router={router}/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
