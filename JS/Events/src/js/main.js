function handleClick() {
  console.log("Du klickade på någonting");
}

handleClick();

let saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", handleClick);
