// JavaScript for toggling the hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navigation');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('show'); // Toggles the 'show' class to show/hide the menu
    });
});
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = `@ ${currentYear} Isaac Hooper Ghana`;
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;