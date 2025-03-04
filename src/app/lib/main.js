$(document).ready(function () {

    // To handle top-right dropdown menu for narrow screens
    $('.three-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });


    // For company stat counters
    const counters = document.querySelectorAll('.counter');
    const speed = 120;
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
                counter.innerText = count + inc;
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
});

// Go back on top of the page
const backToTop = document.querySelector(".back-to-top");

// Function to show/hide the button based on scroll position
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        backToTop.style.display = "block"; // Show button
        backToTop.style.opacity = "1"; // Fade in
    } else {
        backToTop.style.opacity = "0"; // Fade out
        setTimeout(() => {
            if (window.scrollY <= 100) backToTop.style.display = "none";
        }, 300); // Delay hiding to allow fade-out effect
    }
});

// Smooth scroll to top on button click
backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling
    });
});