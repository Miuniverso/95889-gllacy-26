let feedbackBtn = document.querySelector(".information-btn");
let feedbackForm = document.querySelector(".feedback-form");
let overlay = document.querySelector(".overlay");
let closeFormBtn = document.querySelector(".feedback-close-btn");
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


// Открытие формы

feedbackBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackForm.classList.remove("visually-hidden");
  feedbackForm.classList.add("modal-show");
  overlay.classList.remove("visually-hidden");

  if(storageName || storageEmail) {
    name.value = storageName;
    email.value = storageEmail;
    comment.focus();
  } else if (storageName) {
    name.value = storageName;
    email.focus();
  } else {
    name.focus();
  }
})

// Закрытие формы

closeFormBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackForm.classList.add("visually-hidden");
  overlay.classList.add("visually-hidden");
  feedbackForm.classList.remove("modal-error");
  feedbackForm.classList.remove("modal-show");
})

// закрытие по esc

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (!feedbackForm.classList.contains("visually-hidden")) {
        console.log("Форма открыта")
        feedbackForm.classList.add("visually-hidden");
        feedbackForm.classList.remove("modal-error");
        overlay.classList.add("visually-hidden");
      }
    }
  });

  // проверка заполненности формы

feedbackForm.addEventListener("submit", function(evt) {
  if (!name.value || !email.value || !comment.value) {
      evt.preventDefault();
      feedbackForm.classList.remove("modal-error");
      feedbackForm.offsetWidth = feedbackForm.offsetWidth;
      feedbackForm.classList.add("modal-error")
      console.log("Нужно заполнить все поля");
    } else {
      if(isStorageSupport) {
        localStorage.setItem("name", name.value);
        localStorage.setItem("email", email.value);
      }
    }
})

// Фоновое затемнение

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackForm.classList.add("visually-hidden");
  overlay.classList.add("visually-hidden");
})
