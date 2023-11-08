

const Wishlistcardshow = ({item,handledelete}) => {

    const {title,image,shortdes,category,longdes,_id} = item;
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