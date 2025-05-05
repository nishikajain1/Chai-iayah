function loadCart() {
    const cartContainer = document.getElementById("cart-container");
    const totalPriceElem = document.getElementById("total-price");

    // Fetch cart items from local storage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalPrice = 0;

    // Clear the container
    cartContainer.innerHTML = "";

    // Group items by name and calculate their quantities
    const groupedCart = cart.reduce((acc, item) => {
        if (acc[item.name]) {
            acc[item.name].quantity += 1;
            acc[item.name].totalPrice += parseFloat(item.price);
        } else {
            acc[item.name] = {
                name: item.name,
                price: parseFloat(item.price),
                totalPrice: parseFloat(item.price),
                quantity: 1,
            };
        }
        return acc;
    }, {});

    // Populate cart items
    Object.values(groupedCart).forEach((item, index) => {
        totalPrice += item.totalPrice;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <span><strong>${item.name}</strong> (x${item.quantity})</span>
            <span> &#8377; ${item.totalPrice.toFixed(2)}</span>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    // Update total price
    totalPriceElem.textContent = totalPrice.toFixed(2);
}

function removeFromCart(name) {
    // Fetch cart items from local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Remove the first occurrence of the item with the specified name
    const index = cart.findIndex((item) => item.name === name);
    if (index !== -1) {
        cart.splice(index, 1);
    }

    // Save the updated cart back to local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Reload the cart
    loadCart();
}

// Add an item to the cart
function addToCart(item) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// Place Order functionality
function placeOrder() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty! Add items before placing an order.");
        return;
    }

    // Confirmation message
    alert("Thank you for your order! Redirecting to payment page..");

    // Clear the cart
    // localStorage.removeItem("cart");

    // Reload the cart view
    // loadCart();

    // Optional: Redirect to a confirmation page
    window.location.href = "payment.html";
}

// Attach the place order event
document.getElementById("place-order").addEventListener("click", placeOrder);

// Load cart items on page load
document.addEventListener("DOMContentLoaded", loadCart);

document.querySelectorAll('.submenu a').forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();

        // Redirect to the next page
        window.location.href = 'secondPage.html';
    });
});




// Ensure that the user is logged in before accessing the cart page
document.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = localStorage.getItem('loggedInUser');
    // If not logged in, show alert and redirect to login page
    if (!isLoggedIn) {
        alert('Login to Go To Cart');
        window.location.href = 'index.html'; // Redirect to login page
    } else {
        console.log('User is logged in');
        // Load cart data or display content
    }
});
