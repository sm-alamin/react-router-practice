import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Error from "./components/Error";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Home from './components/Home/Home';
import First from './components/First/First';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetail/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />
//   },
//   {
//     path: "/about",
//     element: <About />
//   },
//   {
//     path: "/contact",
//     element: <Contact />
//   },
// ])

const router = createBrowserRouter([
 {
  path:"/",
  element: <Home />,
  children: [
    {
      path: "/",
      element: <First />
    },
    {
      path: "/friends",
      element: <Friends />,
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
    },
    {
      path: '/friend/:friendId',
      element: <FriendDetails />,
      loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
    },
    {
      path: "/posts",
      element: <Posts />,
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts')
    },
    {
      path: "/post/:postId",
      element: <PostDetails />,
      loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "*",
      element: <div>404</div>
    }
  ]
 },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
