import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "./Registration/Registration";

import Addblog from "../Pages/Addblog/Addblog";
import Allblog from "../Pages/Allblog/Allblog";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Blogdetails from "../Pages/Blogdetails/Blogdetails";
import Update from "../Pages/Update/Update";
import Privateroute from "../Pages/Privateroute/Privateroute";
import Mostrecent from "../Pages/Recentblog/Mostrecent";




const router = createBrowserRouter([

    {
        path : '/',
        element : <Root></Root>,
        errorElement : <Errorpage></Errorpage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path: '/addblog',
                element :<Privateroute> <Addblog></Addblog></Privateroute>

            },
            {
                path : '/allblog',
                element : <Allblog></Allblog>
            },
            {
                path : '/wishlist',
                element :<Privateroute> <Wishlist></Wishlist></Privateroute>
            },
            {
                path : '/blogdetails/:id',
                element : <Privateroute><Blogdetails></Blogdetails></Privateroute>,
                loader : ({params})=> fetch(`http://localhost:5000/info/${params.id}`)

                
            },
            {
              path : '/update/:id',
              element :  <Privateroute><Update></Update></Privateroute>,
              loader : ({params})=> fetch(`http://localhost:5000/info/${params.id}`)
            },
            {
              path : '/mostrecent',
              element : <Mostrecent></Mostrecent>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/registration',
                element : <Registration></Registration>
            },
           
        ]
    },
])


export default router;