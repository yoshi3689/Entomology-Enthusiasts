var x  = document.getElementsByTagName("BODY")[0];
function  sendAMessage(){
    var input1 = document.getElementById('text-input').value;
    if(input1 == ''){

    }else {
    console.log("was pressed");
    let container = document.createElement("DIV");
    container.setAttribute("class", "container");
    let messagePara = document.createElement("P");
    var messageSent = document.createTextNode(input1);

    const d = new Date();

    let timeSpan = document.createElement("SPAN");
    timeSpan.setAttribute("class", "time");
    
    let time = document.createTextNode(d.getHours() + ":" + ((d.getMinutes()<10)?'0':'' + d.getMinutes()));

    timeSpan.appendChild(time);

    messagePara.appendChild(messageSent);
    container.appendChild(messagePara);
    container.appendChild(timeSpan);
    x.appendChild(container);
    document.getElementById('text-input').value = "";
    }
}

// var socket = io();
// $(() => {
//     $("#send").click(() => {
//         sendMessage({message: $("#message").val()});
//     })

//     getMessages();
// });

// socket.on("message", addMessages);

// function addMessages(message) {
//     messageSent.innerHTML = $("#messages").append(`<p> #{message.message} <p>`);
// }

// function getMessages() {

// }

// function sendMessage(message) {
    
// }