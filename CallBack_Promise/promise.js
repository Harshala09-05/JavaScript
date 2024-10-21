console.log("This is promise");
let prom1 = new Promise((resolve,reject)=>{

    let a = Math.random();
    if(a < 0.5){
        reject("Sorry I am not done");
    }
    setTimeout(()=>{
        console.log("Yes I am done");
        resolve("Harry")
        
    },3000);
})
let prom2 = new Promise((resolve,reject)=>{

    let a = Math.random();
    if(a < 0.5){
        reject("Sorry I am not done");
    }
    setTimeout(()=>{
        console.log("Yes I am done");
        resolve("Harry2")
        
    },3000);
})

prom1.then((value)=>{
    console.log(value);
})

let p3 = Promise.race([prom1,prom2])
p3.then((value)=>{
    console.log(value);
    
}).catch(err=>{
    console.log(err);
    
})