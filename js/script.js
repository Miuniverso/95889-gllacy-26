let feedbackBtn = document.querySelector(".information-btn");
let feedbackForm = document.querySelector(".feedback-form");
let overlay = document.querySelector(".overlay");
let closeFormBtn = document.querySelector(".feedback-close-btn");
let form = document.querySelector(".feedback-form");
let name = feedbackForm.querySelector("[name=name-last-name-input]");
let email = feedbackForm.querySelector("[name=email-comment-input]");
let comment = feedbackForm.querySelector("[name=comment-input]");

let isStorageSupport = true;
let storage = "";

 try {
   storageName = localStorage.getItem("name");
   storageEmail = localStorage.getItem("email");
 } catch (err) {
   isStorageSupport = false;
 }


feedbackBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackForm.classList.remove("visually-hidden");
  overlay.classList.remove("visually-hidden");
  if (storageName) {
      name.value = storageName;
      email.focus();
    } else {
      name.focus();
    }

    if (storageEmail) {
        email.value = storageEmail;
        comment.focus();
      } else {
        email.focus();
      }
})

closeFormBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackForm.classList.add("visually-hidden");
  overlay.classList.add("visually-hidden");
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (!feedbackForm.classList.contains("visually-hidden")) {
        console.log("Форма открыта")
        feedbackForm.classList.add("visually-hidden");
        overlay.classList.add("visually-hidden");
      }
    }
  });

form.addEventListener("submit", function(evt) {
  if (!name.value || !email.value || !comment.value) {
      evt.preventDefault();
      console.log("Нужно заполнить все поля");
    } else {
      if(isStorageSupport) {
        localStorage.setItem("name", name.value);
        localStorage.setItem("email", email.value);
      }
    }
})

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackForm.classList.add("visually-hidden");
  overlay.classList.add("visually-hidden");
})
