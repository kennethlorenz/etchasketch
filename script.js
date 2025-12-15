const SQUARECONTAINER = document.querySelector("#square-container");

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
console.log(squares);

function fillBlackColor(element) {
  element.classList.add("black");
}

let isMouseDown = false;

squares.forEach((square) => {
  square.addEventListener("mousedown", (e) => {
    fillBlackColor(square);
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
      fillBlackColor(square);
    } else {
      return;
    }
  });
});
