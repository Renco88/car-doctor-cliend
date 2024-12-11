import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/Home/About";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Checkout from "../Pages/CheckOut/Checkout";
import Booking from "../Pages/Booking/Booking";
import PrivetRoute from "./PrivetRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
          path: 'checkout/:id',
          element: <PrivetRoute><Checkout></Checkout></PrivetRoute>,
          loader: ({params})=> (`http://localhost:5000/services/${params.id}`)
        },
        {
          path: 'booking',
          element: <PrivetRoute><Booking></Booking></PrivetRoute>
        }

    ]
  },
]);

export default router;
