var feedbackModal = document.querySelector(".feedback-wrapper");
var feedback = document.querySelector(".call-feedback");
var feedbackClose = document.querySelector(".feedback-close");
var form = feedbackModal.querySelector(".feedback");
var name = form.querySelector("#feedback-name");
var email = form.querySelector("#feedback-email");
var message = form.querySelector("#feedback-textfield");


feedback.addEventListener("click", function(e) {
  e.preventDefault();
  feedbackModal.classList.add("js-feedback-show", "get-big");

});

feedbackClose.addEventListener("click", function(e) {
  e.preventDefault();
  feedbackModal.classList.remove("js-feedback-show");
  form.classList.remove("modal-error");
});

form.addEventListener("submit", function(e) {
  if(!name.value || !email.value || !message.value) {
    e.preventDefault();
    form.classList.add("modal-error");
  }
  else {
    
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("message", message.value);
  }
});
