let a = prompt("Enter a number");

let b = prompt("Enter second number");
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed");
}
let sum = parseInt(a) + parseInt(b);


try {
    console.log("The sum is: " + sum*X);
} catch (error) {
    console.log("error aa gaya");
    
}
