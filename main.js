// بخش انتخاب کارت‌های سفر
const travelCards = document.querySelectorAll(".TravelCard");

travelCards.forEach((card) => {
  card.addEventListener("click", function () {
    travelCards.forEach((c) => c.classList.remove("Active"));
    this.classList.add("Active");
  });
});

// بخش جابجایی مبدا و مقصد
const swapButton = document.querySelector(".swap-button");
const originInput = document.querySelector(".origin input");
const destinationInput = document.querySelector(".destination input");

if (swapButton && originInput && destinationInput) {
  swapButton.addEventListener("click", function () {
    const temp = originInput.value;
    originInput.value = destinationInput.value;
    destinationInput.value = temp;
  });
}
