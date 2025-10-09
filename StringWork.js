let str = "software developer"

console.log(str.at(-1));//support negative index if index not found return "undifiend"
console.log(str.charAt(20));// does not support negative index if index not found return "empty string"

let city_name = ["Indore","Pune"]
let new_city_name = ["Indore","Delhi","Ujjain"];

 
console.log(city_name);

 for(let i in new_city_name){
    console.log(city_name.indexOf(new_city_name[i]));
    
    if(city_name.indexOf(new_city_name[i])){
        city_name.push(new_city_name[i]);
    }
 }

console.log(city_name);
console.log(str);
console.log(str.at(2));

console.log(str.charCodeAt(1))
console.log(str.concat(" It Field"))
console.log(str.endsWith("r"));
console.log(str.startsWith("r"));
console.log(str.includes("Developer"));//case 
console.log(str.indexOf("developer"));
console.log(str.lastIndexOf("e"));
console.log(str.length);
console.log(str.substring(-3,0));//negative number considered as 0 
console.log(str.substring(2,-3));// if second index is negative so convert into 0 and swap the number
                       //(0,2)swapping
console.log("----- slice ------");
                       
console.log(str.slice(0,2));
console.log(str.slice(0,0));
console.log(str.slice(0,-2));
console.log(str.slice(-4,-1));
console.log(str.slice(2,0));//no swapping
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.toLocaleLowerCase());
console.log(str.toLocaleUpperCase());
console.log("spain rail plAin".match(/ain/gi));
console.log("padEnd = ",str.padEnd(2,"$"))
console.log(str.padStart(1,"@"))
console.log(str.trimStart());
 let nstr = str.repeat(2)
 console.log(nstr);
 console.log(str.replace("s","S"));
 console.log(str.replaceAll("e","E"));
 
 let num = 14254.9154;
 console.log(Math.round(num));
 console.log(Math.ceil(num));
 console.log(Math.floor(num));
 console.log(Math.pow(3,2));
 console.log(Math.abs(-78.2));
 console.log(Math.round(Math.random()*40));
 console.log(Math.round(4.5));
 console.log(Math.round(4.4));
 console.log(Math.trunc(4.9));

 let d1 = new Date();
 console.log(d1);
 
 console.log(d1.getDate());
 console.log(d1.getDay());
 console.log(d1.getFullYear());
 console.log(d1.getHours()); 
 console.log(d1.getMilliseconds()); 
 console.log(d1.getMinutes()); 
 console.log(d1.getMonth()); 
 console.log(d1.getSeconds()); 
 console.log(d1.getTime()); 
 console.log(d1.getTimezoneOffset()); 
 console.log(d1.getVarDate); 

 
 console.log(d1.toUTCString());
 let set_date = new Date("2025-10-20");
 console.log(set_date);
 let nd = Date.now();
 console.log(nd);
 console.log(Date(nd));
 console.log(d1.getTimezoneOffset()/60);

 console.log();
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


                       

 


