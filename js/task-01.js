const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.childElementCount}`);

const list2 = list.querySelectorAll(".item");
list2.forEach(function (n, i) {
  console.log("Category: " + list2[i].firstElementChild.textContent);
  console.log("Elements: " + list2[i].lastElementChild.childElementCount);
});
