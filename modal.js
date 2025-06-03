// modal.js

// Wait until the DOM (Document Object Model) is fully loaded before running any JS
document.addEventListener("DOMContentLoaded", function () {

  // Select all <img> elements inside containers with class "image-tile"
  const images = document.querySelectorAll(".image-tile img");

  // Select the modal container (the pop-out background box)
  const modal = document.querySelector(".modal");

  // Select the image inside the modal where the clicked image will be shown
  const modalImg = document.querySelector(".modal-content");

  // Select the caption text area in the modal (optional)
  const captionText = document.getElementById("modal-caption");

  // Select the "X" close button
  const closeBtn = document.querySelector(".modal-close");

  // Loop through each image and attach a click event
  images.forEach(function (img) {
    img.addEventListener("click", function () {
      // When image is clicked, show the modal
      modal.style.display = "flex";

      // Set the modal image source to match the clicked image
      modalImg.src = this.src;

      // Set the caption text using the clicked image's alt text
      captionText.innerHTML = this.alt;
    });
  });

  // When the "X" button is clicked, close the modal
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // When the user clicks outside the modal image (on the dark background), close the modal
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
