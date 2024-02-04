const colors = ["#a8e6cf", "#dcedc1", "#ffd3b6", "#ffaaa5", "#ff8b94"];

const button = document.querySelector("button");

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function bgColorSelector() {
  // document.body.style.backgroundColor = randomColor();
  // button.innerText = randomColor();
  const linearBg = `linear-gradient(90deg,${randomColor()}, ${randomColor()})`;
  document.body.style.background = linearBg;
  // document.body.style.backgroundColor = `linear-gradient(${randomColor()}, ${randomColor()})`;
  // document.body.style.backgroundColor = "linear-gradient(blue, red);";
}
button.addEventListener("click", bgColorSelector);
