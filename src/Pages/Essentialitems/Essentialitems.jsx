import axios from "axios";
import { useEffect, useState } from "react";
import Essentialcardshow from "./Essentialcardshow";

const Essentialitems = () => {

    const [items,setitems] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/item')
        .then(result=>{
            setitems(result.data)
         
        })
    },[])
    console.log(items)
    return (
        <div>
            <h1 className="font-bold text-5xl text-center mt-10 mb-16">TRAVEL ESSENTIALS ITEMS</h1>
            <div className="grid grid-cols-3 gap-10 ">
                {
                    items.map(item=> <Essentialcardshow key={item._id} item={item}></Essentialcardshow>)
                }

            </div>
        </div>
    );
};

export default Essentialitems;