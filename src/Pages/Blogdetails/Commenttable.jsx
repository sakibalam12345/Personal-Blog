

const Commenttable = ({singlecomment}) => {

    const {username,userphoto,comment,useremail} = singlecomment;
    return (
       
             <tr>
        <th>
          <label>
      
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
          <div className="avatar">
  <div className="w-12 rounded-full">
    <img src={userphoto} />
  </div>
</div>
           
          </div>
        </td>
        <td>
        {username}
         
        </td>
        <td>{comment}</td>
       
      </tr> 
        
    );
};

export default Commenttable;