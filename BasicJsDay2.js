
let city_name = ["Indore","Noida","Pune","Delhi"]

for(let i of city_name){
    console.log(i);
    
}
console.log("-------------------");

for(let i in city_name){
    console.log(i);
    
}


console.log(city_name);

city_name.push("Ujjain","Patna");
city_name.pop()
city_name.unshift("Luknow","New Delhi");
city_name.shift();
city_name.splice(1,1);//start from  0
let update_city = city_name.slice(1,3);
console.log("reverse = ",city_name.reverse());

console.log(city_name);

console.log(city_name.sort());
console.log(city_name.includes("Ujjain"));
console.log(city_name.indexOf("New Delhi"));
console.log(city_name.lastIndexOf("Luknow"));
city_name.reverse()
console.log(city_name);

let myfun = ((val,i)=>{
    return val=="New Delhi";
})
console.log(city_name.findIndex(myfun));
 let mapexample = city_name.map((val)=>{
    return "City = "+val
 })
 console.log(mapexample);
 let filter_example = city_name.filter((val)=>{
    return val.endsWith("i");
 })
 console.log(filter_example);
 
 let is_all_match = city_name.every((val)=>{
    return val.endsWith("i")
 })


 let is_one_match = city_name.some((val)=>{
    return val.endsWith("i")
 })
 console.log("All match = ",is_all_match);
 console.log("Atleast one match = ",is_one_match);
 
 update_city.fill("Delhi");
 console.log(update_city);
 let merge_city = city_name.concat(update_city);
 console.log(merge_city);

 let find_example = city_name.find((val,index)=>{
    return index>2;
 })

 console.log("original = ",city_name);
 
 console.log(find_example);
 console.log("join = ",city_name.join("||"));


 
 
 
 let personal_info={
    name:"Amit",
    address:"Indore",
    contact:"6265784125"
}


for(let key in personal_info){
    console.log(personal_info[key]);
    
}
console.log("------------------");

for(let i in personal_info){
    console.log(i);
    
}

console.log("isArray = ",Array.isArray(city_name));

console.log("by new Object()");

let student = new Object()
student.name="Abhi"
student.contact = "Pune"

console.log("student data = ",student);


console.log("constructor function");

function Emp(name,city) {
    this.name=name;
    this.city=city;
    
}
const e1 = new Emp("Atul","Noida");
const e2 = new Emp("Tushar","Indore");
console.log(e1);
console.log(e2);

console.log("----------- Function -----------");

console.log("function statement");
cal();
function cal(a,b) {
    return a+b;
    
}
cal(10,20);

let newf1 = function (params) {
    console.log("function expression");
    
    
}
newf1();
console.log("Arrow expression");
//divi()// divi is not a function
var divi = (a,b)=>{
    return a/b;
}
//new_divi(50,5);// can not access before initialization

let new_divi = (a,b)=>{
    return a/b;
}
new_divi(50,5);

(
    
    function(){

        console.log("Immediately Invoke Function Expression")
    }
)()

let result = (num1,num2,callback)=>{
let sum = num1+num2;
callback(sum);


}
function display(s){
    console.log(s);
    
}
result(10,20,display)
 
async function name(api) {
    let result = await fetch(api);
    let data = JSON.parse(  )
    
}

 function vowel_count(n){
    let vowel=[];
    let constant = [];
  for(let char of n){
  
if(char!=" "){
    if(char=="a"|| char=="i" || char=="o" || char=="u" || char=="e"){
      vowel.push(char);
    }else{
      constant.push(char)
    }
  }  }
  console.log("Vowel = ",vowel);
  console.log("Constant = ",constant);
  }
  vowel_count("amit dangi")
let arrr = ["Indore","Pune","Delhi"]; 
 for(let i in arrr){
  console.log(i)
} 

for(let i in arrr){
  console.log(arrr[i])
} 
for(let i in arrr){
  console.log(arrr[i])
} 
 






 


