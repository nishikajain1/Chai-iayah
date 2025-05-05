function nextSlide(bannerId) {
    const banner = document.getElementById(bannerId);
    const slides = banner.querySelectorAll('img');
    let activeIndex = Array.from(slides).findIndex((img) => img.classList.contains('active'));

    slides[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.add('active');
}

function prevSlide(bannerId) {
    const banner = document.getElementById(bannerId);
    const slides = banner.querySelectorAll('img');
    let activeIndex = Array.from(slides).findIndex((img) => img.classList.contains('active'));

    slides[activeIndex].classList.remove('active');
    activeIndex = (activeIndex - 1 + slides.length) % slides.length;
    slides[activeIndex].classList.add('active');
}

function startAutoplay(bannerId, intervalTime) {
    setInterval(() => {
        nextSlide(bannerId);
    }, intervalTime);
}

window.onload = () => {
    startAutoplay('top', 3000);
    startAutoplay('middle', 3000);
    startAutoplay('lower', 3000);
};




