
let arr = []
let obj = {
    name:"",
    contact:""
}
let name_input = document.getElementById("name");

let contact_input = document.getElementById("contact");
let contact_check = document.getElementById("contact_check")

let name_check = document.getElementById("name_check")
 
let name_b=false;
let contact_b=false;
contact_input.addEventListener("keyup",(e)=>{
    
       if(e.target.value.length==10 && !isNaN(e.target.value)){
        contact_input.value=e.target.value;
          contact_check.innerText=""  
          contact_b=true
        
       }else{

        contact_check.innerText="Enter Valid Mobile number"
          contact_check.style.color="red"   
          contact_b=false     

       }
});
 




 if(name_input.value.length==0){

    name_b=false
}else{
    
    name_b=true
}



let finish = document.getElementById("sub")
finish.addEventListener("click",()=>{
  
if(contact_b){
    obj.name=name_input.value
    obj.contact=contact_input.value
     console.log("if = ",obj);
     
    arr.push(obj)
    
    display(arr)
     
}else{ 
    console.log(obj);
    
}

    
})
let container = document.getElementById("container");
let parent_con = document.body.appendChild(container)
function display(arr) {
    console.log(arr);
     parent_con.innerHTML = ""; 
    arr.map((val,id)=>{
        console.log(val);
        
        let list = document.createElement("ul")
        let n = document.createElement("li")
        let c = document.createElement("li")
        let b = document.createElement("li")
        let delete_btn = document.createElement("button")
        delete_btn.setAttribute("class","db");

            delete_btn.innerText="Remove"
            delete_btn.addEventListener("click",()=>{
                 delete_b(id)
            })
            delete_btn.style.backgroundColor="red"
            delete_btn.style.color="white"
            delete_btn.style.borderRadius="10px"
            delete_btn.style.padding="5px"
        n.style.display="inline-block"
        n.style.margin="5px"
        c.style.display="inline-block"
        c.style.margin="5px"
        b.style.display="inline-block"
        b.style.margin="5px"
        
        n.innerText = val.name
        c.innerText = val.contact
        parent_con.appendChild(list)
        list.appendChild(n)
        list.appendChild(c)
        list.appendChild(b)
        b.appendChild(delete_btn)
        
    })
    
}
function delete_b(id){
    let ne = arr.filter((val,index)=>id!=index)
     arr = [...ne]
     display(arr)
}
