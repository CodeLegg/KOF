
const menuBtn = document.querySelector(".nav-menu-btn");
const navLinks = document.querySelector(".navbar");
const navOverlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  navLinks.classList.toggle("active");
  navOverlay.classList.toggle("active");
  menuBtn.classList.toggle("cross");
}

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("cross");
  });
}


document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded before attaching the event listener.

    // Get the phone link element by its class name.
    let phoneLink = document.querySelector('.phone-link');

    // Check if the phone link element exists.
    if (phoneLink) {
        // Attach a click event listener to the phone link.
        phoneLink.addEventListener('click', function (event) {
            // Prevent the default behavior of the anchor tag (preventing the navigation).
            event.preventDefault();
            
            // Call the function with the desired phone number.
            callPhoneNumber('+123456789');
        });
    }
});

function callPhoneNumber(phoneNumber) {
    // Open the phone dialer with the specified phone number.
    window.location.href = 'tel:' + phoneNumber;
}
