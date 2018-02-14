// Target height input field
const heightInput = document.getElementById("inputHeight");

// Target width input field
const widthInput = document.getElementById("inputWidth");

// Target submit button
const getInputs = document.querySelectorAll("input");
const submitButton = getInputs[2];

// Target table element that stores the grid
const grid = document.getElementById("pixelCanvas");

// Create an event listener that fires when the submit button is pressed
submitButton.addEventListener("click", function makeGrid(evt) {
  // Stops page from reloading on submit
  evt.preventDefault();

  // Clear the grid each time the submit button is pressed
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

  // Gets the current value of the height input field
  const height = heightInput.value;

  // Gets the current value of the width input field
  const width = widthInput.value;

  // A nested loop to create rows and then create cells inside those rows
  for (let r = 0; r < height; r++) {
    const newRow = document.createElement("tr");
    grid.appendChild(newRow);
    for (let c = 0; c < width; c++) {
      const newCol = document.createElement("td");
      newRow.appendChild(newCol);
    }
  } // END FOR LOOP
});

// Add an event listener to any cell that's targeted inside the grid

grid.addEventListener("mousedown", function(e) {
  e.target.style.backgroundColor = document.getElementById("colorPicker").value;
});
