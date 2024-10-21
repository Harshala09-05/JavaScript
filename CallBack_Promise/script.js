console.log("Harshu ,You can do it");
console.log("Welcome to the future");

setTimeout(()=>{
    console.log("I am inside settimeout");
    
}, 2000);

console.log("The End");

const fn= () => {
  console.log(arg);
  fn();
  
}

const callback = (arg,fn) => {
  console.log(arg);
  
}

const loadScript = (src,callback) => {
 let sc = document.createElement("script");
 sc.src = src;
 sc.onload = callback("Harshu");
 document.head.append(sc);

}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback);