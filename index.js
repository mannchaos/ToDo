document.getElementById("btn").onclick = function () {
  let item = document.getElementById("title");
  if (item.value.length == 0) {
    alert("Please add some task");
  } else {
    document.getElementById("task").innerHTML += `
    <ul id="list">
    ${item.value}
    <img id='closeBtn' src="close.png" alt="close btn" />
    </ul>
    `;

    closeBtn.addEventListener("click", function () {
      list.remove();
    });

    item.value = "";
  }
};
