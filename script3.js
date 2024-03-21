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
document.getElementById("download-button").addEventListener("click", function() {
  // Replace "google_drive_link" with the shareable link to your Google Drive file
  const googleDriveLink = "https://drive.google.com/file/d/1xaEzNnZquRa2J-RIzDVaXfGENo4ZFYoJ/view?usp=sharing";
  
  // Convert the shareable link to a direct download link
  const directDownloadLink = googleDriveLink.replace("open", "uc");
  
  // Create a temporary anchor element
  const tempAnchor = document.createElement("a");
  
  // Set the href attribute to the direct download link
  tempAnchor.setAttribute("href", directDownloadLink);
  
  // Set the download attribute to force download
  tempAnchor.setAttribute("download", "Advika_Thakur_Resume.pdf");
  
  // Simulate click on the anchor element
  tempAnchor.click();
  
  // Clean up
  tempAnchor.remove();
});

