// TODO:    enable the user to select how many divs they want (grab a number and square
//          it to the nearest int)

let size = 16;

const root = document.getElementById("root");
const buttonHolder = document.getElementById("buttonHolder");

const button = document.createElement("button");
button.textContent = "Clear";
button.setAttribute("id", "clearButton");
buttonHolder.append(button);

button.addEventListener("click", () => {
  const size = getSizeFromUser();
  clearGrid();
  generateGrid(100);
});

function getSizeFromUser() {
  let size = prompt("enter the grid size you'd like, 16 is the default", 16);
  return size;
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
      newDiv.style.margin = "1px";
      newDiv.style.backgroundColor = "lightblue";
      newDiv.addEventListener("mouseover", () => {
        newDiv.style.backgroundColor = "black";
      });
      flexContainer.appendChild(newDiv);
    }
  }
}
