const logo = document.getElementById("avoyy-logo");
const lookingDiv = document.getElementById("looking");
const givingDiv = document.getElementById("giving");
let lookingClicked = false;
let givingClicked = false;
let clicked = false;

let receiveClicked = false;
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
      <button id="receive" onclick="manyRipeReceive()">To Receive</button>
      <button id="exchange" onclick="manyRipeLookingExchange()">To Exchange</button>`;

    lookingDiv.appendChild(btnDiv);
    btnDiv.classList.add("fade-in");
    btnDiv.classList.add("buttons-beside");

  } else if (givingClicked) {
    btnDiv.innerHTML = `
      <button id="give" onclick="manyRipeGive()">To Give</button>
      <button id="exchange" onclick="manyRipeGivingExchange()">To Exchange</button>`;
      
    givingDiv.appendChild(btnDiv);
    btnDiv.classList.add("fade-in");
    btnDiv.classList.add("buttons-beside");
  }

}


function manyRipeReceive() {
  document.getElementById("exchange").style.display = "none";

  receiveHowMany();
  receiveRipe();
}

function manyRipeLookingExchange() {
  document.getElementById("receive").style.display = "none";

  receiveHowMany();
  receiveRipe();
}

function manyRipeGive() {
  document.getElementById("exchange").style.display = "none";

  giveHowMany();
  giveRipe();
}

function manyRipeGivingExchange() {
  document.getElementById("give").style.display = "none";

  giveHowMany();
  giveRipe();
}


function receiveHowMany() {

  if (!receiveClicked) {

    const topButton = document.getElementById("looking");

    //label for How Many
    const label1 = document.createElement("p");
    label1.setAttribute("id", "receiveHowMany");
    label1.innerText = "How Many?";
    topButton.appendChild(label1);
    
    // Decrement Button
    const decrement = document.createElement("input");
    decrement.setAttribute("id", "decrement");
    decrement.setAttribute("type", "button");
    decrement.setAttribute("value", "-");
    decrement.setAttribute("onclick", "decrement()");
    topButton.appendChild(decrement);

    const number = document.createElement("input");
    number.setAttribute("id", "number");
    number.setAttribute("value", 0);
    topButton.appendChild(number);

    // Increment Button
    const increment = document.createElement("input");
    decrement.setAttribute("id", "increment");
    increment.setAttribute("type", "button");
    increment.setAttribute("value", "+");
    increment.setAttribute("onclick", "increment()");
    topButton.appendChild(increment);

    receiveClicked = true;
  }

}


function giveHowMany() {

  if (!giveClicked) {

    const topButton = document.getElementById("giving");

      //label for How Many
    const label1 = document.createElement("p");
    label1.setAttribute("id", "giveHowMany");
    label1.innerText = "How Many?";
    topButton.appendChild(label1);
    
    // Decrement Button
    const decrement = document.createElement("input");
    decrement.setAttribute("id", "decrement");
    decrement.setAttribute("type", "button");
    decrement.setAttribute("value", "-");
    decrement.setAttribute("onclick", "decrement()");
    topButton.appendChild(decrement);

    const number = document.createElement("input");
    number.setAttribute("id", "number");
    number.setAttribute("value", 0);
    topButton.appendChild(number);

    // Increment Button
    const increment = document.createElement("input");
    decrement.setAttribute("id", "increment");
    increment.setAttribute("type", "button");
    increment.setAttribute("value", "+");
    increment.setAttribute("onclick", "increment()");
    topButton.appendChild(increment);

    giveClicked = true;
  }

}

function increment() {
  var num = document.getElementById("number").value;
  num++;
  document.getElementById("number").value = num;
}

function decrement() {
  
  var num = document.getElementById("number").value;
  if (num > 0) {
    num--;
    document.getElementById("number").value = num; 
  }
}

function giveRipe() {

  const topButton = document.getElementById("giving");

  //label for decrement
  const label2 = document.createElement("p");
  label2.setAttribute("id", "receiveRipe");
  label2.innerText = "How Ripe?";
  topButton.appendChild(label2);

  const unripe = document.createElement("button");
  unripe.setAttribute("id", "unripe");
  unripe.setAttribute("class", "buttons-beside");
  unripe.innerText = "Unripe";
  topButton.appendChild(unripe);

  const ripe = document.createElement("button");
  ripe.setAttribute("id", "ripe");
  ripe.setAttribute("class", "buttons-beside");
  ripe.innerText = "Ripe";
  unripe.appendChild(ripe);

  const overripe = document.createElement("button");
  overripe.setAttribute("id", "ripe");
  overripe.setAttribute("class", "buttons-beside");
  overripe.innerText = "Overripe";
  ripe.appendChild(overripe);
  
}

// receiveRipe() {

// }



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


