let std = {
    full_name:"amit dangi",
    address:"Indore"
}

let std2 = {
    full_name1:"abhi dangi",
    address1:"Indore"
}

Object.assign(std,std2)
console.log(std);

console.log(std.hasOwnProperty("address"));
 



let person = new Object();
person.full_name = "Abhi"
person.address="Indore"
console.log(person.hasOwnProperty("full_name"));
 
function fun_obj(num1,num2){
    this.num1=num1;
    this.num2=num2
   
}

let a1 = new fun_obj(2,5)
console.log(a1);

console.log("------- create() -------");

let tushar_school_info = {
    school_name:"PPS",
    board_name:"CBSE",
    address:"Indore"
}
 console.log(tushar_school_info);
 delete tushar_school_info.address;

 console.log(tushar_school_info);

console.log("-------- call apply ---------");

let call_practice = {
  
    info:function(mobile_name){
        console.log(`Name ${mobile_name} : Price ${this.price} : Discount ${this.discount}%`);
        
    }
}
let mobile_info={   
    price:45000,
    discount:2
}
// call_practice.info.call(mobile_info,1,2,34);
     call_practice.info.apply(mobile_info,[  1,2,34]);

     try{
           let n = null
           console.log(n[1]);   
           
     }catch(e){
               console.log(e);
               
     }



     class Student{
        constructor(name,rollnumber){
            this.name=name;
            this.rollnumber=rollnumber
        }
         meeting_message(){
            console.log(`${this.name} your meeting time is 4pm`);
            
         }
        static check_in_time(){
            console.log("Check In Time 10am");
            
         }
     }
     let s1 = new Student("Atul");
     s1.meeting_message();
     Student.check_in_time();
 console.log("--------------------------");

 class Login{
    constructor(name,password){
        this.name=name;
        this.password=password
    }
    set profile(name){
        
             this.name=name
    }   
       
    get profile(){
        console.log("Your profile ",this.name);
        
    }
 }
 
 let s = new Login("abhi","1234567")
 console.log(s);
 
 let p = new Promise((resolve,reject)=>{
    if(true){
        resolve("Done")
    }else{
        reject("failed")
    }
 })

 p.then(result=>{
    console.log(result);
    
 }).catch(e=>{
    console.log(e);
    
 })

 let p2 = new Promise((resolve,reject)=>{
    if(true){
        resolve("Done")
    }else{
        reject("failed")
    }
 })

 p2.then(result=>{
    console.log(result);
    
 }).catch(e=>{
    console.log(e);
    
 })

 let p3 = new Promise((resolve,reject)=>{
    if(true){
        resolve("Done")
    }else{
        reject("failed")
    }
 })

 p3.then(result=>{
    console.log(result);
    
 }).catch(e=>{
    console.log(e);
    
 })

 let all = Promise.all([p,p2,p3]);
 console.log("all = ",all);//all promise is resolve if any one is reject so whole promise is rejected

 let allset = Promise.allSettled([p,p2,p3])
 console.log("allsettled = ",allset);//return all promise if resolve or reject

 let race1 = Promise.race([p,p2,p3])
 console.log("race = ",race1);// resolve or reject return first promise 

 let any1 = Promise.any([p,p2,p3]);
 console.log("any = ",any1);//any one promise is resolve reture promise if all are rejected so give AggregateError
  
 function fetchData(name,password){
    let n="amit"
    let p = "123456"
    return new Promise((res,rej)=>{
       if(name===n && p===password){
        res("Your profile")
       }else{
        rej("Invalid credintials")
       }
    })
 }
 fetchData("amit","123456").then(res=>{
    console.log(res);
    
 }).catch(e=>{
    console.log(e);
    
 })

 let async_practice = async()=>{
    try {
        let res = await fetch("https://dummyjson.com/carts");
         let d = await res.json()
            console.log(d);
            
          
    } catch (error) {
        console.log("error = ",error);
        
    }
 }

 async_practice()
