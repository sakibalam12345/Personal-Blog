import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const alldetails = useLoaderData()
    const {title,image,shortdes,longdes,_id} = alldetails;
    // console.log(alldetails)

    const handleupdate = e =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const shortdes = form.shortdes.value;
        const category = form.category.value;
        const longdes = form.longdes.value;
        console.log(title,image,shortdes,category,longdes)
        const update = {title,image,shortdes,category,longdes}

        axios.patch(`https://blog-server-sandy.vercel.app/info/${_id}`,update)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    title: "Good job!",
                    text: "You have Updated Details!",
                    icon: "success"
                  });
            }
        })


    }
    return (
        <div>
            <h1 className="font-extrabold text-2xl text-center">Update Blog Information</h1>
            <div className="max-w-7xl mx-auto">
            <form onSubmit={handleupdate}>
            <div className="flex justify-center gap-10">
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Title</span>
  </label>
  <input type="text" name="title" defaultValue={title} className="input input-bordered  " />
</div>
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Image</span>
  </label>
  <input type="url" name="image" defaultValue={image} className="input input-bordered w-full max-w-xs" />
</div>
            </div>
            <div className="flex justify-center gap-10">
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Short description</span>
  </label>
  <input type="text" name="shortdes" defaultValue={shortdes} className="input input-bordered  " />
</div>
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Select category</span>
  </label>
  <select name="category" className="select select-bordered w-full max-w-xs">
  <option value="" >Select a category</option>
  <option>Hiking and Trekking Blogs</option>
  <option>Camping and Outdoor Blogs</option>
  <option>Wildlife and Safari Blogs</option>
  <option>Surfing Blogs</option>
  <option>Mountaineering Blogs</option>
</select>
</div>
            </div>
            <div className="mt-8 ml-[400px]">
                <h1 className="pl-28 pb-3">Long description</h1>
            <textarea defaultValue={longdes} name="longdes" className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
            </div>
            <div className="mt-6">
            <button className="btn btn-block">update</button>
            </div>
            </form>
            </div>
        </div>
    );
};

export default Update;