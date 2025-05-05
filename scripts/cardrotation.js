// Wait for the DOM to load
window.addEventListener("DOMContentLoaded", () => {
    // Initialize all carousels
    initCarousel("carousel-container", "prev-btn", "next-btn", "mainCard");
    initCarousel("carousel-container1", "prev-btn1", "next-btn1", "mainCard1");
    initCarousel("carousel-container2", "prev-btn2", "next-btn2", "mainCard2");
});

// Function to initialize carousel
function initCarousel(containerClass, prevBtnClass, nextBtnClass, mainCardClass) {
    const container = document.querySelector(`.${containerClass}`);
    const mainCard = container.querySelector(`.${mainCardClass}`);
    const prevBtn = container.querySelector(`.${prevBtnClass}`);
    const nextBtn = container.querySelector(`.${nextBtnClass}`);

    let scrollAmount = 0;

    // Event listener for the previous button
    prevBtn.addEventListener("click", () => {
        scrollAmount -= mainCard.clientWidth;
        if (scrollAmount < 0) scrollAmount = 0; // Prevent scrolling beyond the start
        mainCard.scrollTo({ left: scrollAmount, behavior: "smooth" });
    });

    // Event listener for the next button
    nextBtn.addEventListener("click", () => {
        scrollAmount += mainCard.clientWidth;
        if (scrollAmount > mainCard.scrollWidth - mainCard.clientWidth) {
            scrollAmount = mainCard.scrollWidth - mainCard.clientWidth; // Prevent scrolling beyond the end
        }
        mainCard.scrollTo({ left: scrollAmount, behavior: "smooth" });
    });
}
