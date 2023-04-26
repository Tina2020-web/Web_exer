const smallcups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallcups.forEach((cup, i) => {
  cup.addEventListener("click", () => highlightCups(i));
});

function highlightCups(i) {
  if (
    smallcups[i].classList.contains("full") &&
    !smallcups[i].nextElementSibling.classList.contains("full")
  ) {
    i--;
  }
  smallcups.forEach((cup, i2) => {
    if (i2 <= i) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
}
