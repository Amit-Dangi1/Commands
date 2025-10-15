import { useEffect, useState } from "react";

function Carts(){

    let[data,setdata] = useState([]);

   async function getData(){
    try {
         let res = await fetch("https://dummyjson.com/products");
         let d = await res.json();
         console.log(d.products);
         setdata(d.products)
         
    } catch (error) {
        console.log(error);
        
    }
   }
   useEffect(()=>{
    getData();
   },[])

    return(
        <>
        <div className="container-fluid bg-dark p-3"></div>

<div className="container mt-3">
<h3>Products</h3>
<div className="row">
    {data?.map((val,index)=>(
         <div key={val.id} className="col-lg-4 col-md-4 h-100 p-3 ">
            <div className="shadow rounded-2 p-2">
                <img className="w-100" src={val.thumbnail}/>
                <p className="text-center">{val.title}</p>
                <p><span>Brand:</span> <span className="text-primary">{val.brand}</span></p>
                <p><span>$</span> <span className="text-success">{val.price}</span></p>
            </div>
         </div>
         
    ))}
</div>
</div>
        </>
    )
}
export default Carts;