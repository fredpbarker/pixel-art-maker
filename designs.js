// Set up variables to target the submit buttons and grid container
const makeGridButton = document.getElementById("submitGrid");
const eraseWorkButton = document.getElementById("eraseWork");
const grid = document.getElementById("pixelCanvas");

// Add event handler that runs the makeGrid function when the 'Make Grid' button is pressed
makeGridButton.addEventListener("click", makeGrid);

// Add event handler that runs the eraseWork function when the 'Erase Your Work' button is pressed
eraseWorkButton.addEventListener("click", eraseWork);

// Runs the paintGrid function
paintGrid(grid);

// A function that creates the grid
function makeGrid(event) {
  // Stops the 'Make Grid' button from reloading the page
  event.preventDefault();

  // Removes any old grid from the page before a new one is created
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

  // Gets the current value of the height input field
  const heightInput = document.getElementById("inputHeight");
  const height = heightInput.value;

  // Gets the current value of the width input field
  const widthInput = document.getElementById("inputWidth");
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
}

// A function to erase any work you've done
function eraseWork(event) {
  // Stops the 'Erase Your Work' button from reloding the page
  event.preventDefault();

  // Targets all cells (td elements) in the grid
  const gridCells = document.querySelectorAll("td");

  // A loop that loops over every grid cell (td element) in the grid and sets its background color back to that of the rest of the page
  for (let i in gridCells) {
    gridCells[i].style.backgroundColor = "#F5F5F5";
  }
}

// A function for painting inside the grid
function paintGrid(grid) {
  // Targets the color picker
  const currentColor = document.getElementById("colorPicker");

  // Sets a variable which will allow us to detect if the left mouse button is pressed
  let isMousedown = false;

  // Adds an event listener that sets the isMousedown variable to true on a left mouse click and also paints the grid cell you're clicking on with the current color
  grid.addEventListener("mousedown", function(event) {
    isMousedown = true;
    if (event.target.style.backgroundColor === "") {
      event.target.style.backgroundColor = currentColor.value;
    } else {
      event.target.style.backgroundColor = "";
    }
  });

  // Adds an event listener that sets the isMousedown variable to false when the mouse button is not clicked
  document.addEventListener("mouseup", function(event) {
    isMousedown = false;
  });

  // Adds an event listener that paints the grid cells using the mouseover event ONLY if the left mouse button is clicked. 'event.target !== grid' prevents the entire grid from being painted with the selected color if you happen to hover over the very edge of the grid
  grid.addEventListener("mouseover", function(event) {
    if (isMousedown && event.target !== grid) {
      event.target.style.backgroundColor = currentColor.value;
    }
  });
}
