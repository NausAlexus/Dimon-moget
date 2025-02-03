let index = 0;

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