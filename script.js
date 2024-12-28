
// Add event listener to the navigation menu
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});

// Add event listener to the hero button
const heroButton = document.querySelector(".hero button");

heroButton.addEventListener("click", () => {
  const aboutSection = document.querySelector("#about");
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

// Add event listener to the contact form
const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  console.log(formData);
  // Add your form submission logic here
});

// Add event listener to the gallery images
const galleryImages = document.querySelectorAll("#gallery img");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    const imageUrl = image.getAttribute("src");
    const imageModal = document.createElement("div");
    imageModal.innerHTML = `
      <div class="image-modal">
        <img src="${imageUrl}" alt="Image">
        <button class="close-modal">&times;</button>
      </div>
    `;
    document.body.appendChild(imageModal);
    const closeModalButton = document.querySelector(".close-modal");
    closeModalButton.addEventListener("click", () => {
      imageModal.remove();
    });
  });
});