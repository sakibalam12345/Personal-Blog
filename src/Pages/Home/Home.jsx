import Essentialitems from '../Essentialitems/Essentialitems';
import Instafeed from '../Instafeed/Instafeed';
import Newsletter from '../Newsletter/Newsletter';
import Recentblog from '../Recentblog/Recentblog';
import bg from './homecss.css'


const Home = () => {
    return (
        
            <div >
                <div className="bg">
                <h1 className='font-extrabold text-4xl flex justify-center pt-64 text-white pl-36 items-center'>Travel Beyond Borders</h1>
                </div>
                <div className='mt-16 mb-16'>
                    <Recentblog></Recentblog>

                </div>
               
                <div className='mt-20 '>
                <Newsletter></Newsletter>
                </div>
                <div>
                    <Essentialitems></Essentialitems>
                </div>
                <div>
                    <Instafeed></Instafeed>
                </div>


                        </div>
           

            

        
            
    
    );
};

export default Home;