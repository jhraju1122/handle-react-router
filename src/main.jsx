import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './assets/components/Header/Header.jsx';
import Home from './assets/components/Home/Home.jsx';
import About from './assets/components/About/About.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:  <Header></Header>,
  },
  {
    path: "/home",
    element:   <Home></Home>,
  },
  {
    path: "/about",
    element:   <About></About>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
