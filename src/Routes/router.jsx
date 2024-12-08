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
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('https://assingment-10-server-psi.vercel.app/visas')
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
          loader:()=>fetch(`https://assingment-10-server-psi.vercel.app/visas`)
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
          loader:()=>fetch('https://assingment-10-server-psi.vercel.app/myvisa')
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader:({params})=>fetch(`https://assingment-10-server-psi.vercel.app/visas/${params.id}`)
        },
        {
          path:'/update/:id',
          element:<PrivateRoute><Update></Update></PrivateRoute>,
          loader:({params})=>fetch(`https://assingment-10-server-psi.vercel.app/visas/${params.id}`)
        }

      ],
      
    },
    {
      path:'/forgetPass',
      element:<ForgetPass></ForgetPass>
    },
   
  ]);
  export default router