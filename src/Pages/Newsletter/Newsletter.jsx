import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
    const handletoast = e =>{
      

        const form = e.target;
        const email = form.email.value;
        e.preventDefault();
        toast('Thank you for subscribing to our newsletter');
        form.reset()

        console.log(email)
    }
    return (
        <div >

            <h1 className="font-bold text-5xl text-center mb-24">newsletter section</h1>
            <div className="flex justify-center items-center">
            <div>
                <img src="https://i.ibb.co/xzYYLcF/h1-img-01.png" alt="" />
            </div>
            <div>
            <h2 className="font-semibold text-2xl pb-12 ">FINDING THE PERFECT TRAILS TO HIKE IS <br /> EASY WITH NEWSLETTER</h2>
            <h3>Subscribe with your email</h3>
            <form onSubmit={handletoast}>
            <input type="email"  name="email" placeholder="E-mail" className="input input-bordered w-full max-w-xs ml-4 mr-2" required/>
            <button  className="btn btn-outline ">Subscribe</button>
            </form>
           
            </div>
            </div>
        
         
        </div>
    );
};

export default Newsletter;