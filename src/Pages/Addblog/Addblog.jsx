import axios from "axios";
import { toast } from "react-toastify";

const Addblog = () => {
    const currentdate = new Date();
    const formattedtime = currentdate.toLocaleTimeString()
    // console.log(formattedtime)

    const handleaddblog = e =>{

        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const shortdes = form.shortdes.value;
        const category = form.category.value;
        const longdes = form.longdes.value;
        console.log(title,image,shortdes,category,longdes,formattedtime);
        const alldata = {title,image,shortdes,category,longdes, currenttime : formattedtime};

        axios.post('http://localhost:5000/info',alldata)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                toast('Successfully submitted')
            }
            form.reset()
        })

    }

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="font-bold text-3xl text-center mb-20">Add New Blog Here</h1>
            <form onSubmit={handleaddblog}>
            <div className="flex justify-center gap-10">
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Title</span>
  </label>
  <input type="text" name="title" placeholder="Type here" className="input input-bordered  " />
</div>
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Image</span>
  </label>
  <input type="url" name="image" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
</div>
            </div>
            <div className="flex justify-center gap-10">
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Short description</span>
  </label>
  <input type="text" name="shortdes" placeholder="Type here" className="input input-bordered  " />
</div>
            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Select category</span>
  </label>
  <select name="category" className="select select-bordered w-full max-w-xs">
  
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
            <textarea placeholder="Description" name="longdes" className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
            </div>
            <div className="mt-6">
            <button className="btn btn-block">Submit</button>
            </div>
            </form>

        </div>
    );
};

export default Addblog;