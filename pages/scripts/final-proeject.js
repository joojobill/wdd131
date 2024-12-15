// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            hamburger.classList.toggle('active');
        });

        navLinks.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                navLinks.classList.remove('show');
                hamburger.classList.remove('active');
            }
        });
    }

    // Form Validation and Submission
    const contactForm = document.querySelector('.contact-form');
    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email');
    const messageField = document.querySelector('#message');

    if (contactForm && nameField && emailField && messageField) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const isValid = validateForm();
            if (isValid) {
                saveFormData();
                displayAlert('Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset();
            } else {
                displayAlert('Please fill in all fields correctly.', 'error');
            }
        });

        function validateForm() {
            let isValid = true;

            if (nameField.value.trim() === '') {
                isValid = false;
                nameField.style.borderColor = 'red';
            } else {
                nameField.style.borderColor = '';
            }

            if (!validateEmail(emailField.value)) {
                isValid = false;
                emailField.style.borderColor = 'red';
            } else {
                emailField.style.borderColor = '';
            }

            if (messageField.value.trim() === '') {
                isValid = false;
                messageField.style.borderColor = 'red';
            } else {
                messageField.style.borderColor = '';
            }

            return isValid;
        }

        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function saveFormData() {
            const formData = {
                name: nameField.value.trim(),
                email: emailField.value.trim(),
                message: messageField.value.trim(),
            };
            localStorage.setItem('contactFormData', JSON.stringify(formData));
        }

        function displayAlert(message, type) {
            const existingAlert = document.querySelector('.alert');
            if (existingAlert) {
                existingAlert.remove();
            }

            const alert = document.createElement('div');
            alert.className = `alert ${type}`;
            alert.textContent = message;
            contactForm.insertAdjacentElement('beforebegin', alert);

            setTimeout(() => alert.remove(), 5000);
        }
    }

    // Dynamic Image Galleries
    const galleries = {
        welcome: [
            { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAR9zxc8GVAFbdmobPblp71VxlEhFY-7KggA&s", alt: "Welcome Image 1", caption: "Sunset over Accra" },
            { url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/ca/af/53/akwaaba-to-ghana-welcome.jpg", alt: "Welcome Image 2", caption: "Street view of Accra" },
            { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxIvzNkCn0GIUX0R9apY8QN5nBFDXIr4UXpw&s", alt: "Welcome Image 3", caption: "Cultural event in Accra" }
        ],
        features: [
            { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYCwU-TOuJACLkOSrgVci9LXPo2koWxq4VA&s", alt: "Features Image 1", caption: "Labadi Beach" },
            { url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Independence_Arch_-_Accra%2C_Ghana1.jpg", alt: "Features Image 2", caption: "Independence Arch" },
            { url: "https://i.pinimg.com/originals/eb/b2/43/ebb243c21944027c32d224b5361cf71d.jpg", alt: "Features Image 3", caption: "Accra Market" }
        ],
        anotherSection: [
            { url: "https://mymarvellousmundane.com/wp-content/uploads/2020/12/img_2349.jpeg?w=1024", alt: "Section Image 1", caption: "Unique Accra Art" },
            { url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Modern_Accra_Buildings.jpg", alt: "Section Image 2", caption: "Modern Accra Buildings" },
            { url: "https://lh3.googleusercontent.com/proxy/mCGyyWHs-fL5wWFXF9_g142_eZ1XDzj3XpKchV71aREzIK6p9_Gy1XeJiDNIXDFUgz1nlzZUXGf-6MumKJlonEIhpFhmw8OUfjjQJfO7N3Gg1XM-mQBYZ1VWlywoYK7yG47RwY9KPN6KPjg", alt: "Section Image 3", caption: "Ghanaian Cuisine" }
        ]
    };

    function createGallery(sectionId, images) {
        const section = document.querySelector(`#${sectionId}`);
        if (section) {
            const galleryContainer = document.createElement('div');
            galleryContainer.classList.add('gallery');

            images.forEach(image => {
                const figure = document.createElement('figure');
                const img = document.createElement('img');
                const figcaption = document.createElement('figcaption');

                img.src = image.url;
                img.alt = image.alt;
                img.loading = "lazy";

                figcaption.textContent = image.caption;

                figure.appendChild(img);
                figure.appendChild(figcaption);
                galleryContainer.appendChild(figure);
            });

            section.appendChild(galleryContainer);
        }
    }

    createGallery('welcome', galleries.welcome);
    createGallery('features', galleries.features);
    createGallery('anotherSection', galleries.anotherSection);
});
