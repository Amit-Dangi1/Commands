
let seat_container = document.getElementById("seat-container")
let movie_select = document.getElementById("movieselect")
let theater_show = document.getElementById("theatershow");
let theaterselect = document.getElementById("theaterselect")


movie_select.addEventListener("change",(e)=>{
  let movie_name= e.target.value;
  if(movie_name){
    console.log("movie name = ",movie_name);

    theater_show.classList.remove("d-none")
     
    
  }else{
    console.log("empty name = ",movie_name);
    seat_container.innerHTML = "";  
    theaterselect.value=""
    theater_show.classList.add("d-none")
    let confirmbtn = document.getElementById("confirm");
    confirmbtn.classList.add("d-none")
    let price_show = document.getElementById("price")
    price_show.classList.add("d-none")

  }

    
})  

console.log("start code change");



let selectedSeats = new Set();
let price = 250;
theaterselect.addEventListener("change",(e)=>{
let theater_name = e.target.value
      selectedSeats.clear();
      updateprice();
      generateseats(theater_name)
})

const theaterSeats = {

  PVR: new Set(),
  INOX: new Set(),
  Cinepolis: new Set(),
};

 function generateseats(theater) {
  let rows = ["A", "B", "C", "D", "E", "F"];
  let cols = [1,2,3,4,5,6];
  seat_container.innerHTML = "";  
  
  if(theater){
  rows.forEach((val) => {
    const rowdiv = document.createElement("div");
    rowdiv.classList.add("d-flex", "mb-2", "gap-1", "w-50"); 

    for (let i of cols) { 
      let seatname = `${val}${i}`;
      let createbtn = document.createElement("button");
      createbtn.classList.add("btn","btn-outline-primary","flex-fill")
      createbtn.textContent=seatname
      

      if(theaterSeats[theater]?.has(seatname)) {
        createbtn.disabled = true;
        createbtn.classList.add("btn","btn-secondary");
        createbtn.classList.remove("btn","btn-outline-primary");
      }   

      createbtn.addEventListener("click", () => {
        if (selectedSeats.has(seatname)) {
          selectedSeats.delete(seatname);
          createbtn.classList.add("btn","btn-outline-primary");
          createbtn.classList.remove("btn","btn-primary")

        }  else if(selectedSeats.size>3){
          //createbtn.disabled=true
          selectedSeats.delete(seatname);
          alert("maximum 4 seats can be booked")
        } 
         else  {
          selectedSeats.add(seatname); 
          createbtn.classList.remove("btn","btn-outline-primary");
          createbtn.classList.add("btn","btn-primary");
           
        }
       console.log(selectedSeats.size);
       updateprice();
      });
         
      rowdiv.appendChild(createbtn);
    }

    seat_container.appendChild(rowdiv);
  });
     


}else{
   let confirmbtn = document.getElementById("confirm");
 confirmbtn.classList.add("d-none")
 let price_show = document.getElementById("price")
 price_show.classList.add("d-none")
}

}
//  function dis(s,btn){
// console.log("s = ",s);
// console.log("btn = ",btn);
// if(s>4){
  
//   btn.disabled=true;

// }

//  }
 


 let confirmbtn = document.getElementById("confirm");
 confirmbtn.classList.add("d-none")
 let price_show = document.getElementById("price")
 
function updateprice(){
 let total = selectedSeats.size*price
 console.log(total);

 if(total){
   price_show.classList.remove("d-none")
   price_show.innerText=`Total Rs : ${total}`
   confirmbtn.classList.remove("d-none")
   confirmbtn.disabled=false;
 }else{
   confirmbtn.classList.remove("d-none")
   confirmbtn.disabled=true
   price_show.innerText=`Total Rs : ${total}`
}
return total;
}


 
   confirmbtn.addEventListener("click",()=>{
   if(selectedSeats.size==0){
     alert("Please select atleast one movie")
   }else{
     let theater_select_name = theaterselect.value
     console.log(theater_select_name);
     
     selectedSeats.forEach((seat)=>{
     theaterSeats[theater_select_name].add(seat)
    
   }) 
   let seat_display = [...selectedSeats].join(",")
       alert(` Booking Confirmed!\n Seats: ${seat_display}\nTotal Rs : ${updateprice()}`)
   selectedSeats.clear()
   updateprice();
   generateseats(theater_select_name)
   }
   })