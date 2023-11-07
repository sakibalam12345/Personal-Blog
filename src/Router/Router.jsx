import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "./Registration/Registration";

import Addblog from "../Pages/Addblog/Addblog";
import Allblog from "../Pages/Allblog/Allblog";




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
                element : <Addblog></Addblog>

            },
            {
                path : '/allblog',
                element : <Allblog></Allblog>
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