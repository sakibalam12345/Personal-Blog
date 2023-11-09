import axios from "axios";
import { useEffect, useState } from "react";
import Allblogshow from "./Allblogshow";



const Allblog = () => {

    const [allblogs,setallblogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    
    useEffect(()=>{
        axios.get('https://blog-server-sandy.vercel.app/info')
        .then(res=>{
            // console.log(res.data)
            setallblogs(res.data);
            setFilteredBlogs(res.data)
        })
    },[])

const handlechange = e =>{
    console.log(e.target.value)
    const selectedvalue = e.target.value;

    if(selectedvalue){
        const filteredata = allblogs.filter(item => item.category === selectedvalue)
        setFilteredBlogs(filteredata)
    }else{
        setFilteredBlogs(allblogs)
    }
    
}
    
    return (
        <div className="max-w-7xl mx-auto" >
            <h1 className="mt-10 mb-16 font-bold text-3xl text-center">All Blog</h1>
            <div className="mb-5">
   
                <select onChange={handlechange} name="category" className="select select-bordered w-full max-w-xs">
     <option value="" >Select a category</option>
  <option value={'Hiking and Trekking Blogs'} >Hiking and Trekking Blogs</option>
  <option value={'Camping and Outdoor Blogs'}>Camping and Outdoor Blogs</option>
  <option value={'Wildlife and Safari Blogs'}>Wildlife and Safari Blogs</option>
  <option value={'Surfing Blogs'}>Surfing Blogs</option>
  <option value={'Mountaineering Blogs'}>Mountaineering Blogs</option>
     </select>

            </div>
            <p className="text-red-500 mb-4">It takes some time to load data.please wait</p>
   
            <div className="grid grid-cols-2 gap-8">
            {
                filteredBlogs.map(blog=> <Allblogshow key={blog._id} blog={blog}
                   
                ></Allblogshow>)
            }
            </div>
            

        </div>
    );
};

export default Allblog;