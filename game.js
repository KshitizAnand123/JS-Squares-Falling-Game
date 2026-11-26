const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");

let score = 0;
// Starting up with functions

function createSquare() {
  const square = document.createElement("div");
  square.classList.add("square");

  // random horizontal position
  square.style.left = Math.random() * 360 + "px";
  square.style.top = "0px";

  gameArea.appendChild(square);

  let fallInterval = setInterval(() => {
    let top = parseInt(square.style.top);
    square.style.top = top + 5 + "px";

    // remove if it reaches bottom
    if (top > 460) {
      square.remove();
      clearInterval(fallInterval);
    }
  }, 50);

  // click event
  square.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    square.remove();
    clearInterval(fallInterval);
  });
}

// spawn squares every second
setInterval(createSquare, 1000);