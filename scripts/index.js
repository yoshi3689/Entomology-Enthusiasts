const logo = document.getElementById("avoyy-logo");
const lookingDiv = document.getElementById("looking");
const givingDiv = document.getElementById("giving");
let lookingClicked = false;
let givingClicked = false;
let clicked = false;
let receiveClicked = false;
let exchangeClicked = false;
let giveClicked = false;

// expand the div element cliecked across the page



// Giving path
givingDiv.addEventListener("click", () => {
  givingDiv.classList.add("div-fill");
  lookingDiv.querySelector("p").classList.add("fade-out");
  logo.classList.add("logo-left");
  givingDiv.addEventListener("animationend",
  () => {
    givingDiv.classList.add("fullscreen");
    logo.style.display = "none";
  });
  
  if (!clicked) {
    givingClicked = true;
    insertButtons();
    clicked = true;
  }
});


// Looking path
lookingDiv.addEventListener("click", () => {
  lookingDiv.classList.add("div-fill");
  givingDiv.querySelector("p").classList.add("fade-out");
  logo.classList.add("logo-right");
  lookingDiv.addEventListener("animationend",
  () => {
    lookingDiv.classList.add("fullscreen");
    logo.style.display = "none";
  });

  if (!clicked) {
    lookingClicked = true;
    insertButtons();
    clicked = true;
  }
});

// crates buttons and insert them into a div clicked
function insertButtons() {
  // const btn1 = document.createElement("button");
  // const btn2 = document.createElement("button");
  // btn1.innerText = "just receive";
  // btn2.innerText = "exchange";
  const btnDiv = document.createElement("div");

  if (lookingClicked) {
    btnDiv.innerHTML = `
      <button class="receive" onclick="manyRipe()">To Receive</button>
      <button class="exchange" onclick="manyRipe()">To Exchange</button>`;

    lookingDiv.appendChild(btnDiv);
    btnDiv.classList.add("fade-in");
    btnDiv.classList.add("buttons-beside");

  } else if (givingClicked) {
    btnDiv.innerHTML = `
      <button class="give" onclick="manyRipe()">To Give</button>
      <button class="exchange" onclick="manyRipe()">To Exchange</button>`;
      
    givingDiv.appendChild(btnDiv);
    btnDiv.classList.add("fade-in");
    btnDiv.classList.add("buttons-beside");
  }

}

function manyRipe() {

  if (!receiveClicked) {
    receiveClicked = true;
        

  }

  document.getElementsByClassName();

  howMany();
  ripe();
}

function increment() {
  
}

function decrement() {

}


function howMany() {

    //label for How Many
    const label1 = document.createElement("label");
    label1.setAttribute("for", "name");
    label1.setAttribute("value", "How Many?");

  
    // Increment Button
    const increment = document.createElement("input");
    increment.setAttribute("type", "button");
    increment.setAttribute("value", "+");
    increment.setAttribute("onclick", "increment()");

    
    // Decrement Button
    const decrement = document.createElement("input")
    decrement.setAttribute("type", "button");
    decrement.setAttribute("value", "-");
    decrement.setAttribute("onclick", "decrement()");

}

function ripe() {

  //label for decrement
  const label2 = document.createElement("label");
  label2.setAttribute("for", "name");
  label2.setAttribute("value", "How Ripe?");

  
    
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


