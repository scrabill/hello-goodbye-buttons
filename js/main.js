// Set constants for later user

const row = document.getElementById("row");
const allButtons = document.querySelectorAll("button");

// Get all button elements, spread them into an array, then add an addEventListener to each button item from the array

[...document.querySelectorAll("button")].forEach(function(item) {
    item.addEventListener("click", createRows)
  });

// Functio to create a new row when either button is clicked

function createRows() {

  let id = event.target.id;
  const div = document.createElement("div");

  row.append(div);

  if (id == "hello") {

    div.innerText = "Hello!";

  } else if (id == "goodbye") {

    div.innerText = "Goodbye!";
  }

}
