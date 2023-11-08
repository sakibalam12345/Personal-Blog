import { useContext } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";



const Privateroute = ({children}) => {

    const location = useLocation();
   
    // console.log(location)

    const {user,loader} = useContext(AuthContext);
    if(loader){
        return <span className="loading loading-spinner loading-xs"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location?.pathname} to='/login'></Navigate>
        
};

export default Privateroute;