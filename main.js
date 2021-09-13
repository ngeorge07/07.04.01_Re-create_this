const start = document.querySelector(".start");

start.addEventListener("click", buttonClicked);

function buttonClicked() {
  if (start.className === "start unclicked") {
    start.classList.remove("unclicked");
    start.classList.add("clicked");
    start.textContent = "STOP";
  } else {
    start.classList.remove("clicked");
    start.classList.add("unclicked");
    start.textContent = "START";
  }
}
