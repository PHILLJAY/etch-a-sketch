// TODO:    enable them to be hovered (generate this iteratively)
// TODO:    enable the user to select how many divs they want (grab a number and square
//          it to the nearest int)

const root = document.getElementById("root");

//testing down below

// const div = document.createElement("div");

// div.setAttribute("id", "testDiv");
// div.style.backgroundColor = "lightblue";
// root.appendChild(div);

for (let y = 0; y < 16; y++) {
  const flexContainer = document.createElement("div");
  flexContainer.setAttribute("id", `flexContainer${y}`);
  flexContainer.style.display = "flex";
  root.appendChild(flexContainer);
  for (let x = 0; x < 16; x++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", `div${y * 16 + x}`);
    newDiv.setAttribute("class", "pixel]");
    newDiv.style.width = "5px";
    newDiv.style.height = "5px";
    newDiv.style.margin = "1px";
    newDiv.style.backgroundColor = "lightblue";
    newDiv.addEventListener("mouseover", () => {
      newDiv.style.backgroundColor = "black";
    });
    // newDiv.textContent = `I am Div ${y * 16 + x}`;
    flexContainer.appendChild(newDiv);
  }
}
