import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Featuredblogshow from "./Featuredblogshow";


const Featuredblogs = () => {

    const [featuredblog,setfeaturedblog] = useState([]);
    useEffect(()=>{
        axios.get('https://blog-server-sandy.vercel.app/info')
        .then(res=>{
            console.log(res.data)
            const sorteddata = res.data.sort((a,b)=> b.longdes.length - a.longdes.length)
            setfeaturedblog(sorteddata)
        })
    },[])
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="font-bold text-3xl text-center mb-10">Feature blogs</h1>
          <div>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>category name</th>
        <th>Title</th>
      
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    
    </tbody>
    {
     featuredblog.map(blog => <Featuredblogshow key={blog._id} blog={blog}></Featuredblogshow>)
     }
    
  </table>
</div>
          </div>
        </div>
    );
};

export default Featuredblogs;