console.log("Hello World");
// document.body.firstElementChild
// document.body.firstElementChild.childNodes
// document.body.firstElementChild.children


// let boxes = document.getElementsByClassName("box")
// console.log(boxes);
// boxes[2].style.backgroundColor = "red"

document.getElementsByClassName("box").style.backgroundColor = "blue"
document.querySelector(".box").style.backgroundColor = "green"

document.querySelectorAll(".box").forEach(e =>{
    console.log(e);
})