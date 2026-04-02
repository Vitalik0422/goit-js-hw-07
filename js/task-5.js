const changeBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const bodyEl = document.querySelector("body");

changeBtn.addEventListener("click", () => {
  const colorHex = getRandomHexColor();
  bodyEl.style.backgroundColor = colorHex;
  colorSpan.textContent = colorHex;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
