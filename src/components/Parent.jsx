import { useState } from "react";
import Child from "./Child";
import { createContext } from "react";
const ChildData = createContext();


 function Parent(){
  const [ profile, setprofile ] = useState({name:"",address:""});
  const [ data, setdata ] = useState([]);
  const [ index, setindex] = useState(null);
  const [ filterdata, setfilterdata] = useState([...data]);

  const handleSubmit = (e) => {
    try{
        e.preventDefault();
        if(index!=null){
              data[index] = profile;
              setindex(null);
        }else{
            setdata([...data,profile]);
            setfilterdata([...data])
        }
        
        setprofile({name:"",address:""});
         
    }catch(error){
        console.log(error);
        
    }
  }

  return(
        <>
        <div className="container mt-5">
            <form  className="shadow-lg p-5 w-50 rounded-3" onSubmit={handleSubmit}>
             <label htmlFor="">Name</label>
              <input className="form-control" required value={profile.name} onChange={(e)=>setprofile({...profile,name:e.target.value})} type="text" name="" id="" placeholder="Enter Name"/>
              <br /><label htmlFor="">Address</label>
              <input className="form-control" required value={profile.address} onChange={(e)=>setprofile({...profile,address:e.target.value})} type="text" placeholder="Enter Address"/>
              <button className="btn btn-primary mt-2" type="submit">{index!=null?"Update":"Add"}</button>
            </form>
        </div>
             <ChildData value={{ data, setdata, profile, setprofile, index, setindex,filterdata, setfilterdata }}>
                <Child/>
             </ChildData>
         </>
    )


}
export default Parent;
export {ChildData};