import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import { FcGoogle} from 'react-icons/fc';
import { useState } from "react";
import { toast } from "react-toastify";


const Login = () => {

  const {login,loginwithgoogle} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [loginerror,setloginerror] = useState();
  const [loginsuccess,setloginsuccess] = useState();

  // console.log(location)

    const handlelogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password)

        login(email,password)
        .then(result=>{
          console.log(result)
          setloginsuccess(toast('Login successfull'))
          navigate(location?.state ?  location?.state : '/' )
        })
        .catch(error=>{
          // console.error(error)
          setloginerror(toast(error))
        })
    }
    const handlegoogle = ()=>{
      loginwithgoogle()
      .then(res=>{
        console.log(res)
        navigate('/')
      })
      .catch(error=>{
        console.error(error)
      })

    }
    return (
        <div className="hero  min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-[650px] h-[400px] max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handlelogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

            </form>
            <div className="text-center pb-5">
                <h1>Do not have an accout? please <Link to='/registration'><button className="btn btn-outline">registration</button></Link></h1>
            </div>
          </div>
          <div>
            <h1>Login with Google</h1>
            <button onClick={handlegoogle} className="btn btn-outline ml-10"><FcGoogle></FcGoogle></button>
          </div>
        </div>
      </div>
    );
};

export default Login;