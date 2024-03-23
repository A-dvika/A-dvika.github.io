const btns = document.querySelectorAll('.indicator .btn');
const slides = document.querySelectorAll('.slide-col');

// Add click event listeners to each button
btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // Remove the 'active' class from all buttons
    btns.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Add the 'active' class to the clicked button
    btn.classList.add('active');

    // Hide all slides
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    // Display the corresponding slide
    slides[index].style.display = 'block';
  });
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

