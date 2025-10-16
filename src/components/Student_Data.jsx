import { use, useState } from "react"

function Student_Data(){

    const [ data, setdata ] = useState({name:"",address:""})
    const [ store1, setstore ] = useState([]);
    const [ editindex, seteditindex ] = useState(null);
 
    const handleData = (e) => {
        e.preventDefault();
        if(editindex!=null){
           let update = [...store1];
           store1[editindex] = data;
           seteditindex(null)
        }else{
        setstore([...store1,data])
    }
        setdata({name:"",address:""})
    }

    let deleteData = (index)=>{
        let newData = store1.filter((val,i)=>{
            return index!=i;
        })
        setstore(newData)
    }

    let updateData = (val,index)=>{
           setdata(store1[index])
           seteditindex(index);
          
         
    }
 
return(
<>
   <div className="container-fluid bg-light"></div>
        <div>
             <form>
             <label>Name</label>
             <input type="text" onChange={(e)=>setdata({...data,name:e.target.value})} value={data.name} id="" placeholder="Enter name" /> <br /><br />
             <label>Address:</label>
             <input type="text" onChange={(e)=>setdata({...data,address:e.target.value})} value={data.address} id="" placeholder="Enter address" /> <br /><br />
             <button value="add" type="button" className="" id="addbtn" onClick={handleData}>{editindex!=null?"Update":"Add"}</button>
             </form>
        </div>
     <div>

    <table className="table-striped">
        <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Update</th>
            <th>Remove</th>
        </tr>
      
            {store1?.map((val,index)=>(
            <tr key={index}>
            <td>{val.name}</td>
            <td>{val.address}</td>
            <td><button  onClick={()=>updateData(val,index)} type="button">Update</button></td>
            <td><button onClick={()=>deleteData(index)} type="button">Delete</button></td>
        </tr>
            ))
      }
    

    </table>
 </div>
</>
)}
export default Student_Data