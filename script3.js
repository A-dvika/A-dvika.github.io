const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  
  // Corrected the condition here
  if (targetSection !== card.getAttribute("data-state")) {
    card.classList.add("is-active");
  } else {
    card.classList.remove("is-active");
  }
  
  card.setAttribute("data-state", targetSection);
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};


buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const projectTilesContainer = document.querySelector(".project-tiles-container");
  const projectTiles = document.querySelectorAll(".project-tile");
  const arrowPrev = document.querySelector(".arrow-prev");
  const arrowNext = document.querySelector(".arrow-next");
  let currentIndex = 0;

  // Function to update the visibility of project tiles
  const updateProjectTiles = () => {
    projectTiles.forEach((tile, index) => {
      const translateValue = `translateX(-${currentIndex * 100}%)`;
      tile.style.transform = translateValue;
    });
  };

  // Event listener for the previous arrow
  arrowPrev.addEventListener("click", function () {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateProjectTiles();
  });

  // Event listener for the next arrow
  arrowNext.addEventListener("click", function () {
    currentIndex = Math.min(currentIndex + 1, projectTiles.length - 1);
    updateProjectTiles();
  });
});
