const form = document.querySelector("form");
const textarea = document.querySelectorAll("textarea");
const leftCharacter = document.querySelectorAll(".left-chars");
const input = document.querySelector("input");

const answersArr = [];

textarea.forEach((el, index = 0) => {
  el.addEventListener("input", (event) => {
    const target = event.currentTarget;
    el.setAttribute("data-js", index);
    const dataJs = el.getAttribute("data-js");
    const maxLength = target.getAttribute("maxlength");
    const currentLength = target.value.length;
    leftChars(dataJs, currentLength, maxLength);
  });
});

function leftChars(index, currentLength, maxLength) {
  if (currentLength >= maxLength) {
    return (leftCharacter[index].textContent =
      "You have reached the maximum number of characters.");
  } else if (currentLength == 149) {
    return (leftCharacter[index].textContent = `${
      maxLength - currentLength
    } character left`);
  }
  return (leftCharacter[index].textContent = `${
    maxLength - currentLength
  } characters left`);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const dataForm = new FormData(event.target);
  const data = Object.fromEntries(dataForm);
  const section = document.createElement("section");
  section.classList.add("question-card");
  const image = document.createElement("img");
  image.classList.add("question-card__icon");
  image.setAttribute("src", "./assets/bookmark.png");
  image.setAttribute("alt", "bookmark");
  const questionCardTitle = document.createElement("h2");
  questionCardTitle.classList.add("question-card__title");
  questionCardTitle.textContent = data.question;
  const questionCardButton = document.createElement("button");
  questionCardButton.classList.add("question-card__button");
  questionCardButton.textContent = "show answer";
  const answerP = document.createElement("p");
  answerP.classList.add("question-card__answer");
  answerP.textContent = data.answer;
  answersArr.push(data.answer);
  const tagDiv = document.createElement("div");
  tagDiv.classList.add("question-card__tags");
  const questionCardTag = document.createElement("div");
  questionCardTag.classList.add("uestion-card__tag");
  questionCardTag.textContent = data.tag;
  tagDiv.append(questionCardTag);
  section.append(image, questionCardTitle, questionCardButton, answerP, tagDiv);
  //   const script = document.createElement("script");
  //   script.setAttribute("src", "./js/index.js");
  const body = document.querySelector("body");
  body.append(section);
  form.reset();
  textarea[0].focus();
  newFunction();
});
function newFunction() {
  const bookmarkIcon = document.querySelectorAll(".question-card__icon");
  const questionCardButton = document.querySelectorAll(
    ".question-card__button"
  );
  const questionCardAnswer = document.querySelectorAll(
    ".question-card__answer"
  );

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
    answer_card.textContent = answersArr[index];
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
}
