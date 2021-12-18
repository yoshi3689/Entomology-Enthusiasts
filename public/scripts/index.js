const logo = document.getElementById("avoyy-logo");
const lookingDiv = document.getElementById("looking");
const givingDiv = document.getElementById("giving");
let lookingClicked = false;
let givingClicked = false;
let clicked = false;

let receiveClicked = false;
let giveClicked = false;
let submitted = false;

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
      <button id="receive" onclick=manyRipeReceive()>To Receive</button>
      <button id="exchange" onclick=manyRipeLookingExchange()>To Exchange</button>`;

    lookingDiv.appendChild(btnDiv);
    btnDiv.classList.add("fade-in");
    btnDiv.classList.add("buttons-beside");

  } else if (givingClicked) {
    btnDiv.innerHTML = `
      <button id="give" onclick=manyRipeGive()>To Give</button>
      <button id="exchange" onclick=manyRipeGivingExchange()>To Exchange</button>`;
      
    givingDiv.appendChild(btnDiv);
    btnDiv.classList.add("fade-in");
    btnDiv.classList.add("buttons-beside");
  }

}


function manyRipeReceive() {
  document.getElementById("exchange").style.display = "none";

  receiveHowMany();
  receiveRipe();
  receiveSubmitBtn();
}

function manyRipeLookingExchange() {
  document.getElementById("receive").style.display = "none";

  receiveHowMany();
  receiveRipe();
  receiveSubmitBtn();
}

function manyRipeGive() {
  document.getElementById("exchange").style.display = "none";

  giveHowMany();
  giveRipe();
  giveSubmitBtn();
}

function manyRipeGivingExchange() {
  document.getElementById("give").style.display = "none";

  giveHowMany();
  giveRipe();
  giveSubmitBtn();
}


function receiveHowMany() {

  if (!receiveClicked) {

    const topButton = document.getElementById("looking");
    const numberContainer = document.createElement("form");
    numberContainer.setAttribute("id", "number-container");

    //label for How Many
    const label1 = document.createElement("p");
    label1.setAttribute("id", "receiveHowMany");
    label1.innerText = "How Many?";
    topButton.appendChild(label1);
    
    // Decrement Button
    const decrementBtn = document.createElement("input");
    decrementBtn.setAttribute("id", "decrement");
    decrementBtn.setAttribute("type", "button");
    decrementBtn.setAttribute("value", " - ");
    // decrementBtn.setAttribute("onclick", decrement);
    decrementBtn.addEventListener("click", decrement);
    // decrement.setAttribute("class", "buttons-beside");
    numberContainer.appendChild(decrementBtn);

    const number = document.createElement("input");
    number.setAttribute("id", "number");
    number.setAttribute("value", 0);
    numberContainer.appendChild(number);

    // Increment Button
    const incrementBtn = document.createElement("input");
    incrementBtn.setAttribute("id", "increment");
    incrementBtn.setAttribute("type", "button");
    incrementBtn.setAttribute("value", " + ");
    incrementBtn.addEventListener("click", increment);
    // incrementBtn.setAttribute("onclick", increment);
    // incrementBtn.setAttribute("class", "buttons-beside");
    numberContainer.appendChild(incrementBtn);

    topButton.appendChild(numberContainer);

  }

}


function giveHowMany() {

  if (!giveClicked) {

    const topButton = document.getElementById("giving");
    const numberContainer = document.createElement("form");
    numberContainer.setAttribute("id", "number-container");

    //label for How Many
    const label1 = document.createElement("p");
    label1.setAttribute("id", "giveHowMany");
    label1.innerText = "How Many?";
    topButton.appendChild(label1);
    
    // Decrement Button
    const decrementBtn = document.createElement("input");
    decrementBtn.setAttribute("id", "decrement");
    decrementBtn.setAttribute("type", "button");
    decrementBtn.setAttribute("value", " - ");
    decrementBtn.addEventListener("click", decrement);
    numberContainer.appendChild(decrementBtn);

    const number = document.createElement("input");
    number.setAttribute("id", "number");
    number.setAttribute("value", 0);
    numberContainer.appendChild(number);

    // Increment Button
    const incrementBtn = document.createElement("input");
    incrementBtn.setAttribute("id", "increment");
    incrementBtn.setAttribute("type", "button");
    incrementBtn.setAttribute("value", " + ");
    incrementBtn.addEventListener("click", increment);
    // incrementBtn.setAttribute("onclick", increment);
    numberContainer.appendChild(incrementBtn);

    topButton.appendChild(numberContainer);

  }

}

function increment() {
  // console.log(document.getElementById("number").value);
  let num = document.getElementById("number").value;
  num++;
  document.getElementById("number").value = num;
}

function decrement() {
  // console.log(document.getElementById("number").value);
  let num = document.getElementById("number").value;
  if (num > 0) {
    num--;
    document.getElementById("number").value = num; 
  }
}

function giveRipe() {

  if (!giveClicked) {

  const topButton = document.getElementById("giving");
  const ripeContainer = document.createElement("form");
  ripeContainer.setAttribute("id", "ripe-container");

  //label for decrement
  const label2 = document.createElement("p");
  label2.setAttribute("id", "receiveRipe");
  label2.innerText = "How Ripe?";
  topButton.appendChild(label2);

  const Underripe = document.createElement("button");
  Underripe.setAttribute("id", "Underripe");
  Underripe.setAttribute("class", "buttons-beside");
  Underripe.innerText = "Underripe";
  ripeContainer.appendChild(Underripe);

  const ripe = document.createElement("button");
  ripe.setAttribute("id", "ripe");
  ripe.setAttribute("class", "buttons-beside");
  ripe.innerText = "Ripe";
  ripeContainer.appendChild(ripe);

  const overripe = document.createElement("button");
  overripe.setAttribute("id", "ripe");
  overripe.setAttribute("class", "buttons-beside");
  overripe.innerText = "Overripe";
  ripeContainer.appendChild(overripe);

  topButton.appendChild(ripeContainer);

  }

  giveClicked = true;
  
}

function receiveRipe() {

  if (!receiveClicked) {

  const topButton = document.getElementById("looking");
  const ripeContainer = document.createElement("form");
  ripeContainer.setAttribute("id", "ripe-container");

  //label for decrement
  const label2 = document.createElement("p");
  label2.setAttribute("id", "receiveRipe");
  label2.innerText = "How Ripe?";
  topButton.appendChild(label2);

  const Underripe = document.createElement("button");
  Underripe.setAttribute("id", "Underripe");
  Underripe.setAttribute("class", "buttons-beside");
  Underripe.innerText = "Underripe";
  ripeContainer.appendChild(Underripe);

  const ripe = document.createElement("button");
  ripe.setAttribute("id", "ripe");
  ripe.setAttribute("class", "buttons-beside");
  ripe.innerText = "Ripe";
  ripeContainer.appendChild(ripe);

  const overripe = document.createElement("button");
  overripe.setAttribute("id", "ripe");
  overripe.setAttribute("class", "buttons-beside");
  overripe.innerText = "Overripe";
  ripeContainer.appendChild(overripe);

  topButton.appendChild(ripeContainer);

  }

  receiveClicked = true;

}

function receiveSubmitBtn() {

  if (!submitted) {

    const topButton = document.getElementById("looking");

    const submitBtn = document.createElement("input");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("id", "submit-here");
    submitBtn.setAttribute("value", "Findocado!");  

    topButton.appendChild(submitBtn);
    
    submitted = true;
  }
}

function giveSubmitBtn() {

  if (!submitted) {

    const topButton = document.getElementById("giving");

    const submitBtn = document.createElement("input");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("id", "submit-here");
    submitBtn.setAttribute("value", "Findocado!");  

    topButton.appendChild(submitBtn);

    submitted = true;
  }

}


