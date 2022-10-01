const cardRating = document.querySelector(".card--rating");
const cardThankyou = document.querySelector(".card--thankyou");
const submit = document.getElementById("submit");
const rateAgain = document.getElementById("rate--again");
let rating = "";
const ratingInput = document.getElementById("rating");
const number = document.querySelectorAll(".btn");
const body = document.getElementById("body");

number.forEach((number) => {
  number.addEventListener("click", (e) => {
    e.stopPropagation();
    rating = number.innerHTML;
    ratingInput.innerHTML = rating;
    console.log(rating);
    submit.classList.remove("inactive");
  });
});

submit.addEventListener("click", () => {
  if (submit.classList.contains("inactive")) {
  } else {
    cardThankyou.classList.remove("hidden");
    cardRating.classList.add("hidden");
  }
});

rateAgain.addEventListener("click", () => {
  cardThankyou.classList.add("hidden");
  cardRating.classList.remove("hidden");
  submit.classList.add("inactive");
});

body.addEventListener("click", () => {
  submit.classList.add("inactive");
});
