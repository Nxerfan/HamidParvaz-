document.addEventListener("DOMContentLoaded", function () {
  const filterBtn = document.getElementById("filterBtn");
  const filterContent = document.getElementById("filterContent");
  const rangeInputs = document.querySelectorAll(".rangeInputs input");
  const progress = document.querySelector(".sliderProgress");
  const displayMin = document.querySelector(".displayMin");
  const displayMax = document.querySelector(".displayMax");
  
  const priceGap = 50000;

  // Toggle Dropdown Panel
  filterBtn.addEventListener("click", () => {
    filterContent.classList.toggle("open");
    const icon = filterBtn.querySelector("i");
    icon.classList.toggle("fa-angle-up");
    icon.classList.toggle("fa-angle-down");
  });

  function formatPrice(value) {
    return parseInt(value).toLocaleString("fa-IR");
  }

  function updateSlider() {
    let minVal = parseInt(rangeInputs[0].value);
    let maxVal = parseInt(rangeInputs[1].value);

    if (maxVal - minVal < priceGap) {
      if (this.classList.contains("rangeMin")) {
        rangeInputs[0].value = maxVal - priceGap;
      } else {
        rangeInputs[1].value = minVal + priceGap;
      }
    } else {
      displayMin.textContent = formatPrice(rangeInputs[0].value);
      displayMax.textContent = formatPrice(rangeInputs[1].value);

      // RTL Calculations
      const minPercent = (rangeInputs[0].value / rangeInputs[0].max) * 100;
      const maxPercent = 100 - (rangeInputs[1].value / rangeInputs[1].max) * 100;

      progress.style.right = minPercent + "%";
      progress.style.left = maxPercent + "%";
    }
  }

  rangeInputs.forEach((input) => {
    input.addEventListener("input", updateSlider);
  });

  // Set initial state
  updateSlider.call(rangeInputs[0]);
});