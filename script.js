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

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    const mainContent = document.querySelector('.main-content');
  
    // Show loader for 1 second
    setTimeout(() => {
      loader.style.display = 'none';  // Hide loader
      mainContent.style.display = 'block';  // Show main content
    }, 800);  // 1000 ms = 1 second
  });
  