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
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...


    {
        templeName: " Aba Nigeria Temple",
        location: " Aba Nigeria",
        dedicated: " 2005, August, 7",
        area: 11500,
        imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        
    },
    {
        templeName: "Accra Ghana Temple",
        location: " Greater Accra Ghana",
        dedicated: " 2004, January, 11",
        area: 17500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-thumb.jpg"
    },
    {
        templeName: "Apia Samoa Temple",
        location: "Samoa",
        dedicated: "2005, September, 4",
        area: 18691,
        imageUrl: 
        "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-8652-thumb.jpg"
    }
  ];
const templeContainer = document.getElementById('temple-container');
temples.forEach(temple => {
    const card = document.createElement('div');
    card.classList.add('temple-card');
    const name = document.createElement('h2');
    name.textContent = temple.templeName;
    card.appendChild(name);

    const location = document.createElement('p');
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
    card.appendChild(location);

    const dedicated = document.createElement('p');
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
    card.appendChild(dedicated);

    const area = document.createElement('p');
    area.innerHTML = `<strong>Total Area:</strong> ${temple.area.toLocaleString()} sq. ft.`;
    card.appendChild(area);

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName}`;
    img.loading = 'lazy'; // Native lazy loading
    card.appendChild(img);

    templeContainer.appendChild(card);


    });