let lastBanner = document.querySelector(".last-banner");

lastBanner.addEventListener("click", () => {
    window.location.href = "learnMore.html"
})


function addToCart(comboName) {
    const combos = {
        "Classic Combo": { price: 62, description: "Adrak vali Chai + Samosa" },
        "Healthy Combo": { price: 50, description: "Green Tea + Idli" },
        "Royal Combo": { price: 105, description: "Kashmiri Kahwa + Dahi Kachori" },
        "Street Combo": { price: 80, description: "Tulsi Chai + Poha" },
    };

    // Fetch existing cart items or initialize empty
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the selected combo to the cart
    if (combos[comboName]) {
        cart.push({
            name: comboName,
            price: combos[comboName].price,
            // description: combos[comboName].description,
        });
    }

    // Save the updated cart back to local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Confirmation alert
    alert(comboName + " has been added to your cart!");
}
