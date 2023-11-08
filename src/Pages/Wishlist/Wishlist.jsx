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

   
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="font-bold text-3xl text-center mb-10">Your Selected wishlist</h1>
            <h2 className="text-red-600 mb-10">note : it takes some time to load data.please wait</h2>
            <div className="grid grid-cols-1">
                {
                    wishlisted.map(item=> <Wishlistcardshow key={item._id} 
                      
                        wishlisted={wishlisted}
                        setwishlisted={setwishlisted}
                        item={item}></Wishlistcardshow>)
                }
            </div>
        </div>
    );
};

export default Wishlist;