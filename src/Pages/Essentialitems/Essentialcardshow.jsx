

import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const Essentialcardshow = ({item}) => {

    const {name,price,img,_id} = item;

    const handlecart = id =>{
        console.log(id)
        toast('successfully added to the cart')

    }

   


    return (

        <div className="max-w-6xl mx-auto">

       
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl w-[300px] h-[200px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>$ {price}</p>
    <div className="card-actions">
        
        <button onClick={()=>handlecart(_id)} className="btn btn-outline">add to cart</button>
       
    </div>
  </div>
</div>
</div>
    );
};

export default Essentialcardshow;