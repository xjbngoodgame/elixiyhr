const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggleButton.textContent = "☀️";
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("light");
  if (body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    toggleButton.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "🌙";
  }
});
