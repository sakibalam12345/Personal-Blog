import { useLoaderData } from "react-router-dom";



const Blogdetails = () => {

    const alldata = useLoaderData();
    console.log(alldata)
    const {title,image,shortdes,category,longdes} = alldata;

   
   
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="font-bold text-3xl text-center mb-10">Blog Details</h1>
            <div>
                <img className="rounded-lg w-full h-[600px] mb-8" src={image} alt="" />
                <h1 className="font-extrabold text-2xl">{title}</h1>
                <p className="font-medium text-base mb-6">{shortdes}</p>
                <p className="font-medium text-base mb-6">{longdes}</p>
            </div>
        </div>
    );
};

export default Blogdetails;