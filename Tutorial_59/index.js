/* create faulty calculator using js
It takes two numbers from user
It performs wrong operations as follows:
+ ------> -
* ------> + 
- ------> /
/ ------> **

It performs wrong operations 10% of items
*/
// let obj ={
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**"
// }
// function faultyCalculator(num1, num2, operator) {
//     // Generate a random number between 1 and 10
//     const randomChance = Math.random();

//     // 10% chance to perform a faulty operation
//     if (randomChance > 0.1) {
//         switch (operator) {
//             case '+':
//                 return num1 - num2; // Faulty operation
//             case '*':
//                 return num1 + num2; // Faulty operation
//             case '-':
//                 return num1 / num2; // Faulty operation
//             case '/':
//                 return num1 ** num2; // Faulty operation
//             default:
//                 return "Invalid operator";
//         }
//                operator=obj[operator]
        
//     } else {
//         // Perform correct operation
//         switch (operator) {
//             case '+':
//                 return num1 + num2;
//             case '*':
//                 return num1 * num2;
//             case '-':
//                 return num1 - num2;
//             case '/':
//                 return num1 / num2;
//             default:
//                 return "Invalid operator";
//         }
//     }
// }

// const num1 = parseFloat(prompt("Enter the first number:"));
// const num2 = parseFloat(prompt("Enter the second number:"));
// const operator = prompt("Enter the operation (+, -, *, /):");

// const result = faultyCalculator(num1, num2, operator);
// console.log(`The result is: ${result}`);


let random = Math.random();
console.log(random);
let a = prompt("Enter first number:");
let b = prompt("Enter second number:");
let c = prompt("Enter operator (+, -, *, /):");
let obj ={
        "+": "-",
        "*": "+",
         "-": "/",
         "/": "**"
     }
    
     
     if(random > 0.1){
        alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
        console.log(`The result is ${a} ${c} ${b}`);
       
     }
     else{
        c = obj[c]
        alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
     }