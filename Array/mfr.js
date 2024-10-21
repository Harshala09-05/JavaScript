//map,filter and reduce

let arr = [1,9,27,23,25,10]
// let newArray =[];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArray.push(element*element);
    
// }
let newArray = arr.map((e)=>{
    return e * e;
})
console.log(newArray);

//filter
const greater =(e)=>{
    if(e>10){
        return true;    
    }
    return false;
}
console.log(arr.filter(greater));


//reduce
 let arr2 = [1,2,3,4,5,6]
 const red =(a,b)=>{
    return a+b;
 }
 console.log(arr2.reduce(red));
 

 //Array From
console.log(Array.from("Harshu"));

//
Array.from("Harshu");


//Practice set
//1
// let no_ele = prompt("Enter number of elements");

// let newAr= [];
// for(let i =0;i<no_ele;i++){
//     let userInput = prompt("Enter a number");
//     const element= userInput;
//     newAr.push(element);
// }
// console.log(newAr);


//2

let userInput;
let newAr= [];

for(let i =0;i>=0;i++){
    userInput = prompt("Enter a number");
    if (userInput === '0'){
     break;
       }

        newAr.push(userInput);
        console.log(newAr);
 
    }


    //5
    
