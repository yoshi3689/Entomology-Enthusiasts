const matcho = document.querySelector("h1");
const matchList = document.getElementById("match-list");

matcho.addEventListener("animationend", () => {
    matchList.classList.add("fade-in");
    matchList.style.display = "flex";

});