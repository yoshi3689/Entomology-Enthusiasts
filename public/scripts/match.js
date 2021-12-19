const matcho = document.querySelector("h1");
const matchList = document.getElementById("match-list");
const loader = document.getElementById("loader");

const getAvocados = () => {
    fetch("/avomatcho/hello")
    .then((res) => {
        return res.json();
    })
    .then(data => {
        console.log(data);
        return data.seek;
    });
}

// router.get('/chat', function(req, res) {
//     res.render('path/to/ejs/files/chat');
//   });

async function dbParsed() {
    
    // How do we know which collection to search?
    //  Use a flag from the body that writes to this

    const avocados = await getAvocados();

    // fetch("/avomatcho").then((res) => {
    //     console.log(res.json());
    // })

    // let seek = document.getElementById("seek").innerText;
    // console.log(seek);

    // // await database search
    // if (seek) {
    //     // query seek collection for matches
    // } else {
    //     // query give collection for matches
    // }

    // loop for generating divs in which to place database results
    for (let i = 0; i < 5; i++) {
        const match = document.createElement("div");
        match.setAttribute("class", "match");
        match.setAttribute("onclick", "/chat")
        match.innerHTML = `
        <span>Distance</span><span>Number of Avocados</span><span>Ripeness</span>`;
        matchList.appendChild(match);
    }   

    // use animations to show divs, potentially change to use promises
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
//  https://stackoverflow.com/questions/53799108/how-to-add-a-loading-animation-while-fetch-data-from-api-vanilla-js

// setTimeout(dbParsed, 3000); //placeholder for the time it takes to search the db
dbParsed();
