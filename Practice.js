let bt = document.getElementById("btn")
bt.addEventListener("click",()=>{
    alert("Clcik")
})

let color_change = document.getElementById("color-change")
color_change.addEventListener("mouseover",()=>{
    color_change.style.color="red"
    color_change.style.background="blue"

})



let a = 50
let b = 60

let c = a+b;
console.log("=========== ASSINMENT ===========");

console.log("Add = ",c);
console.log("Substraction = ",a-b);
console.log("Multiply = ",a*b);
console.log("Division = ",a/b);
console.log("Exponentiation = ",a**b);

let amit_age = 22;
let abhi_age = 24

console.log("=========== COMPARISON ===========");

console.log("amit>abhi = ",amit_age>abhi_age);
console.log("amit<abhi = ",amit_age<abhi_age);
console.log("amit==abhi = ",amit_age==abhi_age);
console.log("amit===abhi = ",amit_age===abhi_age);
console.log("amit!=abhi = ",amit_age!=abhi_age);
console.log("amit<=abhi = ",amit_age<=abhi_age);
console.log("amit>=abhi = ",amit_age>=abhi_age);

console.log("=========== LOGICAL ===========");

!amit_age && console.log("&&");
!amit_age || console.log("||");

console.log("=========== Conditional Statements ===========");

if(amit_age>=18){
    console.log("Righ to vote");
    
}else {
    console.log("Not eligible for vote");
    
}

let marks=86;
if(marks<33){
    console.log("Failed");
    
}else if(marks>33 && marks<=45){
    console.log("D");
    
}else if(marks>45 && marks<=55){
    console.log("C");
    
}else if(marks>55 && marks<=65){
    console.log("B");
    
}else if(marks>65 && marks<=85){
    console.log("A");
    
}else if(marks>85 && marks<=100){
    console.log("A+");
    
}

console.log("Switch case");




    



