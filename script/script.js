// Get a reference to the "Home" button
const homeButton = document.getElementById('homeButton');

// Get a reference to the sidebar
const sidebar = document.querySelector('.sidebar');

// Add a click event listener to the "Home" button
homeButton.addEventListener('click', () => {
    // Toggle the "open" class on the sidebar
    sidebar.classList.toggle('open');
});