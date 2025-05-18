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
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
