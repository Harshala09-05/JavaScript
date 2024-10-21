let arr = [1,2,3,4,7,8,9];
arr[0]= 5;
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);    
// console.log(arr[2]);
console.log(arr.toString());
console.log(arr.join(" and "));
console.log(arr.pop());//removes last element
console.log(arr);
console.log(arr.push(10));
console.log(arr);
console.log(arr.shift());//removes first element
console.log(arr);
console.log(arr.unshift("Harshu"));
console.log(arr);
//shift is similar as pop
//unshift is similar as push
console.log(delete arr[0]);

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [9,8,7]
console.log(a1.concat(a2,a3));

//loop for array
let a = [1,93,5,6,88]
for(let i=0;i<a.length;i++){
    const ele = a[i];
    console.log(ele);
    
}

//using forEach
a.forEach((val,index,arr) => {
  console.log(val,index,arr);
    
});

const num = [1,2,3,4,5]
num.forEach((val,index,arr) => {
    console.log(val,index,arr);
    
})
//using for in
let obj ={
    a: 1,
    b: 2,
    c: 3
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element);
        
        
    }
}

//for of
for (const iterator of a) {
    console.log(iterator);
    
}


