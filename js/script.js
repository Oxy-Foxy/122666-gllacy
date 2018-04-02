var feedback = document.querySelector(".call-feedback");
var feedbackModal = document.querySelector(".feedback-wrapper");
var feedbackClose = document.querySelector(".feedback-close");

feedback.addEventListener("click", function(e) {
  e.preventDefault();
  feedbackModal.classList.add("js-feedback-show");
});

feedbackClose.addEventListener("click", function(e) {
  e.preventDefault();
  feedbackModal.classList.remove("js-feedback-show");
})
