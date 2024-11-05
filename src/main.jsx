import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  
  RouterProvider,
} from "react-router-dom";

import Header from './Components/Header/Header';
import Details from './Components/Details/Details';
import ErrorPage from './ErrorPage';
import Phones from './Components/Phones/Phones';
import Home from './Components/Home/Home';
import Users from './Components/Users/Users.jsx';
import ShowDetails from './Components/ShowDetails/ShowDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/header',
        element:<Header></Header>
      },
      {
        path:'/details',
        element:<Details></Details>
      },
      {
        path:'/phones',
        element:<Phones></Phones>
      },
      {
        path:'/hello',
        element:<div>Hello world|!</div>
      },
      {
        path:'/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/user/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<ShowDetails></ShowDetails>
      },
      {
        path:'/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:'/posts/:postId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
