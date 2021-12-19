const matcho = document.querySelector("h1");
const matchList = document.getElementById("match-list");
const loader = document.getElementById("loader");

// use animations to show divs, potentially change to use promises
const dbParsed = async () => {
    fetch("/avomatcho/hello")
        .then((res) => res.json())
        .then(data => {
            //do some animation transitions.
            loader.classList.add("fade-out"); 
            loader.addEventListener("animationend", () => {
                loader.style.display = "none"; 
                matcho.style.display = "block"; 
                matcho.classList.add("avomatcho-found");
                matcho.addEventListener("animationend", () => {
                    matchList.style.display = "flex";
                    matchList.classList.add("fade-in");
                });
            });
            // loop for generating divs in which to place database results
            data.data.forEach(avo => {
                const match = document.createElement("div");
                match.setAttribute("class", "match");
                match.innerHTML = `
                <span>Number of Avocados: ${avo.quantity}</span><span>Ripeness: ${avo.ripeness[0] ? "Under-ripe": "" + avo.ripeness[1] ? "Ripe": "" + avo.ripeness[2] ? "Over-ripe": ""}</span><span>Distance: ${avo.avoLoc}</span>`;
                matchList.appendChild(match);
            })
        });
}
window.addEventListener("DOMContentLoaded", dbParsed);
