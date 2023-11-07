import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';


const Instafeed = () => {
    return (
        <div>
            <h1 className="mt-16 text-center font-bold text-5xl mb-10">Our Insta Album</h1>
            <PhotoProvider>
            <div className="grid grid-cols-12 gap-5 max-w-7xl mx-auto">
                <div className="col-span-4 row-span-full">
                    <PhotoView src="https://i.ibb.co/XzHYqcZ/female-travelers-travel-happily.jpg">
                    <img className="rounded-lg" src="https://i.ibb.co/XzHYqcZ/female-travelers-travel-happily.jpg" alt="" />
                    </PhotoView>
               
                </div>
                <div className="col-span-3 ">
                    <PhotoView src="https://i.ibb.co/yY1J2RC/men-stand-watch-mountains-tropical-forests-with-backpacks-forest-adventure-traveling-climbing.jpg">
                    <img className="rounded-lg" src="https://i.ibb.co/yY1J2RC/men-stand-watch-mountains-tropical-forests-with-backpacks-forest-adventure-traveling-climbing.jpg" alt="" />
                    </PhotoView>
               
                </div>
                <div className="col-span-4">
                    <PhotoView src="https://i.ibb.co/rH6Ysh0/couple-family-traveling-together.jpg"> 
                    <img className="rounded-lg" src="https://i.ibb.co/rH6Ysh0/couple-family-traveling-together.jpg" alt="" />
                    </PhotoView>
          
                </div>
                <div className="col-span-3">
                    <PhotoView src="https://i.ibb.co/6wy07HX/people-portrait-with-plane-flying-sky.jpg">
                    <img  className="rounded-lg h-[250px]" src="https://i.ibb.co/6wy07HX/people-portrait-with-plane-flying-sky.jpg" alt="" />
                    </PhotoView>
                
                </div>
                <div className=" col-span-1">
                    <PhotoView src="https://i.ibb.co/2vP51sz/backpack-thailand-outdoors-water-woman.jpg">
                    <img className="rounded-md " src="https://i.ibb.co/2vP51sz/backpack-thailand-outdoors-water-woman.jpg" alt="" />
                    </PhotoView>
              
                </div>
                <div className="col-span-4 ">
                    <PhotoView src="https://i.ibb.co/nktHZdr/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand.jpg">
                    <img className="rounded-lg" src="https://i.ibb.co/nktHZdr/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand.jpg" alt="" />
                    </PhotoView>
                <img className="rounded-lg" src="https://i.ibb.co/nktHZdr/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand.jpg" alt="" />
                </div>
                <div className="col-span-4 ml-16">
                    <PhotoView src="https://i.ibb.co/cbkdG2n/rear-view-back-young-asian-hiking-man-standing-riseup-hands-with-happy-peak-rocky-mountain-copy-spac.jpg">
                    <img className="rounded-lg" src="https://i.ibb.co/cbkdG2n/rear-view-back-young-asian-hiking-man-standing-riseup-hands-with-happy-peak-rocky-mountain-copy-spac.jpg" alt="" />
                    </PhotoView>
              
                </div>
                <div className="col-span-4">
                    <PhotoView src="https://i.ibb.co/QpxhDsh/young-traveler.jpg">
                    <img className="rounded-lg"  src="https://i.ibb.co/QpxhDsh/young-traveler.jpg" alt="" />
                    </PhotoView>
              
                </div>
                <div className="col-span-7">
                    <PhotoView src="https://i.ibb.co/FbyP8J0/tourist-from-mountain-top-sun-rays-man-wear-big-backpack-against-sun-light.jpg">
                    <img  className="rounded-lg " src="https://i.ibb.co/FbyP8J0/tourist-from-mountain-top-sun-rays-man-wear-big-backpack-against-sun-light.jpg" alt="" />
                    </PhotoView>
               
                </div>
    
            </div>
            </PhotoProvider>
            
        </div>
    );
};

export default Instafeed;