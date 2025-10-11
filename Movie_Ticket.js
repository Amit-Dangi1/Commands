
let seat_container = document.getElementById("seat-container")
let movie_select = document.getElementById("movieselect");


let theater_show = document.getElementById("theatershow");
let theaterselect = document.getElementById("theaterselect")


movie_select.addEventListener("change",(e)=>{
     let movie_name= e.target.value;
     if(movie_name){
        theater_show.classList.remove("d-none")
     }else{
        theater_show.classList.add("d-none")

     }

    
 })
    let selectedSeats = new Set();
    let price = 250;
   theaterselect.addEventListener("change",(e)=>{
    let theater_name = e.target.value
          selectedSeats.clear();
          updateprice()
         generateseats(theater_name)
   })
const theaterSeats = {
  PVR: new Set(),
  INOX: new Set(),
  Cinepolis: new Set(),
};
 function generateseats(theater) {
  let rows = ["A", "B", "C", "D", "E", "F"];
  let cols = 6;
  seat_container.innerHTML = "";  

  rows.forEach((rowVal) => {
   
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("d-flex", "justify-content-center", "mb-2", "gap-2");

    for (let i = 1; i <= cols; i++) { 
      let seatName = `${rowVal}${i}`;

      let createBtn = document.createElement("button");
      createBtn.textContent = seatName;
      createBtn.classList.add("btn", "btn-outline-success");

      if(theaterSeats[theater].has(seatName)){
        createBtn.disabled=true;
        createBtn.classList.remove("btn","btn-outline-success");
        createBtn.classList.add("btn","btn-secondary");
      }
      createBtn.addEventListener("click",()=>{
        if(selectedSeats.has(seatName)){
            selectedSeats.delete(seatName)
            createBtn.classList.remove("btn","btn-success");
            createBtn.classList.add("btn","btn-outline-success")
        }else{
            selectedSeats.add(seatName);
            createBtn.classList.remove("btn","btn-outline-success");
            createBtn.classList.add("btn","btn-success")
        }
        updateprice()
      })
 
      rowDiv.appendChild(createBtn);
    }

     seat_container.appendChild(rowDiv);
  });
}



function updateprice(){
let total = selectedSeats.size*price
console.log(total);

return total;
}