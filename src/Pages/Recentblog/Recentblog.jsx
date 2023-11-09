import { Link } from "react-router-dom";


const Recentblog = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="font-bold text-3xl text-center mb-8">Our Most Recent Blog</h1>
            <div className="flex justify-between items-center">
                <div className="flex-1">
                    <h1 className="font-semibold text-4xl pb-5">Explore More About <br /> Our Recent <br /> Journey</h1>
                    <Link to='/mostrecent'>
                    <button className="btn btn-outline">See more</button>
                    </Link>
                     </div>
                <div className="flex-1">
                    <img className="rounded-lg" src="https://i.ibb.co/cxmX9Ln/blog-post-img-01.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Recentblog;