const matcho = document.querySelector("h1");
const matchList = document.getElementById("match-list");
const loader = document.getElementById("loader");

async function dbParsed() {
    
    // How do we know which collection to search?
    //  Use a flag from the body that writes to this

    // fetch("/avomatcho", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         seek // seek is undefined in the get body
    //     })
    // }).then((res) => {
    //     console.log(res.json());
    // })

    // await database search
    // using the flag from the fetch, search the correct collection for matches

    // loop for generating divs in which to place database results
    for (let i = 0; i < 5; i++) {
        const match = document.createElement("div");
        match.setAttribute("class", "match");
        match.innerHTML = `
        <span>Distance</span><span>Number of Avocados</span><span>Ripeness</span>`;
        matchList.appendChild(match);
    }   

    // use animations to show divs
    loader.classList.add("fade-out");
    loader.addEventListener("animationend", () => {
        loader.style.display = "none";
        matcho.style.display = "block";
        matcho.classList.add("avomatcho-found");
        matcho.addEventListener("animationend", () => {
            matchList.classList.add("fade-in");
            matchList.style.display = "flex";
        });
    });
}
setTimeout(dbParsed, 3000); //placeholder for the time it takes to search the db
window.addEventListener("DOMContentLoaded", )