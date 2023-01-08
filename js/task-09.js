const btnRef = document.querySelector(".change-color");
const outputRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

btnRef.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = outputRef.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
