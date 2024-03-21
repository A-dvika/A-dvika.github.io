// script.js

document.addEventListener("DOMContentLoaded", function() {
    const scrollRight = document.getElementById("scrollRight");
    const productListContainer = document.querySelector(".product-list-container");
  
    console.log("Initial Scroll Left:", productListContainer.scrollLeft);
  
    scrollRight.addEventListener("click", function() {
      console.log("Clicked!");
      productListContainer.scrollBy({
        top: 0, 
        left: 620, 
        behavior: 'smooth'
      });
      console.log("Scroll Left After:", productListContainer.scrollLeft);
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
  
  