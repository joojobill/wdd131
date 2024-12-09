const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
const productSelect = document.getElementById("product");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id; // Use product id as value
    option.textContent = product.name; // Use product name for display
    productSelect.appendChild(option);
});
const form = document.getElementById("reviewForm");
form.addEventListener("submit", () => {
    // Retrieve the current review count from localStorage
    let reviewCount = localStorage.getItem("reviewCount");
    reviewCount = reviewCount ? parseInt(reviewCount) : 0;

    // Increment and save the new count
    localStorage.setItem("reviewCount", reviewCount + 1);
});
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = `@ ${currentYear} Isaac Hooper Ghana`;
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;