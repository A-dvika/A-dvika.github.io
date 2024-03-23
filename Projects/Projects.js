

const btns = document.querySelectorAll(".btn");
const slideRow = document.getElementById("slide-row");
const main = document.querySelector("main");

let currentIndex = 0;

function updateSlide() {
  const mainWidth = main.offsetWidth;
  const translateValue = currentIndex * -mainWidth;
  slideRow.style.transform = `translateX(${translateValue}px)`;

  btns.forEach((btn, index) => {
    btn.classList.toggle("active", index === currentIndex);
  });
}

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currentIndex = index;
    updateSlide();
  });
});

window.addEventListener("resize", () => {
  updateSlide();
});

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

