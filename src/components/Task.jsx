import axios from "axios";
import { useEffect, useState } from "react"
import Api from "../../Api/api";
import { ToastContainer, toast } from 'react-toastify';


function Task(){
const [ inputdata, setinputdata ] = useState({title:"",description:"",status:""});
const [ store, setstore ] = useState([]);
const [ updatedata, setupdatedata ] = useState(null);
const [ filterdata, setfilterdata ] = useState([...store]);

const addData = async(e) => {
    
    try {

        e.preventDefault();
        console.log(inputdata);
      
        
        if(updatedata!=null){
           let res = await axios.put(`${Api.updatedata}/${updatedata}`,inputdata)
           console.log("inside update block = ",res.data.message);
           toast.success(res.data.message)
           setupdatedata(null);
           showData();
                  
        }else{        
          let res = await axios.post(Api.create,inputdata);
          console.log(res.data.message);
          toast.success(res.data.message)

          showData();
        }
     setinputdata({title:"",description:"",status:""})
    
    } catch (error) {
        console.log(error);
        
    }
};

const showData = async() => {
    try {
        let res = await axios.get(Api.getdata);
        setstore(res.data.user);
        setfilterdata(res.data.user)
    } catch (error) {
        console.log(error);
        
    }
};

const deleteData = async(id) => {
    try {
        let res = await axios.delete(`${Api.deletedata}/${id}`)
        console.log(res.data.message);
        toast.success(res.data.message)
        showData();
        
    } catch (error) {
        console.log(error);
        
    }
};

const showUpdateData = (index,id) => {
    setupdatedata(id);
    console.log(index,id);
     setinputdata(store[index])
};

const filterData = (event) => {
    let status = event.target.value
    console.log(status);
   if(status=="All"){
    setfilterdata(store);
   }else{
          let new_data = store.filter((val)=>{
         return val.status==status;
        })
     //setstore(new_data);
     setfilterdata(new_data);
    }
};

useEffect(() => {
    showData()
},[]);
return(     
    <>
    <ToastContainer/>
        <div className="container m-5">
            <form className="p-5 shadow w-50" action="" onSubmit={addData}>
                <p className="text-center lead bg-dark text-white rounded-2">Task</p>
                <label>Title</label>
                <input className="form-control" required type="text" name="" onChange={(e)=>setinputdata({...inputdata,title:e.target.value})} value={inputdata.title} id="" placeholder="Enter Title"/>

               <br /> <label>Description</label>
                <input className="form-control" required type="text" name="" onChange={(e)=>setinputdata({...inputdata,description:e.target.value})} value={inputdata.description} placeholder="Enter Description" id="" /> 
                
                <br /><label>Select Status : </label>
                <select className="form-select" value={inputdata.status} required name="" id="statusid" onChange={(e)=>setinputdata({...inputdata,status:e.target.value})}>
                    <option  selected value="">-- Select Status --</option>
                    <option  required value="Completed">Completed</option>
                    <option  required value="In Progress">In Progress</option>
                    <option  required value="Pending">Pending</option>
                </select><br />
                <div className="text-center"><button className="btn btn-primary w-100" type="submit">{updatedata==null?"Add":"Update"}</button></div>
            </form>
        </div>

        <div className="container mb-5">
            <div className="col-lg-12 col-md-12 col-sm-12">
            
             <label>Filter by Status</label> :
            <select  className="border  p-2 rounded-2 bg-light" onChange={filterData} name="" id="filter">Filter by Status
                <option disabled value="">-- Select Status --</option>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
                <option value="Pending">Pending</option>
            </select>
            
            <table className="table table-hover">
                <thead> 
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>CreatedTime</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {filterdata?.length>0?filterdata?.map((val,index)=>(
                        
                        <tr key={val._id}>
                            
                            <td>{val.title}</td>
                            <td>{val.description}</td>
                            <td>{val.status}</td>
                            <td>{new Date(val.createdAt).toLocaleString()}</td>
                            <td><button className="btn btn-outline-success" onClick={()=>showUpdateData(index,val._id)}>Update</button></td>
                            <td><button className="btn btn-outline-danger" onClick={()=>deleteData(val._id)}>Delete</button></td>
                        </tr>
                    )):<div>NO Data</div>}
                </tbody>
            </table>
        </div></div>
        </>
    )
}
export default Task;