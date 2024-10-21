console.log("This is string");
let a = "hello";

console.log(a);
console.log(a[0]);

console.log(a.length);

let real_name = "Harshu";
let friend = "Raj";
console.log("My name is " + real_name + " and my friend's name is " + friend);
console.log(`My name is ${real_name} and my friend's name is ${friend}`);

let b = 'Shiv'
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(1,4));
console.log(b.slice(1));
console.log(b.replace("Sh","Raj"));
console.log(b.concat(a));
//charAt()
//indexOf()

console.log("har\".length");

console.log(b.startsWith("Sh"));
console.log(b.endsWith("Sh"));

let c = "Please give Rs 1000";
console.log(c.includes("Rs"));


// let amount = c.slice(c.indexOf("Rs") + 3);
// console.log(amount);
// console.log(c.indexOf("Rs") + 3);
// console.log(c.slice(15))

console.log(c.replace("a","s"));
