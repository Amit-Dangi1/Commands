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
true?console.log("It is Done"):console.log("Somthing wen wrong");
;

console.log("Switch case");



let city_number = 1;

switch(city_number){
    case 0:console.log("Indore");
    break;
    case 1:console.log("Bhopal");
    break;
    case 1:console.log("Rewa");
    break;

    case 2:console.log("Noida");
    break;
    case 3:console.log("Pune");
    break;

    case 4:console.log("Delhi");
    break;
    case 5:console.log("Chennai");
    break;
    default:console.log("Bangluru");
    
    
}

{

}
      let a1 = 0;  
let na = "5"
let n2 = 5
console.log(++a1);
console.log(a1++);
console.log(null==0);
console.log("5 && 10 = ",5 && 10);
console.log("0 || 10 = ",0 || 10);

console.log(0 && 5);

n2>=18?console.log("Right to vote"):console.log("not eligible ");




switch({address:"amit"}){
    case this.address:console.log("amit dangi");
    break;
    case this.address:console.log("Indore");
    break;
    default:console.log("not object found");

    
}

