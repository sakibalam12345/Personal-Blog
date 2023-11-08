import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const Wishlistcardshow = ({item,wishlisted,setwishlisted}) => {

    const {title,image,shortdes,category,longdes,_id} = item;

    const handledelete = id =>{
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/wishlist/${id}`)
                .then(res=>{
                    console.log(res.data)
                    if(res.data.deletedCount > 0 ){
                        toast('successfully deleted')
                    }

                })
                const remaining = wishlisted.filter(list=> list._id !== id)
                setwishlisted(remaining)
            }
           

          });
       
    }
    return (
        <div className="max-w-7xl mx-auto">
        <div className="card w-[900px] h-[600px] lg:card-side bg-base-100 shadow-xl mb-7">
        <figure><img className="h-full w-[1250px]" src={image} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{shortdes}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handledelete(_id)} className="btn btn-outline">Remove</button>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Wishlistcardshow;