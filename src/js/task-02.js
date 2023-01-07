const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.getElementById("ingredients");
const ingredientArray = [];

for(const ingredient of ingredients){
 const createEl = document.createElement("li");
 createEl.textContent = ingredient;
  createEl.classList.add("item");
  ingredientArray.push(createEl);
};

 listEl.append(...ingredientArray); 