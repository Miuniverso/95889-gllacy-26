let feedbackBtn = document.querySelector(".information-btn");
let feedbackForm = document.querySelector(".feedback-form");
let closeFormBtn = document.querySelector(".feedback-close-btn");
let paginatorItems = document.querySelectorAll(".paginator-item");

//
// feedbackBtn.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   feedbackForm.classList.remove("visually-hidden");
// })
//
// closeFormBtn.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   feedbackForm.classList.add("visually-hidden");
// })


// что-то я не то делаю. Добавить класс могу, но не могу убрать его
// у предыдущей выбранной ссылки :(

paginatorItems.forEach(item => item.addEventListener("click", function() {
  console.log("Before");
  item.classList.remove("paginator-item-current");
  console.log("Delete for all");
  this.classList.add("paginator-item-current");
  console.log("After");
}));
