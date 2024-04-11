let currentSlide = 0;
const slides = document.querySelectorAll('.bike-slide .bike');

function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.style.display = index === n ? "block" : "none";
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Simple Calendar Example
// Note: For demonstration purposes only. Implementing a fully functional calendar would require more code.
function generateCalendar() {
    const calendar = document.getElementById('bikeCalendar');
    const dates = [1, 2, 3, 4, 5]; // Example dates
    dates.forEach(date => {
        const dateDiv = document.createElement('div');
        dateDiv.textContent = `March ${date}, 2024`;
        dateDiv.className = date % 2 === 0 ? 'available' : 'booked';
        calendar.appendChild(dateDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    generateCalendar();
});