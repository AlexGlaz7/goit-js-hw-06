const buttonPlus = document.querySelector('[data-action="increment"]');
const myClickPlus = () => {
  const itemRef = document.querySelector("#value");
  let clicks = Number(itemRef.textContent);
  clicks += 1;
  itemRef.textContent = clicks;
  console.log(clicks);
};

const buttonMinus = document.querySelector('[data-action="decrement"]');
const myClickMinus = () => {
  const itemRef = document.querySelector("#value");
  let clicks = Number(itemRef.textContent);
  clicks -= 1;
  itemRef.textContent = clicks;
  console.log(clicks);
};
buttonPlus.addEventListener("click", myClickPlus);
buttonMinus.addEventListener("click", myClickMinus);
