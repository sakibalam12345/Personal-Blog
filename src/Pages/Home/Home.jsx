import Newsletter from '../Newsletter/Newsletter';
import bg from './homecss.css'


const Home = () => {
    return (
        
            <div >
                <div className="bg">
                <h1 className='font-extrabold text-4xl flex justify-center pt-64 text-white pl-36 items-center'>Travel Beyond Borders</h1>
                </div>
               
                <div className='mt-20 '>
                <Newsletter></Newsletter>
                </div>


                        </div>
           

            

        
            
    
    );
};

export default Home;