let button = document.getElementById("btn"); 
button.addEventListener("click",()=>{
    // alert("Hey I am clicked");
    document.querySelector(".box").innerHTML = "<b>yayy you are clicked</b> Enjoy your click! "
})
button.addEventListener("contextmenu",()=>{
    alert("Don't Right Click please")
})
document.addEventListener("keydown",(e)=>{
   console.log(e);
   
})