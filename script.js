const SQUARECONTAINER = document.querySelector("#square-container");
const BLACKBUTTON = document.querySelector("#black");
const RANDOMBUTTON = document.querySelector("#random");
const CLEARBUTTON = document.querySelector("#clear");
const displayBorderToggle = document.querySelector("#toggle");
const screenWidth = 50.2;
const SLIDER = document.getElementById("slider");
const SLIDERTEXT = document.getElementById("sliderText");

let dimension = 16;

let selectedColor = "Black";
let isMouseDown = false;

generateSquares(dimension);
let squares = document.querySelectorAll(".square");
addEventListenerToSquares();

function setSquareWidth(squareDimension) {
  return screenWidth / squareDimension;
}

function generateSquares(dimension) {
  let totalSquares = dimension * dimension;

  for (let row = 0; row < totalSquares; row++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${setSquareWidth(dimension)}rem`;
    SQUARECONTAINER.appendChild(square);
  }
}

function fillBlackColor(element) {
  element.style.backgroundColor = "black";
}

function removeSquaresInContainer() {
  SQUARECONTAINER.innerHTML = "";
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

function toggleActiveButton(activeButton, inActiveButton) {
  activeButton.classList.toggle("active");
  inActiveButton.classList.toggle("active");
}

function clearAllSquares() {
  squares.forEach((square) => {
    square.classList.remove("black");
    square.style.backgroundColor = "white";
  });
}

function addEventListenerToSquares() {
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
}

CLEARBUTTON.addEventListener("click", clearAllSquares);

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

SLIDER.addEventListener("input", (e) => {
  dimension = e.target.value;
  SLIDERTEXT.textContent = `Size: ${dimension} x ${dimension}`;
});

SLIDER.addEventListener("mouseup", () => {
  removeSquaresInContainer();
  generateSquares(dimension);
  squares = document.querySelectorAll(".square");
  addEventListenerToSquares();
});
