let size = 16; // Initialize the default grid size
generateGrid(size); // Generate the initial grid

// Get references to important HTML elements
const root = document.getElementById("root"); // The main container for the grid
const buttonHolder = document.getElementById("buttonHolder"); // Container for the button

// Create the "Clear" button element
const button = document.createElement("button");
button.setAttribute("class", "pretty-button"); // Add the "pretty-button" class for styling
button.setAttribute("type", "button"); // Set the button type to "button"
button.setAttribute("id", "pretty-button"); // Set the button ID to "pretty-button"
button.style.backgroundColor = `rgb(${returnRGBcolor({
  red: 255,
  green: 255,
  blue: 255,
})})`; // Set initial background color to a random pastel using the returnRGBcolor function

// Add mouseover event listener to change button color on hover
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = `rgb(${returnRGBcolor({
    red: 100,
    green: 100,
    blue: 100,
  })})`; // Set hover background color to a darker shade
});

// Add mouseout event listener to reset button color after hover
button.addEventListener("mouseout", () => {
  button.style.backgroundColor = `rgb(${returnRGBcolor({
    red: 255,
    green: 255,
    blue: 255,
  })})`; // Reset background color to another random pastel
});

// Set button text content and append to the button holder
button.textContent = "Clear";
button.setAttribute("id", "clearButton"); // Update the button ID to "clearButton"
buttonHolder.append(button);

// Add click event listener to the button
button.addEventListener("click", () => {
  const size = getSizeFromUser(); // Get the desired grid size from the user
  clearGrid(); // Clear the existing grid
  generateGrid(size); // Generate a new grid with the specified size
});

// Function to prompt the user for the desired grid size
function getSizeFromUser() {
  let size = prompt("enter the grid size you'd like, 16 is the default", 16);
  return size;
}

// Function to clear the existing grid
function clearGrid() {
  const pixels = document.querySelectorAll(".pixel"); // Select all elements with the class "pixel"
  pixels.forEach((pixel) => pixel.remove()); // Remove each selected pixel element

  const flexContainers = document.querySelectorAll(".flexContainer"); // Select all elements with the class "flexContainer"
  flexContainers.forEach((flexContainer) => flexContainer.remove()); // Remove each selected flex container
}

// Function to generate a random RGB color string, optionally mixed with a base color
function returnRGBcolor(mix) {
  let r = Math.floor(Math.random() * 256); // Generate random red value
  let g = Math.floor(Math.random() * 256); // Generate random green value
  let b = Math.floor(Math.random() * 256); // Generate random blue value

  // If a mix object is provided, average the generated color with the mix color
  if (mix != null) {
    r = ((r + mix.red) / 2) >> 0; // Average red values
    g = ((g + mix.green) / 2) >> 0; // Average green values
    b = ((b + mix.blue) / 2) >> 0; // Average blue values
  }
  return `${r},${g},${b}`; // Return the RGB color string
}

// Function to generate the grid of divs
function generateGrid(size) {
  // Check if the grid size is over 100
  if (size > 100) {
    size = 16; // Default to 16 if size is over 100
    alert("Grid size too large, defaulting to 16x16."); // Alert the user about the default
  }

  for (let y = 0; y < size; y++) {
    // Create a flex container for each row
    const flexContainer = document.createElement("div");
    flexContainer.setAttribute("id", `flexContainer${y}`); // Set the ID of the flex container
    flexContainer.setAttribute("class", "flexContainer"); // Add the "flexContainer" class
    flexContainer.style.display = "flex"; // Set the display property to "flex"
    root.appendChild(flexContainer); // Append the flex container to the root element

    // Create divs (pixels) within each flex container
    for (let x = 0; x < size; x++) {
      const newDiv = document.createElement("div");
      newDiv.setAttribute("id", `div${y * 16 + x}`); // Set the ID of the div
      newDiv.setAttribute("class", "pixel"); // Add the "pixel" class
      newDiv.setAttribute("draggable", "false"); // Disable dragging on the div
      newDiv.style.backgroundColor = "white"; // Set initial background color to white

      // Add mouseover event listener to change div color on hover
      newDiv.addEventListener("mouseover", () => {
        newDiv.style.backgroundColor = `rgb(${returnRGBcolor({
          red: 255,
          green: 255,
          blue: 255,
        })})`; // Set background color to a random color using returnRGBcolor
      });
      flexContainer.appendChild(newDiv); // Append the div to the flex container
    }
  }
}
