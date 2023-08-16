function submitRating(event) {
  // Get selected radio input
  const selectedRating = document.querySelector("input[name='rating']:checked");

  // Check if a rating was selected
  if (selectedRating == null) {
    const ratingError = document.getElementById("rating-error");
    ratingError.textContent = "Please select a rating";
  } else {
    // Update the text on the Thank You message
    const displayedRating = document.getElementById("js-rating");
    displayedRating.textContent = selectedRating.value;

    // Hide form and display Thank You message
    const ratingState = document.querySelector(".card-state__rating");
    const thankYouState = document.querySelector(".card-state__thank-you");
    ratingState.classList.add("hidden");
    thankYouState.classList.remove("hidden");
  }

  event.preventDefault();
}

const form = document.getElementById("form");
form.addEventListener("submit", submitRating);