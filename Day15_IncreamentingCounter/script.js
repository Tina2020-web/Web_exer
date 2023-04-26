const counters = document.querySelectorAll(".counter");

counters.forEach((i) => {
  i.innerText = "0";
  const updateCounter = () => {
    const target = +i.getAttribute("data-target");
    const c = +i.innerText;

    const increment = target / 100;

    if (c < target) {
      i.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      i.innerText = target;
    }
  };
  updateCounter();
});
