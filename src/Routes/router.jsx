import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import ForgetPass from "../Pages/ForgetPass";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllVisa from "../Pages/AllVisa";
import AddVisa from "../Pages/AddVisa";
import MYAddedVisa from "../Pages/MYAddedVisa";
import VisaApplication from "../Pages/VisaApplication";
import Details from "../Pages/Details";
import Update from "../Pages/Update";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/visas')
        },
        {
            path:'/login',
            element:<LogIn></LogIn>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/allvisa',
          element:<AllVisa></AllVisa>,
          loader:()=>fetch(`http://localhost:5000/visas`)
        },
        {
          path:'/addvisa',
          element:<PrivateRoute><AddVisa></AddVisa></PrivateRoute>
        },
        {
          path:'/myaddedvisa',
          element:<PrivateRoute><MYAddedVisa></MYAddedVisa></PrivateRoute>
        },
        {
          path:'/visaapplicatin',
          element:<PrivateRoute><VisaApplication></VisaApplication></PrivateRoute>,
          loader:()=>fetch('http://localhost:5000/myvisa')
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/visas/${params.id}`)
        },
        {
          path:'/update/:id',
          element:<PrivateRoute><Update></Update></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/visas/${params.id}`)
        }

      ],
      
    },
    {
      path:'/forgetPass',
      element:<ForgetPass></ForgetPass>
    },
   
  ]);
  export default router