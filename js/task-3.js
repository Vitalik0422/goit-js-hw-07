const input = document.querySelector("#name-input");
const textOut = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  e.preventDefault();
  const text = e.target.value.trim();
  if (!text) {
    textOut.textContent = "Anonymous";
    return;
  }
  textOut.textContent = text;
});
