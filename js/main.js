// Set constants for later user

const helloBtn = document.getElementById("hello");
const goodbyeBtn = document.getElementById("goodbye");
const row = document.getElementById("row");

// Event listers

helloBtn.addEventListener("click", createRows)
goodbyeBtn.addEventListener("click", createRows)

// Function to create a new row when either button is buttonIsClicked

function createRows() {

  let id = event.target.id;
  console.log(id);

  const div = document.createElement("div");
  console.log("A div has been created");

  row.append(div);

  if (id == "hello") {

    div.innerText = "Hello!";

  } else if (id == "goodbye") {

    div.innerText = "Goodbye!";
  }

}
