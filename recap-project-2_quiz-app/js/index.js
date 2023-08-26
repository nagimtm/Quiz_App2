const bookmarkIcon = document.querySelectorAll(".question-card__icon");
const questionCardButton = document.querySelectorAll(".question-card__button");
const questionCardAnswer = document.querySelectorAll(".question-card__answer");

const answers = [
  "flex-direction: column",
  "to provide equal access and equal opportunity to people with disabilities.",
  "The positions: static, absolute, fixed, relative, sticky, initial, inherit",
];

bookmarkIcon.forEach((icons) => {
  icons.addEventListener("click", () => {
    toggle(icons, icons.alt);
  });
});

function toggle(elem, alt) {
  if (alt === "bookmark") {
    elem.setAttribute("src", "./assets/bookmark_filled.png");
    elem.setAttribute("alt", "bookmark filled");
    return;
  }
  elem.setAttribute("src", "./assets/bookmark.png");
  elem.setAttribute("alt", "bookmark");
  return;
}

questionCardAnswer.forEach((answer_card, index = 0) => {
  answer_card.textContent = answers[index];
  index++;
});

questionCardButton.forEach((btn, index = 0) => {
  btn.setAttribute("data-js", `${index}`);
  index++;
  btn.addEventListener("click", () => {
    if (btn.textContent === "show answer") {
      btn.textContent = "hide answer";
    } else {
      btn.textContent = "show answer";
    }
    const indexBtn = btn.attributes["data-js"].value;
    showHideAnswer(indexBtn);
  });
});

function showHideAnswer(indexBtn) {
  if (indexBtn == 0) {
    return questionCardAnswer[indexBtn].classList.toggle("show");
  } else if (indexBtn == 1) {
    return questionCardAnswer[indexBtn].classList.toggle("show");
  } else if (indexBtn == 2) {
    return questionCardAnswer[indexBtn].classList.toggle("show");
  }
}
