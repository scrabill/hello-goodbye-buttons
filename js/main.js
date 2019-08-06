// Set constants for later user

var row = document.getElementById("row");
var allButtons = document.querySelectorAll("button");

// Get all button elements, spread them into an array, then add an addEventListener to each button item from the array

[...document.querySelectorAll("button")].forEach(function(item) {
    item.addEventListener("click", createRows)
  });

// Function to create a new row when either button is clicked

function createRows() {

  var id = event.target.id;
  var div = document.createElement("div");

  row.append(div);

  if (id == "hello") {

    div.innerText = "Hello!";

  } else if (id == "goodbye") {

    div.innerText = "Goodbye!";
  }

}
