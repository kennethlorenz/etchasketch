const SQUARECONTAINER = document.querySelector("#square-container");
const BLACKBUTTON = document.querySelector("#black");
const RANDOMBUTTON = document.querySelector("#random");
const CLEARBUTTON = document.querySelector("#clear");
const displayBorderToggle = document.querySelector("#toggle");
const screenWidth = 50.2;
const SLIDER = document.getElementById("slider");

let dimension = 16;

let selectedColor = "Black";
let isMouseDown = false;

function setSquareWidth(squareDimension) {
  return screenWidth / squareDimension;
}

function generateSquares() {
  let totalSquares = dimension * dimension;

  for (let row = 0; row < totalSquares; row++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${setSquareWidth(dimension)}rem`;
    SQUARECONTAINER.appendChild(square);
  }
}

generateSquares();
let squares = document.querySelectorAll(".square");

function fillBlackColor(element) {
  element.style.backgroundColor = "black";
}

function fillRandomColor(element) {
  let rColorValue = Math.floor(Math.random() * 256);
  let gColorValue = Math.floor(Math.random() * 256);
  let bColorValue = Math.floor(Math.random() * 256);

  let color = `rgb(${rColorValue} ${gColorValue} ${bColorValue}`;
  element.style.backgroundColor = color;
}

function fillColor(square) {
  if (selectedColor == "Black") {
    fillBlackColor(square);
  } else if (selectedColor == "Random") {
    fillRandomColor(square);
  }
}

squares.forEach((square) => {
  square.addEventListener("mousedown", (e) => {
    fillColor(square);
    isMouseDown = true;
    e.preventDefault();
  });
});

squares.forEach((square) => {
  square.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
});

squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    if (isMouseDown) {
      fillColor(square);
    } else {
      return;
    }
  });
});

function toggleActiveButton(activeButton, inActiveButton) {
  activeButton.classList.toggle("active");
  inActiveButton.classList.toggle("active");
}

BLACKBUTTON.addEventListener("click", () => {
  if (BLACKBUTTON.classList.contains("active")) {
    return;
  }
  toggleActiveButton(BLACKBUTTON, RANDOMBUTTON);
  selectedColor = "Black";
});

RANDOMBUTTON.addEventListener("click", () => {
  if (RANDOMBUTTON.classList.contains("active")) {
    return;
  }
  toggleActiveButton(RANDOMBUTTON, BLACKBUTTON);
  selectedColor = "Random";
});

function clearAllSquares() {
  squares.forEach((square) => {
    square.classList.remove("black");
    square.style.backgroundColor = "white";
  });
}

CLEARBUTTON.addEventListener("click", clearAllSquares);
