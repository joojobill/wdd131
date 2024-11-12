// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year in the first <span> element
document.getElementById('currentyear').textContent = `@ ${currentYear} Isaac Hooper Ghana`;

// Get the last modified date from the document
const lastModified = document.lastModified;

// Set the last modified date in the second <span> element
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;
