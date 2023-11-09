import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Mostrecentblogshow from "./Mostrecentblogshow";


const Mostrecent = () => {

    const [allblog,setallblog] = useState([])

    useEffect(()=>{
        axios.get('https://blog-server-sandy.vercel.app/info')
        .then(res=>{
            console.log(res.data)
            const sortdata = res.data.sort((a,b)=> new Date(b.currenttime)- new Date(a.currenttime))
            setallblog(sortdata)
        })
    },[])
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="font-bold text-3xl text-center underline mb-16">Most Recent Blog</h1>
            <div className="grid grid-cols-2 gap-5">
                {
                    allblog.map(blog=> <Mostrecentblogshow key={blog._id} blog={blog}></Mostrecentblogshow>)
                }
            </div>
        </div>
    );
};

export default Mostrecent;