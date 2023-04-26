const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();
textarea.addEventListener("keyup", (i) => {
  creatTags(i.target.value);
  if (i.key == "Enter") {
    setTimeout(() => (i.target.value = ""));
    randomSelect();
  }
});

function creatTags(i) {
  //   console.log(i);
  const tags = i
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  //   console.log(tags);

  // clear the original tagsEl;
  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagnew = document.createElement("span");
    tagnew.classList.add("tag");
    tagnew.innerText = tag;
    tagsEl.appendChild(tagnew);
  });
}

function randomSelect() {
  const times = 30;
  const interval100 = setInterval(() => {
    const randomTag = pickRandomTag();
    hightlightTag(randomTag);
    setTimeout(() => {
      unhightlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval100);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      hightlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  // console.log('tags')
  return tags[Math.floor(Math.random() * tags.length)];
}

function hightlightTag(tag) {
  tag.classList.add("highlight");
}

function unhightlightTag(tag) {
  tag.classList.remove("highlight");
}
