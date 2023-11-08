import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Wishlistcardshow from "./Wishlistcardshow";


const Wishlist = () => {

    const [wishlisted,setwishlisted] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/wishlist')
        .then(res=>{
            console.log(res.data)
            setwishlisted(res.data)
        })
    },[])

    const handledelete = id =>{
        console.log(id)
    }
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="font-bold text-3xl text-center mb-10">Your Selected wishlist</h1>
            <div className="grid grid-cols-1">
                {
                    wishlisted.map(item=> <Wishlistcardshow key={item._id} 
                        handledelete={handledelete}
                        
                        item={item}></Wishlistcardshow>)
                }
            </div>
        </div>
    );
};

export default Wishlist;