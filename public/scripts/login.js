const submitBtn = document.getElementById("submit");
const postUserInfo = (e) => {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  console.log(e.target, username, password);

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      username,
      password,
    })
  })
  .then((res) => res.json())
  .then((data) => {
    if (data.success) {
      console.log("Login successful");
      window.location.replace("/home");
    }
  });
}
submitBtn.addEventListener("click", postUserInfo);