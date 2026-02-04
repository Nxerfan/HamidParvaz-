    document.addEventListener("DOMContentLoaded", function () {
        // تابع مدیریت باز و بسته شدن دراپ‌داون‌ها
        function setupDropdown(btnId, contentId) {
            const btn = document.getElementById(btnId);
            const content = document.getElementById(contentId);

            if (btn && content) {
                btn.addEventListener("click", () => {
                    content.classList.toggle("open");
                    btn.classList.toggle("active");

                    const icon = btn.querySelector("i");
                    if (icon) {
                        if (content.classList.contains("open")) {
                            icon.classList.replace("fa-angle-down", "fa-angle-up");
                        } else {
                            icon.classList.replace("fa-angle-up", "fa-angle-down");
                        }
                    }
                });
            }
        }

        // فعال‌سازی تمام دراپ‌داون‌ها
        setupDropdown("filterBtn", "filterContent");   // قیمت
        setupDropdown("HotelStarBtn", "HotelStarContent");   // قیمت
        setupDropdown("classBtn", "classContent");     // کلاس پروازی
        setupDropdown("timeBtn", "timeContent");       // زمان
        setupDropdown("airlineBtn", "airlineContent"); // شرکت‌های هواپیمایی (جدید)
        setupDropdown("baggageBtn", "baggageContent"); // مقدار بار مجاز
        setupDropdown("tagsBtn", "tagsContent"); // برچسب‌ها

        // --- کد اسلایدر قیمت (بدون تغییر) ---
        const rangeInputs = document.querySelectorAll(".rangeInputs input");        
        const progress = document.querySelector(".sliderProgress");
        const displayMin = document.querySelector(".displayMin");
        const displayMax = document.querySelector(".displayMax");
        const priceGap = 50000;

        function formatPrice(value) {
            return parseInt(value).toLocaleString("fa-IR");
        }

        function updateSlider() {
            if (rangeInputs.length < 2) return;
            let minVal = parseInt(rangeInputs[0].value);
            let maxVal = parseInt(rangeInputs[1].value);

            if (maxVal - minVal < priceGap) {
                if (this && this.classList.contains("rangeMin")) {
                    rangeInputs[0].value = maxVal - priceGap;
                } else {
                    rangeInputs[1].value = minVal + priceGap;
                }
            } else {
                if (displayMin) displayMin.textContent = formatPrice(rangeInputs[0].value);
                if (displayMax) displayMax.textContent = formatPrice(rangeInputs[1].value);
                const minPercent = (rangeInputs[0].value / rangeInputs[0].max) * 100;
                const maxPercent = 100 - (rangeInputs[1].value / rangeInputs[1].max) * 100;
                if (progress) {
                    progress.style.right = minPercent + "%";
                    progress.style.left = maxPercent + "%";
                }
            }
        }

        rangeInputs.forEach((input) => {
            input.addEventListener("input", updateSlider);
        });

        if (rangeInputs.length > 0) {
            updateSlider.call(rangeInputs[0]);
        }
    });