// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const getInputs = document.querySelectorAll("input");
const submitButton = getInputs[2];

const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");

submitButton.addEventListener("click", function makeGrid(evt) {
  evt.preventDefault();
  console.log("The submit button was clicked");
  console.log(height.value);
  console.log(width.value);
});
