const btns = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");

function updateSection(index) {
  sections.forEach((section, i) => {
    section.classList.toggle("is-active", i === index);
  });
}

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    updateSection(index);
  });
});

// Initial update to set the active section based on the first button
updateSection(0);

document.addEventListener('mousemove', (e) => {
  const cursor = document.getElementById('cursor');
  const pointingLight = document.querySelector('.pointing-light');
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
  pointingLight.style.width = '100px';
  pointingLight.style.height = '100px';
});

document.addEventListener('mouseleave', () => {
  const pointingLight = document.querySelector('.pointing-light');
  pointingLight.style.width = '20px';
  pointingLight.style.height = '20px';
});
document.querySelector('.download-link').addEventListener('click', function(event) {
  const firecracker = this.parentElement.querySelector('.firecracker'); // Select firecracker relative to the clicked button
  firecracker.style.left = event.clientX - 4 + 'px'; // Adjust position to center firecracker
  firecracker.style.top = event.clientY - 4 + 'px'; // Adjust position to center firecracker
  firecracker.style.display = 'block';
  setTimeout(() => {
      firecracker.style.display = 'none';
  }, 500); // Adjust duration of the animation
});
