let currentSlide = 0;
let index = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {

    const slideWidth = slides[0].clientWidth;
    const offset = index * slideWidth;
    document.querySelector('.slider').style.transform = `translateX(-${offset}px)`;
}

function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) currentSlide = slides.length - 2;
    if (currentSlide >= slides.length - 1) currentSlide = 0;
    showSlide(currentSlide);
}

showSlide(currentSlide);




function showReview() {
    const slider = document.getElementById('slider');
    const totalReviews = document.querySelectorAll('.review').length;

    slider.style.transform = `translateX(${-index * 55}%)`;
}

function nextReview() {
    const totalReviews = document.querySelectorAll('.review').length - 4;
    index = (index + 1) % totalReviews; // Зацикливание
    showReview();
}

function prevReview() {
    const totalReviews = document.querySelectorAll('.review').length - 4;
    index = (index - 1 + totalReviews) % totalReviews; // Зацикливание
    showReview();
}