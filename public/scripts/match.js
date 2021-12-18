const matcho = document.querySelector("h1");
const matchList = document.getElementById("match-list");

async function dbParsed() {
    // await database parsing

    // loop for generating divs in which to place database results
    for (let i = 0; i < 5; i++) {
        const match = document.createElement("div");
        match.setAttribute("class", "match");
        match.innerHTML = `
        <span>Distance</span><span>Number of Avocados</span><span>Ripeness</span>`;
        matchList.appendChild(match);
    }   

    // use animations to show divs
    matcho.style.display = "block";
    matcho.classList.add("avomatcho-found");
    matcho.addEventListener("animationend", () => {
        matchList.classList.add("fade-in");
        matchList.style.display = "flex";
    });
}
setTimeout(dbParsed, 3000);