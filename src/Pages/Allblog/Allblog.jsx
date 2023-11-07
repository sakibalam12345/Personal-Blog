import axios from "axios";
import { useEffect, useState } from "react";
import Allblogshow from "./Allblogshow";



const Allblog = () => {

    const [allblogs,setallblog] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/info')
        .then(res=>{
            console.log(res.data)
            setallblog(res.data)
        })
    },[])

    
    return (
        <div>
            <h1 className="mt-10 mb-16 font-bold text-3xl text-center">All Blog</h1>
            {
                allblogs.map(blog=> <Allblogshow key={blog._id} blog={blog}></Allblogshow>)
            }

        </div>
    );
};

export default Allblog;