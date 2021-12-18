var x  = document.getElementsByTagName("BODY")[0];
function  sendMessage(){

    console.log("was pressed");
    let container = document.createElement("DIV");
    container.setAttribute("class", "container");
    let messagePara = document.createElement("P");
    let message = document.createTextNode("placeHolder");

    const d = new Date();

    let timeSpan = document.createElement("SPAN");
    timeSpan.setAttribute("class", "time");
    let time = document.createTextNode(d.getHours() + ":" + d.getMinutes());
    timeSpan.appendChild(time);

    messagePara.appendChild(message);
    container.appendChild(messagePara);
    container.appendChild(timeSpan);
    x.appendChild(container);
    
}