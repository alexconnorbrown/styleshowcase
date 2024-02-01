// JavaScript interactions and animations

// Toggle Elements
let isElementVisible = true;

function toggleElement() {
  const paragraph = document.getElementById("toggle-paragraph");
  isElementVisible = !isElementVisible;
  paragraph.style.display = isElementVisible ? "block" : "none";
}

// Dropdown Menus
let isDropdownOpen = false;

function toggleDropdown() {
  const dropdownContent = document.getElementById("dropdown-content");
  isDropdownOpen = !isDropdownOpen;
  dropdownContent.style.display = isDropdownOpen ? "block" : "none";
}

// Modal Windows
function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Countdown Timer
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const currentTime = new Date();
  const targetTime = new Date("2024-12-31T00:00:00Z");
  const timeDifference = targetTime - currentTime;

  if (timeDifference <= 0) {
    countdownElement.textContent = "00:00:00";
  } else {
    const hours = Math.floor(timeDifference / 3600000);
    const minutes = Math.floor((timeDifference % 3600000) / 60000);
    const seconds = Math.floor((timeDifference % 60000) / 1000);

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    countdownElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
}

setInterval(updateCountdown, 1000);

// Particle Effect
const particlesContainer = document.querySelector(".particles");

function createParticle() {
  const particle = document.createElement("div");
  particle.className = "particle";
  const size = Math.random() * 30 + 10;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  const x = Math.random() * particlesContainer.offsetWidth;
  const y = Math.random() * particlesContainer.offsetHeight;
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particlesContainer.appendChild(particle);

  setTimeout(() => {
    particlesContainer.removeChild(particle);
  }, 2000);
}

setInterval(createParticle, 500);

// Drag and Drop
const draggable = document.getElementById("draggable");

draggable.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", "Drag me!");
});

const dragContainer = document.getElementById("drag-container");

dragContainer.addEventListener("dragover", (event) => {
  event.preventDefault();
});

dragContainer.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  if (data === "Drag me!") {
    dragContainer.appendChild(draggable);
  }
});

// Canvas Animation
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw a rotating square
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((Math.PI / 180) * 2);
  ctx.fillStyle = "#e74c3c";
  ctx.fillRect(-25, -25, 50, 50);
  ctx.restore();

  requestAnimationFrame(draw);
}

draw();

// Scroll Spy
const sections = document.querySelectorAll(".scroll-spy-section");
const navItems = document.querySelectorAll(".scroll-spy-nav li a");

function highlightNavItem(currentIndex) {
  navItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function scrollSpy() {
  const scrollPosition = window.scrollY;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.clientHeight;

    if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
      highlightNavItem(index);
    }
  });
}

window.addEventListener("scroll", scrollSpy);

// Scroll to Top Button
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Interactive Form
const form = document.getElementById("demo-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  alert(`Form submitted:\nName: ${name}\nEmail: ${email}`);
});

// Dynamic Chart
const chartCanvas = document.getElementById("chart");
const chartCtx = chartCanvas.getContext("2d");

function drawChart() {
  chartCtx.clearRect(0, 0, chartCanvas.width, chartCanvas.height);

  // Example chart drawing
  chartCtx.fillStyle = "#3498db";
  chartCtx.fillRect(50, 50, 150, 100);
}

drawChart();

// 3D Transformation (Cube Rotation)
const cube = document.querySelector(".cube");

function rotateCube() {
  cube.style.transform = `rotateY(${(Date.now() / 5) % 360}deg)`;
  requestAnimationFrame(rotateCube);
}

rotateCube();
