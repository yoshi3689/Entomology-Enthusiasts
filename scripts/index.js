const logo = document.getElementById("avoyy-logo");
const lookingDiv = document.getElementById("looking");
const givingDiv = document.getElementById("giving");
let lookingClicked = false;
let givingClicked = false;
let clicked = false;

// expand the div element cliecked across the page



// Giving path
givingDiv.addEventListener("click", () => {
  givingDiv.classList.add("div-fill");
  logo.classList.add("logo-left");
  givingDiv.addEventListener("animationend",
  () => {
    givingDiv.classList.add("fullscreen");
  });
  
  if (!clicked) {
    givingClicked = true;
    insertButtons();
    clicked = true;
  }
  // givingDiv.appendChild(insertButtons());
  
})


// Looking path
lookingDiv.addEventListener("click", () => {
  lookingDiv.classList.add("div-fill");
  lookingDiv.addEventListener("animationend",
  () => {
    lookingDiv.classList.add("fullscreen");
  });

  if (!clicked) {
    lookingClicked = true;
    insertButtons();
    clicked = true;
  }
  // insertButtons();
})

// crates buttons and insert them into a div clicked
function insertButtons() {
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  btn1.innerText = "just receive";
  btn2.innerText = "exchange";

  if (lookingClicked) {
    lookingDiv.appendChild(btn1);
    lookingDiv.appendChild(btn2);

  } else if (givingClicked) {
    givingDiv.appendChild(btn1);
    givingDiv.appendChild(btn2);
  }

}

// const expandDiv = e => {

//   if (e.target.tagName === "P") {
//     e.target.parentNode.setAttribute("class", "div-toggle");
//   }
//   else if (e.target.tagName === "DIV") {
//     e.target.setAttribute("class", "div-toggle");
//   }
// }

// const receiveExchange = e => {
//   console.log(e);
//   const receive = document.createElement("p");
//   const exchange = document.createElement("p");
// }

// lookingDiv.addEventListener("click", expandDiv);
// lookingDiv.addEventListener("click", receiveExchange);

// givingDiv.addEventListener("click", expandDiv);


