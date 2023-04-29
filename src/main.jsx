import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Statistics from './components/Statistics/Statistics';
import { productsAndCartData } from './components/Loader/Loader'
import Error from './components/Error/Error';
import Blog from './components/Blog/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav></Nav>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: productsAndCartData,
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: "/",
        loader: () => fetch('joblist.json'),
        element: <Home></Home>
      },
      {
        path: "details/:details_id",
        element: <Details></Details>,
        loader: productsAndCartData,
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
