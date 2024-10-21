
function createCard(title,cName,views,monthsOld,duration,thumbnail) {
    let viewStr;
    if(views < 10000000){
         viewStr = views/1000 + "K";
    }
    else if(views > 10000000){
         viewStr = views/1000000 + "M";
    }
    else{

    }
    let html = `<div class="card">
        <div class="image">
          <img
            src="${thumbnail}"
            alt="img"
          />
           <div class="capsule">${duration}</div>
        </div>
        <div class="text">
          <h1>${title}</h1>
          <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
        </div>
      </div>`

      document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

document.addEventListener("DOMContentLoaded", function() {
createCard("Introduction to Backend | Sigma Web Dev video #2","card","10,000","2 months","31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDxR2Iy74ubFQvvf2uP0BepdJ_GNw");
createCard("Introduction to Backend | Sigma Web Dev video #2","card","10,000","2 months","31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDxR2Iy74ubFQvvf2uP0BepdJ_GNw");
});