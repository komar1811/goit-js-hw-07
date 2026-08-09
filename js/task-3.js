const input = document.querySelector("input#name-input");

const name = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  if (event.currentTarget.value.trim().length !== 0) {
    name.textContent = event.currentTarget.value.trim();
  }
});
