const rangeRef = document.querySelector("#font-size-control");

rangeRef.addEventListener("input", (event) => {
    const textRef = document.querySelector("span");
    textRef.style.fontSize = event.currentTarget.value + "px";
});