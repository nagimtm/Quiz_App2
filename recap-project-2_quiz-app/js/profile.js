const checkBoxDark = document.querySelector("#dark-mode");

checkBoxDark.addEventListener("input", (event) => {
  event.preventDefault();
  const main = document.querySelector("main");
  return main.classList.toggle("profile_black_main");
});
