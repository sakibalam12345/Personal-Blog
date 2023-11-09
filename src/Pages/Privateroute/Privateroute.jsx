import { useContext } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'



const Privateroute = ({children}) => {

    const location = useLocation();
   
    // console.log(location)

    const {user,loader} = useContext(AuthContext);
    if(loader){
        return <Skeleton count={5} />
    }
    if(user){
        return children
    }
    return <Navigate state={location?.pathname} to='/login'></Navigate>
        
};

export default Privateroute;