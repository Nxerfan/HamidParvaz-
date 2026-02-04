// انتخاب کارت‌ها
const travelCards = document.querySelectorAll(".TravelCard");

// گرفتن اسم فایل صفحه فعلی
const currentPage = window.location.pathname.split("/").pop();

// فعال‌سازی کارت مربوط به همان صفحه
travelCards.forEach((card) => {
  if (card.dataset.page === currentPage) {
    card.classList.add("Active");
  }

  // کلیک دستی کاربر
  card.addEventListener("click", () => {
    travelCards.forEach((c) => c.classList.remove("Active"));
    card.classList.add("Active");
  });
});


// جابجایی مبدا و مقصد (مشترک بین صفحات)
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
