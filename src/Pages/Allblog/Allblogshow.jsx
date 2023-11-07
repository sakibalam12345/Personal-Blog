import { Link } from "react-router-dom";


const Allblogshow = ({blog}) => {
    const {title,image,shortdes} = blog;
    return (
        <div className="grid grid-cols-2 max-w-7xl mx-auto">
            <div>
            <div className="card w-[700px] lg:card-side bg-base-100 shadow-xl">
  <figure><img className="w-full h-full" src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{shortdes}</p>
    <div className="card-actions justify-end">
        <Link>
        <button className="btn btn-outline">Details</button>
        </Link>
        <Link>
        <button className="btn btn-outline">Wishlist</button>
        </Link>
      
    </div>
  </div>
</div>
            </div>
            
        </div>
    );
};

export default Allblogshow;