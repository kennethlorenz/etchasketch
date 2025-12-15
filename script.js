const SQUARECONTAINER = document.querySelector("#square-container");
const BLACKBUTTON = document.querySelector("#black");
const RANDOMBUTTON = document.querySelector("#random");

let selectedColor = "Black";
let isMouseDown = false;

function generateSquares() {
  let dimension = 16;
  let totalSquares = dimension * dimension;

  for (let row = 0; row < totalSquares; row++) {
    let square = document.createElement("div");
    square.classList.add("square");
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
