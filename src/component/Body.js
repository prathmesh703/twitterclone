import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Home from './home';
import Profile from './Profile';
import Feed from './feed';
import Signup from './Signup';


const Body = () => {
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Home/>,
            children:[
                {
                    path:"/",
                    element:<Feed/>
                },
                {
                    path:"/profile",
                    element:<Profile/>
                }
            ]
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/signup",
            element:<Signup/>
        }
    ])
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body