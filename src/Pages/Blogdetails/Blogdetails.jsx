import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";
import Commenttable from "./Commenttable";



const Blogdetails = () => {

    const {user} = useContext(AuthContext);
    // console.log(user)
    const username = user?.displayName;
    const userphoto = user?.photoURL;
    const useremail = user?.email

    // console.log(username,userphoto)


    const alldata = useLoaderData();
    // comment data start
    const [allcomment,setallcomment] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/comment')
        .then(res=>{
            console.log(res.data)
            setallcomment(res.data)
        })
    },[]);
    // cooment data end
    console.log(allcomment)

    // console.log(alldata)
    const {title,image,shortdes,longdes} = alldata;
// handle comment
    const handlecomment = e =>{
        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;
        // console.log(comment)
        const allinfo = {username,userphoto,comment,useremail}
    
        axios.post('http://localhost:5000/comment',allinfo)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "Your Comment successfully added!",
                    icon: "success"
                  });
            }
            form.reset()
        }) 
    }
    // handlecomment

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="font-bold text-3xl text-center mb-10">Blog Details</h1>
            <div>
                <img className="rounded-lg w-full h-[600px] mb-8" src={image} alt="" />
                <h1 className="font-extrabold text-2xl">{title}</h1>
                <p className="font-medium text-base mb-6">{shortdes}</p>
                <p className="font-medium text-base mb-6">{longdes}</p>
            </div>
            {/* starts here */}
         
                <h1 className="font-bold text-xl">Post a Comment</h1>
                {useremail === useremail ? 
                
                <><h1 className="text-red-500 mt-8">You cant comment on your own post</h1>
                <Link>
                <button className="btn btn-outline mt-2">Update Details</button>
                </Link>
                </> :
                
                <>
                  <div>
                <div>
                <form onSubmit={handlecomment}>
                <textarea placeholder="Your comment" name="comment" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
               <br /> <button className="btn btn-outline">post</button>
                </form>
                </div>
               
            </div>
            {/* ends here */}

            {/* starts here */}
            <div className="mt-10">
                <h1 className="font-medium text-lg ml-20">All comment</h1>
               <div>
               <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Photo</th>
        <th>Name</th>
        <th>Comment</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        allcomment.map(singlecomment => <Commenttable
             key={singlecomment._id} 
             singlecomment={singlecomment}
        
        ></Commenttable>)

      }  
      
    
    </tbody>
  </table>
</div>
               </div>
                
            </div>
            {/* ends here */}
                
                </>}

        </div>
    );
};

export default Blogdetails;