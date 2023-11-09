



const Featuredblogshow = ({blog}) => {
    const {title,image,shortdes,category,longdes} = blog;
 
 
    return (
      
    <tr>
     
        <td>
          <div className="flex items-center space-x-3">
           
            <div>
              <div className="font-bold">{category}</div>
              
            </div>
          </div>
        </td>
        <td>
          {title}
        </td>
       
      
      </tr>
   
        
    );
};

export default Featuredblogshow;