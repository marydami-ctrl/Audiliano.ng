document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const heading = document.querySelector(".heading");

  // Toggle 'active' class to show/hide the menu
  menuButton.addEventListener("click", () => {
    heading.classList.toggle("active");
  });
});
