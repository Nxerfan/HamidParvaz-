//HeaderCards
const travelCards = document.querySelectorAll(".travel-card");

travelCards.forEach((card) => {
  card.addEventListener("click", function () {
    travelCards.forEach((c) => c.classList.remove("active"));
    this.classList.add("active");
  });
});

const swapButton = document.querySelector(".swap-button");
const originInput = document.querySelector(".origin input");
const destinationInput = document.querySelector(".destination input");

swapButton.addEventListener("click", function () {
  const temp = originInput.value;
  originInput.value = destinationInput.value;
  destinationInput.value = temp;
});




