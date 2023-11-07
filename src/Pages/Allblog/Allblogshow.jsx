import { Link } from "react-router-dom";


const Allblogshow = ({blog}) => {
    const {title,image,shortdes,category} = blog;
   
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
        <Link>
        <button className="btn btn-outline">Wishlist</button>
        </Link>
      
    </div>
  </div>
</div>
                 
        </div>
    );
};

export default Allblogshow;