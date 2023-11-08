import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Allblogshow = ({blog}) => {
    const {title,image,shortdes,category,_id,longdes} = blog;

    const handlewishlist = id =>{
        console.log(id)
        const alldata = {title,image,shortdes,category,longdes}
        console.log(alldata)

        axios.post('http://localhost:5000/wishlist',alldata)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    title: "Thank you!",
                    text: "Successfully added to wishlist!",
                    icon: "success"
                  });
            }
        })
    }
   
    return (
        <div>
            <div>
   
            </div>
            <div className="card  lg:card-side bg-base-100 shadow-xl">
  <figure><img className="w-[850px] h-[350px]" src={image} alt="Album"/></figure>
  <div className="card-body">
    <h3 className="font-semibold text-2xl">{category}</h3>
    <h2 className="card-title">{title}</h2>
    <p>{shortdes}</p>
    <div className="card-actions justify-end">
        <Link>
        <button className="btn btn-outline">Details</button>
        </Link>
        <Link >
        <button onClick={()=>handlewishlist(_id)} className="btn btn-outline">Wishlist</button>
        </Link>
      
    </div>
  </div>
</div>
                 
        </div>
    );
};

export default Allblogshow;