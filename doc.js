// Select all the buttons in the sidebar
const buttons = document.querySelectorAll('.js-btn');

// Function to handle click events and highlight selected item
buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Remove 'selected' class from all buttons
    buttons.forEach(btn => btn.classList.remove('selected'));
    // Add 'selected' class to the clicked button
    this.classList.add('selected');

    // Scroll to the corresponding section
    const targetSection = document.querySelector(`.${this.textContent.toLowerCase().replace(/\s+/g, '-')}`);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Get the hamburger button and the sidebar
const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.doc__nav');

// Add click event to toggle sidebar visibility
hamburgerMenu.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

