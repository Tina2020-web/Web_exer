const panels = document.querySelectorAll(".panel");
// console.log(panels[0]);
panels.forEach((i) => {
  i.addEventListener("click", () => {
    // console.log(123);
    removeActiveClass();
    i.classList.add("active");
  });
});
function removeActiveClass() {
  panels.forEach((i) => {
    i.classList.remove("active");
  });
}
