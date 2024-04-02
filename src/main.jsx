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
import Users from './assets/components/Users/Users.jsx';
import Footer from './assets/components/Footer/Footer.jsx';
import UserDetails from './assets/components/UserDetails/UserDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:   <Home></Home>,

    children: [
      {
        path: "/home",
        element:  <Header></Header>,
      },
      {
        path: "/users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element:  <Users></Users>,
      },
     
      {
        path: "/about",
        element:   <About></About>,
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      }
    ]
  },
  {
    path: "/footer",
    element: <Footer></Footer>,
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
