

const Mostrecentblogshow = ({blog}) => {
    const {title,image,shortdes,category,longdes, currenttime} = blog;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img className="w-[850px] h-[350px]" src={image} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title font-semibold text-xl">{title}</h2>
          <p className="font-medium text-base">{shortdes}</p>
          <p className="font-medium text-base">Uploaded time: {currenttime}</p>
          
        </div>
      </div>
    );
};

export default Mostrecentblogshow;