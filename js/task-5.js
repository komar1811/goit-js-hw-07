function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColor = document.querySelector("button.change-color");
const body = document.querySelector("body");
const colorText = document.querySelector("span.color");

btnColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorText.textContent = color;
});
