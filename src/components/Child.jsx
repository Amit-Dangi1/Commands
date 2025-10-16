import React, { useContext, useState } from "react";
import { ChildData } from "./Parent";
 

const Child = () =>{

  const {data,setdata,profile,setprofile,index,setindex,filterdata,setfilterdata} = useContext(ChildData);   
  
 console.log(filterdata);
 
   const deleteData = (i) => {
    let newData = data.filter((val,index)=>{
        return i!=index;
    })
    setdata(newData);
   };

   const updateData = (val ,index) => {
      setprofile(data[index]);
      setindex(index)
   };

    return(
        <>
         <div className="container mt-5">
             <table className="table">
                 <thead>
                     <tr>
                         <th>Name</th>
                         <th>Address</th>
                         <th>Update</th>
                         <th>Delete</th>
                     </tr>
                 </thead>
             <tbody>
                {data.length>0?data?.map((val,index)=>(
                     <tr key={index}>
                        <td>{val.name}</td>
                        <td>{val.address}</td>
                        <td><button className="btn btn-outline-success" onClick={()=>updateData(val,index)} type="button">Update</button></td>
                        <td><button className="btn btn-outline-danger" onClick={()=>deleteData(index)} type="button">Delete</button></td>
                     </tr>
                )):<div className="mt-2">No Data Found</div>}

             </tbody>
            </table>
   </div>
        </>
    )
}
 export default Child;