let feedbackBtn = document.querySelector(".information-btn");
let feedbackForm = document.querySelector(".feedback-form");
let closeFormBtn = document.querySelector(".feedback-close-btn");

feedbackBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackForm.classList.remove("visually-hidden");
})

closeFormBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackForm.classList.add("visually-hidden");
})
