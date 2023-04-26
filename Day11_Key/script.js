const insert = document.getElementById("insert");

window.addEventListener("keydown", (i) => {
  insert.innerHTML = `
      <div class='key' >
        ${i.key === " " ? "Space" : i.key}  
        <small>i.key</small>
      </div>

      <div class='key'>
        ${i.keyCode}
        <small>i.keyCode</small>
      </div>

      <div class='key'>
        ${i.code}
        <small>i.code</small>
      </div>
  
    `;
});
