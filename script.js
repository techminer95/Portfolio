document.addEventListener('DOMContentLoaded', () => {
    // Function to scroll to the specified element
    function scrollToElement(elementSelector) {
        const element = document.querySelector(elementSelector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn(`Element with selector ${elementSelector} not found.`);
        }
    }

    // Handle "Contact Me" button click
    document.querySelector('.btn').addEventListener('click', () => {
        window.location.href = 'mailto:rameezalipacific@gmail.com'; // Replace with your email
    });

    // Handle navigation link clicks
    const link1 = document.getElementById('link1');
    const link2 = document.getElementById('link2');
    const link3 = document.getElementById('link3');

    if (link1) {
        link1.addEventListener('click', () => {
            scrollToElement('#projects'); // Adjusted to the ID of the Projects section
        });
    } else {
        console.warn('Element with ID link1 not found.');
    }

    if (link2) {
        link2.addEventListener('click', () => {
            scrollToElement('#skills'); // Adjusted to the ID of the Skills section
        });
    } else {
        console.warn('Element with ID link2 not found.');
    }

    if (link3) {
        link3.addEventListener('click', () => {
            scrollToElement('#about'); // Adjusted to the ID of the About section
        });
    } else {
        console.warn('Element with ID link3 not found.');
    }
});

let progress = 0;

const glowLine = document.getElementById('glow-line');
const glowBlur = document.getElementById('glow-blur');

function updateProgress() {
    progress = (progress === 100) ? 0 : progress + 1;
    glowLine.style.width = progress + '%';
    glowBlur.style.width = progress + '%';
}

document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
    this.classList.toggle('open');
});

// Update the progress bar every 20 milliseconds
setInterval(updateProgress, 20);

window.addEventListener('load', () => {
    const loaderContainer = document.querySelector('.loader-container');
    const mainContent = document.querySelector('.main-content');

    // Add a fade-out effect to the loader
    loaderContainer.style.opacity = '1'; // Ensure the loader is visible at the start
    setTimeout(() => {
        loaderContainer.style.transition = 'opacity 0.5s ease'; // Transition for fading out
        loaderContainer.style.opacity = '0'; // Fade out
        setTimeout(() => {
            loaderContainer.style.display = 'none'; // Hide completely after fading out
            mainContent.style.display = 'block'; // Show the main content
            mainContent.style.opacity = '1'; // Ensure content is visible
        }, 500); // Wait for fade-out to complete before hiding
    }, 1300); // Loader stays for 1.3 seconds
});