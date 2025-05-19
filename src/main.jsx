import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Root/Root';
import Home from './Components/Home/Home';
import CoffeesData from './Components/Coffees/CoffeesData';
import Coffeedetails from './Components/Coffeedetails';
import UpdateCoffee from './Components/UpdateCoffee';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import AuthProvider from './AuthProvider/AuthProvider';
import Users from './Components/Users/Users';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:5000/coffees"),
        Component: Home
      },
      {
        path: "/addcoffee",
        Component: CoffeesData
      },
      {
        path: "/detailscoffee/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
        Component: Coffeedetails
      },
      {
        path: "/updatecoffee/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/signup",
        Component: Signup
      },
      {
        path: "/users",
        loader: () => fetch("http://localhost:5000/users"),
         Component: Users
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>

)
