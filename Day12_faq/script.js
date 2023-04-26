const togs = document.querySelectorAll(".faq-toggle");
togs.forEach((i) => {
  i.addEventListener("click", () => {
    i.parentNode.classList.toggle("active");
  });
});
