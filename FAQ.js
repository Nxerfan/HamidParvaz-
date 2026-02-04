
//FAQ
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".Button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const faq = button.closest(".FAQ");
      const answer = faq.querySelector(".ansure");
      const icon = button.querySelector(".Icon");

      if (answer.style.display === "block") {
        answer.style.display = "none";
        answer.style.transition = "0.3s"
        icon.textContent = "+";
      } else {
        answer.style.display = "block";
        answer.style.transition = "0.3s"
        icon.textContent = "-";
      }
    });
  });
});