// TODO:    enable the user to select how many divs they want (grab a number and square
//          it to the nearest int)

let size = 16;

const root = document.getElementById("root");
const buttonHolder = document.getElementById("buttonHolder");

const button = document.createElement("button");
button.setAttribute("class", "pretty-button");
button.setAttribute("type", "button");
button.setAttribute("id", "pretty-button");
button.style.backgroundColor = `rgb(${returnRGBcolor({
  red: 255,
  green: 255,
  blue: 255,
})}`;

button.addEventListener("mouseover", () => {
  button.style.backgroundColor =
    button.style.backgroundColor = `rgb(${returnRGBcolor({
      red: 100,
      green: 100,
      blue: 100,
    })})`;
});

button.addEventListener("mouseout", () => {
  button.style.backgroundColor = `rgb(${returnRGBcolor({
    red: 255,
    green: 255,
    blue: 255,
  })}`;
});

button.textContent = "Clear";
button.setAttribute("id", "clearButton");
buttonHolder.append(button);

button.addEventListener("click", () => {
  const size = getSizeFromUser();
  clearGrid();
  generateGrid(size);
});

function getSizeFromUser() {
  let size = prompt("enter the grid size you'd like, 16 is the default", 16);
  return size;
}
function clearGrid() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => pixel.remove());
  const flexContainers = document.querySelectorAll(".flexContainer");
  flexContainers.forEach((flexContainer) => flexContainer.remove());
}

function returnRGBcolor(mix) {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  if (mix != null) {
    r = ((r + mix.red) / 2) >> 0;
    g = ((g + mix.green) / 2) >> 0;
    b = ((b + mix.blue) / 2) >> 0;
  }
  return `${r},${g},${b}`;
}

function generateGrid(size) {
  for (let y = 0; y < size; y++) {
    const flexContainer = document.createElement("div");
    flexContainer.setAttribute("id", `flexContainer${y}`);
    flexContainer.setAttribute("class", "flexContainer");
    flexContainer.style.display = "flex";
    root.appendChild(flexContainer);
    for (let x = 0; x < size; x++) {
      const newDiv = document.createElement("div");
      newDiv.setAttribute("id", `div${y * 16 + x}`);
      newDiv.setAttribute("class", "pixel");
      newDiv.setAttribute("draggable", "false");
      newDiv.style.backgroundColor = "white";
      newDiv.addEventListener("mouseover", () => {
        newDiv.style.backgroundColor = `rgb(${returnRGBcolor({
          red: 255,
          green: 255,
          blue: 255,
        })})`;
      });
      flexContainer.appendChild(newDiv);
    }
  }
}
