// Add event lsitener
// function buttonIsClicked() {
//   const helloBtn = document.getElementByID("hello")
//
//   helloBtn.addEventListener("click", createRows)
//   console.log("Clicking")
// }

const helloBtn = document.getElementById("hello")
const goodbyeBtn = document.getElementById("goodbye");
// const buttons = document.getElementsByTagName("button");
// const buttons = document.getElementsByClassName("btn")

helloBtn.addEventListener("click", createRows)
goodbyeBtn.addEventListener("click", createRows)

// goodbyeBtn.addEventListener("click", createRows)

// document.getElementById("hello").addEventListener("click", test)

function createRows() {
  let id = event.target.id;
  console.log(id);
  if (id == "hello") {
    document.getElementById("show-rows").innerText = "hello"
  } else if (id == "goodbye") {
    document.getElementById("show-rows").innerText = "goodbye"
  }

}
