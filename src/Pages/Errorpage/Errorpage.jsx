import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div>
            <img className="w-full h-[600px]"  src="https://i.ibb.co/3TLtNKR/shutterstock-774749455.jpg" alt="" />
            <div className="flex justify-center items-center">
            <Link to='/'><button className="btn btn-outline">Go bak to home</button></Link>
            </div>
          
        </div>
    );
};

export default Errorpage;