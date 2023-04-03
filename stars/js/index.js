console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

  for (let i = 1; i <= 5; i++) {
    const Star = document.createElement("img");
    if (i <= filledStars) {
      Star.setAttribute("src", "assets/star-filled.svg");
    } else {
      Star.setAttribute("src", "assets/star-empty.svg");
    }
    Star.addEventListener("click", () => {
      renderStars(i);
    });
    starContainer.append(Star);
  }
  //--^-- your code here --^--
}
renderStars();
