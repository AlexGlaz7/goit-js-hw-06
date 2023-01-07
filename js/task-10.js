function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxesEl = document.getElementById("boxes");

const createBoxes = (amount) => {
  const addBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    addBoxes.push(div);
  }
  return addBoxes;
};

btnCreate.addEventListener("click", () => {
  let boxesToAdd = createBoxes(inputEl.value);
  boxesEl.append(...boxesToAdd);
});

const destroyBoxes = () => {
  boxesEl.innerHTML = "";
};

btnDestroy.addEventListener("click", destroyBoxes);
