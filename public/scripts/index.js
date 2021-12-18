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

// creates buttons and insert them into a div clicked
function insertButtons() {
  const btnDiv = document.createElement("div");

  if (lookingClicked) {
    btnDiv.innerHTML = `
      <button id="receive" onclick=receive()>To Receive</button>
      <button id="exchange" onclick=receiveExchange()>To Exchange</button>`;

    lookingDiv.appendChild(btnDiv);
    btnDiv.classList.add("fade-in");
    btnDiv.classList.add("buttons-beside");

  } else if (givingClicked) {
    btnDiv.innerHTML = `
      <button id="give" onclick=give()>To Give</button>
      <button id="exchange" onclick=giveExchange()>To Exchange</button>`;

    givingDiv.appendChild(btnDiv);
    btnDiv.classList.add("fade-in");
    btnDiv.classList.add("buttons-beside");
  }

}


function receive() {
  document.getElementById("exchange").style.display = "none";

  receiveForm();
}

function receiveExchange() {
  document.getElementById("receive").style.display = "none";

  receiveForm();
}

function give() {
  document.getElementById("exchange").style.display = "none";

  giveForm();
}

function giveExchange() {
  document.getElementById("give").style.display = "none";

  giveForm();
}


function receiveForm() {

  if (!receiveClicked) {

    const topButton = document.getElementById("looking");
    const receiveForm = document.createElement("form");
    receiveForm.setAttribute("id", "receive-form");
    receiveForm.setAttribute("action", "/avomatcho");

    // How Many?
    const label1 = document.createElement("p");
    label1.setAttribute("id", "receiveHowMany");
    label1.innerText = "How Many?";
    receiveForm.appendChild(label1);

    const numDiv = document.createElement("div");
    numDiv.setAttribute("id", "form-item-container");

    // Decrement Button
    const decrementBtn = document.createElement("input");
    decrementBtn.setAttribute("id", "decrement");
    decrementBtn.setAttribute("type", "button");
    decrementBtn.setAttribute("value", " - ");
    decrementBtn.addEventListener("click", decrement);
    numDiv.appendChild(decrementBtn);

    const number = document.createElement("input");
    number.setAttribute("id", "number");
    number.setAttribute("value", 0);
    numDiv.appendChild(number);

    // Increment Button
    const incrementBtn = document.createElement("input");
    incrementBtn.setAttribute("id", "increment");
    incrementBtn.setAttribute("type", "button");
    incrementBtn.setAttribute("value", " + ");
    incrementBtn.addEventListener("click", increment);
    numDiv.appendChild(incrementBtn);

    receiveForm.appendChild(numDiv);

    // How Ripe?
    const label2 = document.createElement("p");
    label2.setAttribute("id", "receiveRipe");
    label2.innerText = "How Ripe?";
    receiveForm.appendChild(label2);

    //Div for checkboxes
    const checkDiv = document.createElement("div");
    checkDiv.setAttribute("id", "ck-button");

    checkDiv.innerHTML = `
      <label for="underripe">
        <input id="underripe" type="checkbox"><span>Underripe</span>
      </label>
      <label for="ripe">
        <input id="ripe" type="checkbox"><span>Ripe</span>
      </label>
      <label for="overripe">
        <input id="overripe" type="checkbox"><span>Overripe</span>
      </label>
      `;

    receiveForm.appendChild(checkDiv);

    // Submit Button
    const submitBtn = document.createElement("input");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("id", "submit-here");
    submitBtn.setAttribute("value", "Findocado!");
    receiveForm.appendChild(submitBtn);

    topButton.appendChild(receiveForm);

    receiveClicked = true;
  }
}

function giveForm() {

  if (!giveClicked) {

    const topButton = document.getElementById("giving");
    const giveForm = document.createElement("form");
    giveForm.setAttribute("id", "give-form");
    giveForm.setAttribute("action", "/avomatcho");

    // How Many?
    const label1 = document.createElement("p");
    label1.setAttribute("id", "giveHowMany");
    label1.innerText = "How Many?";
    giveForm.appendChild(label1);

    // Create div for num avos
    const numDiv = document.createElement("div");
    numDiv.setAttribute("id", "form-item-container");

    // Decrement Button
    const decrementBtn = document.createElement("input");
    decrementBtn.setAttribute("id", "decrement");
    decrementBtn.setAttribute("type", "button");
    decrementBtn.setAttribute("value", " - ");
    decrementBtn.addEventListener("click", decrement);
    numDiv.appendChild(decrementBtn);

    const number = document.createElement("input");
    number.setAttribute("id", "number");
    number.setAttribute("value", 0);
    numDiv.appendChild(number);

    // Increment Button
    const incrementBtn = document.createElement("input");
    incrementBtn.setAttribute("id", "increment");
    incrementBtn.setAttribute("type", "button");
    incrementBtn.setAttribute("value", " + ");
    incrementBtn.addEventListener("click", increment);
    numDiv.appendChild(incrementBtn);

    // Append div for num avos
    giveForm.appendChild(numDiv);

    // How Ripe?
    const label2 = document.createElement("p");
    label2.setAttribute("id", "giveRipe");
    label2.innerText = "How Ripe?";
    giveForm.appendChild(label2);

    const checkDiv = document.createElement("div");
    checkDiv.setAttribute("id", "ck-button");


    // Create checkboxes
    checkDiv.innerHTML = 
      `<label for="underripe">
        <input id="underripe" type="checkbox">
        <span>Underripe</span>
      </label>
      <label for="ripe">
        <input id="ripe" type="checkbox">
        <span>Ripe</span>
      </label>
      <label for="overripe">
        <input id="overripe" type="checkbox">
        <span>Overripe</span>
      </label>
      `;
    
    giveForm.appendChild(checkDiv);

    // Submit Button
    const submitBtn = document.createElement("input");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("id", "submit-here");
    submitBtn.setAttribute("value", "Findocado!");
    giveForm.appendChild(submitBtn);

    topButton.appendChild(giveForm);

    giveClicked = true;
  }
}

function increment() {
  let num = document.getElementById("number").value;
  num++;
  document.getElementById("number").value = num;
}

function decrement() {
  let num = document.getElementById("number").value;
  if (num > 0) {
    num--;
    document.getElementById("number").value = num;
  }
}
