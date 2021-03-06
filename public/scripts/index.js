const logo = document.getElementById("avoyy-logo");
const lookingDiv = document.getElementById("looking");
const givingDiv = document.getElementById("giving");
const giveBackArrow = document.getElementById("left-arrow");
const lookBackArrow = document.getElementById("right-arrow");

// Flag to prevent repetetive clicking.
let clicked = false;

// Giving path
let givingClicked = false;
givingDiv.addEventListener("click", () => {
  givingDiv.classList.add("div-fill");
  lookingDiv.querySelector("p").classList.add("fade-out");
  logo.classList.add("logo-left");
  givingDiv.addEventListener("animationend",
    () => {
      givingDiv.classList.add("fullscreen");
      logo.style.display = "none";
      giveBackArrow.style.display = "block";
      giveBackArrow.classList.add("quick-fade-in");
    });

  if (!clicked) {
    givingClicked = true;
    insertButtons();
    clicked = true;
  }
});


// Looking path
let lookingClicked = false;
lookingDiv.addEventListener("click", () => {
  lookingDiv.classList.add("div-fill");
  givingDiv.querySelector("p").classList.add("fade-out");
  logo.classList.add("logo-right");
  lookingDiv.addEventListener("animationend",
    () => {
      lookingDiv.classList.add("fullscreen");
      logo.style.display = "none";
      lookBackArrow.style.display = "block";
      lookBackArrow.classList.add("quick-fade-in");
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

let exchangeFlag = false;
function receive() {
  const exchangeBtn = document.getElementById("exchange");
  exchangeBtn.classList.add("quick-fade-out");
  exchangeBtn.addEventListener("animationend", () => {
    exchangeBtn.style.display = "none";
    receiveForm();
  })  
}

function give() {
  const exchangeBtn = document.getElementById("exchange");
  exchangeBtn.classList.add("quick-fade-out");
  exchangeBtn.addEventListener("animationend", () => {
    exchangeBtn.style.display = "none";
    giveForm();
  })
}

function receiveExchange() {
  const receiveBtn = document.getElementById("receive");
  receiveBtn.classList.add("quick-fade-out");
  receiveBtn.addEventListener("animationend", () => {
    receiveBtn.style.display = "none";
    receiveForm();
  })
  exchangeFlag = true;
}

function giveExchange() {
  const giveBtn = document.getElementById("give");
  giveBtn.classList.add("quick-fade-out");
  giveBtn.addEventListener("animationend", () => {
    giveBtn.style.display = "none";
    giveForm();
  })
  exchangeFlag = true;
}

let receiveClicked = false;
function receiveForm() {

  if (!receiveClicked) {

    const topButton = document.getElementById("looking");
    const receiveForm = document.createElement("div");
    receiveForm.setAttribute("id", "receive-form");

    receiveForm.innerHTML = `
      <p id="receiveHowMany">How Many?</p>
      <div id="form-item-container">
        <input id="decrement" type="button" value="-" onclick="decrement()" />
        <input id="number" value="0" />
        <input id="increment" type="button" value="+" onclick="increment()" />
      </div>
      <p id="receiveRipe">How Ripe?</p>
      <div id="ck-button">
        <label for="underripe">
          <input id="underripe" type="checkbox"><span>Underripe</span>
        </label>
        <label for="ripe">
          <input id="ripe" type="checkbox"><span>Ripe</span>
        </label>
        <label for="overripe">
          <input id="overripe" type="checkbox"><span>Overripe</span>
        </label>
      </div>
      <input id="submit-here" type="submit" value="Findocado!" onclick="postAvo()" />`;

    topButton.appendChild(receiveForm);

    receiveClicked = true;
  }
}

let giveClicked = false;
function giveForm() {

  if (!giveClicked) {

    const topButton = document.getElementById("giving");
    const giveForm = document.createElement("div");
    giveForm.setAttribute("id", "give-form");

    giveForm.innerHTML = `
    <p id="giveHowMany">How Many?</p>
    <div id="form-item-container">
      <input id="decrement" type="button" value="-" onclick="decrement()" />
      <input id="number" value="0" />
      <input id="increment" type="button" value="+" onclick="increment()" />
    </div>
    <p id="giveRipe">How Ripe?</p>
    <div id="ck-button">
      <label for="underripe">
        <input id="underripe" type="checkbox"><span>Underripe</span>
      </label>
      <label for="ripe">
        <input id="ripe" type="checkbox"><span>Ripe</span>
      </label>
      <label for="overripe">
        <input id="overripe" type="checkbox"><span>Overripe</span>
      </label>
    </div>
    <input id="submit-here" type="submit" value="Findocado!" onclick="postAvo()" />`;

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

// Get the user's location
var avoLoc = [];

const geoSuccess = pos => {
  const { latitude, longitude, accuracy } = pos.coords;
  avoLoc.push(latitude);
  avoLoc.push(longitude);
  console.log([latitude, longitude]);
}
const geoFail = err => {
  console.warn(err.code, err.message);
}
const options = {
  enableHighAccuracy: false,
  timeOut: 5000,
  maximumAge: 0
}
navigator.geolocation.getCurrentPosition(geoSuccess, geoFail, options);

function postAvo() {
  let seek;
  if (receiveClicked) {
    seek = true;
  } else { // If it isn't a seek, it is a give
    seek = false;
  }
  //TODO: pass receiveClicked instead of seek

  let quantity = document.getElementById("number").value;
  let ripeness = [
    document.getElementById("underripe").checked,
    document.getElementById("ripe").checked,
    document.getElementById("overripe").checked
  ];
  let exchange = exchangeFlag;

  fetch("/avomatcho", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      seek, // Use this to determine the collection: seek or give
      quantity,
      avoLoc,
      ripeness,
      exchange
    })
  })
    .then((res) => {
      if (res.status == 200) {
        window.location.replace("/avomatcho");
      };
    });
}
