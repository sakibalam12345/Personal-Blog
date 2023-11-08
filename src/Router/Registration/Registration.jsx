

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Registration = () => {
  const [regissuccess,setregissuccess] = useState();
  const [regiserror,setregierror] = useState();

const {createuser} = useContext(AuthContext)

    const handleregistration = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photo,email,password)
        if(password.length < 6){
          setregierror(toast('password should be more than 6 charecter'))
        }
        else if(!/[A-Z]/.test(password)){
          setregierror(toast('password do not have a capital letter'))
        }
        else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
          setregierror(toast('password do not have a special character'))
        }
        else if(!/[0-9]/.test(password)){
          setregierror(toast('password do not have number'))
        }

        createuser(email,password)
        .then(result =>{
          console.log(result)
        })
        .catch(error=>{
          console.error(error)
        })
     
    }
  

   
    return (
        <div className="hero  min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Registration now!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-[650px] h-[600px] max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleregistration} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
              </div>
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
                <button className="btn btn-primary">Registration</button>
              </div>

            </form>
            <div className="text-center pb-5">
                <h1>Already have an accout? please <Link to='/login'><button className="btn btn-outline">Login</button></Link></h1>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Registration;