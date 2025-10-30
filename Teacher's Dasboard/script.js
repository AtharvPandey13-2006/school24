// script.js for Teacher's Dashboard
// Add your JavaScript logic here

// Date and Time
function updateDateTime() {
  const now = new Date();
  const datetimeElem = document.getElementById("datetime");
  if (datetimeElem) {
    datetimeElem.textContent = now.toLocaleString();
  }
}

// Theme Toggle
function setupThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("light-theme");
    themeToggle.textContent = document.documentElement.classList.contains("light-theme") ? "🌙" : "☀️";
    localStorage.setItem('teacher-theme', document.documentElement.classList.contains("light-theme") ? 'light' : 'dark');
  });
  // Load saved theme
  const savedTheme = localStorage.getItem('teacher-theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light-theme');
    themeToggle.textContent = "🌙";
  } else {
    document.documentElement.classList.remove('light-theme');
    themeToggle.textContent = "☀️";
  }
}

// Assessments Buttons (Bottom)
function setupAssessmentButtons() {
  const footer = document.querySelector('footer.assessments');
  if (!footer) return;
  footer.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      alert(`Assessment: ${btn.textContent}`);
      // You can replace this with modal or navigation logic
    });
  });
}

// Module Cards (Center)
function setupModuleCards() {
  document.querySelectorAll('.module-card').forEach(card => {
    card.addEventListener('click', () => {
      alert(`Module: ${card.textContent.trim()}`);
      // You can replace this with navigation or modal logic
    });
  });
}

// Subject Cards (Right)
function setupSubjectCards() {
  document.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', () => {
      alert(`Subject: ${card.textContent.trim()}`);
      // You can replace this with filtering or navigation logic
    });
  });
}

// Class Dropdown (Center)
function setupClassDropdown() {
  const dropdown = document.querySelector('.class-dropdown');
  if (!dropdown) return;
  dropdown.addEventListener('change', () => {
    // Example: update student count or filter modules
    document.querySelector('.student-count').textContent = `Number of Students : ${Math.floor(Math.random()*50+20)}`;
  });
}

// Initialize all
window.addEventListener('DOMContentLoaded', () => {
  updateDateTime();
  setInterval(updateDateTime, 1000);
  setupThemeToggle();
  setupAssessmentButtons();
  setupModuleCards();
  setupSubjectCards();
  setupClassDropdown();
});
