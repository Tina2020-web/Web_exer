const jokeEL = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generatejoke);
generatejoke();

//1. using then()
function generatejoke() {
  const config = { headers: { Accept: "application/json" } };
  fetch("https://icanhazdadjoke.com/", config)
    .then((response) => response.json())
    .then((data) => {
      jokeEL.innerHTML = data.joke;
    });
}
//2. using ASYNX/AWAIT
// async function generatejoke() {
//   const config = { headers: { Accept: "application/json" } };

//   const response = await fetch("https://icanhazdadjoke.com/", config);
//   const data = await response.json();
//   jokeEL.innerHTML = data.joke;
// }
