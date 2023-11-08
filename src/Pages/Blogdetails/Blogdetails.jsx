import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import axios from "axios";



const Blogdetails = () => {

    const {user} = useContext(AuthContext)
    console.log(user)
    const username = user?.displayName;
    const userphoto = user?.photoURL;
    console.log(username,userphoto)


    const alldata = useLoaderData();
    console.log(alldata)
    const {title,image,shortdes,longdes} = alldata;

    const handlecomment = e =>{
        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;
        console.log(comment)
        const allinfo = {username,userphoto,comment}
        

        axios.post('http://localhost:5000/comment',allinfo)
        .then(res=>{
            console.log(res.data)
        })
       
    }

   
   
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="font-bold text-3xl text-center mb-10">Blog Details</h1>
            <div>
                <img className="rounded-lg w-full h-[600px] mb-8" src={image} alt="" />
                <h1 className="font-extrabold text-2xl">{title}</h1>
                <p className="font-medium text-base mb-6">{shortdes}</p>
                <p className="font-medium text-base mb-6">{longdes}</p>
            </div>
            <div>
                <h1 className="font-bold text-xl">Post a Comment</h1>
                <form onSubmit={handlecomment}>
                <textarea placeholder="Your comment" name="comment" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
               <br /> <button className="btn btn-outline">post</button>
                </form>
            </div>
        </div>
    );
};

export default Blogdetails;