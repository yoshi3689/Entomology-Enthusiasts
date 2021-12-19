const matcho = document.querySelector("h1");
const matchList = document.getElementById("match-list");
const loader = document.getElementById("loader");



// use animations to show divs, potentially change to use promises
loader.classList.add("fade-out");
loader.addEventListener("animationend", () => {
    loader.style.display = "none";
    matcho.style.display = "block";

});

const dbParsed = async () => {
    fetch("/avomatcho/hello")
        .then((res) => res.json())
        .then(data => {
            matcho.classList.add("avomatcho-found");
            matcho.addEventListener("animationend", () => {
                matchList.classList.add("fade-in");
                matchList.style.display = "flex";
            });
            
            // loop for generating divs in which to place database results
            data.data.forEach(avo => {
                const match = document.createElement("div");
                match.setAttribute("class", "match");
                match.innerHTML = `
                <span>Distance: ${avo.avoLoc}</span><span>Number of Avocados: ${avo.quantity}</span><span>Ripeness:  ${avo.ripeness}</span>`;
                matchList.appendChild(match);
            })
        });
}

window.addEventListener("DOMContentLoaded", dbParsed);
//  https://stackoverflow.com/questions/53799108/how-to-add-a-loading-animation-while-fetch-data-from-api-vanilla-js

// setTimeout(dbParsed, 3000); //placeholder for the time it takes to search the db
// dbParsed();