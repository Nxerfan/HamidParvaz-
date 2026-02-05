const travelCards = document.querySelectorAll(".TravelCard");
const currentPage = window.location.pathname.split("/").pop();
travelCards.forEach((card) => {
  if (card.dataset.page === currentPage) {
    card.classList.add("Active");
  }

  card.addEventListener("click", () => {
    travelCards.forEach((c) => c.classList.remove("Active"));
    card.classList.add("Active");
  });
});
const swapButton = document.querySelector(".swap-button");
const originInput = document.querySelector(".origin input");
const destinationInput = document.querySelector(".destination input");

if (swapButton && originInput && destinationInput) {
  swapButton.addEventListener("click", () => {
    [originInput.value, destinationInput.value] = [
      destinationInput.value,
      originInput.value,
    ];
  });
}
