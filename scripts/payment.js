// Load order details from localStorage
document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const orderItems = document.getElementById("order-items");
    const totalPriceElem = document.getElementById("total-price");
    let totalPrice = 0;

    // Populate the order summary
    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item.name}</span>
            <span>₹${item.price}</span>
        `;
        orderItems.appendChild(li);
        totalPrice += parseFloat(item.price);
    });

    // Update total price
    totalPriceElem.textContent = totalPrice.toFixed(2);
});

// Handle payment form submission
document.getElementById("payment-form").addEventListener("submit", (event) => {
    event.preventDefault();

    // Validate and process payment
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const cardNumber = document.getElementById("card-number").value;
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;

    if (!name || !email || !address || !cardNumber || !expiry || !cvv) {
        alert("Please fill in all the fields!");
        return;
    }

    // // Payment logic (dummy for now)
    // alert(`Thank you, ${name}! Your payment of ₹${document.getElementById("total-price").textContent} was successful.`);

    // Display pop-up message
    const popup = document.createElement("div");
    popup.id = "thank-you-popup";
    popup.innerHTML = `
        <div class="popup-content">
            <h3>Your order placed successfully..!! </h3>
            <h2>Thank you for shopping with Us..!!</h2>
        </div>
    `;
    document.body.appendChild(popup);

    // Add styling for the pop-up dynamically
    const style = document.createElement("style");
    style.textContent = `
        #thank-you-popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .popup-content {
            background: white;
            padding: 40px;
            border-radius: 8px;
            text-align: center;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            font-family: "Inter", sans-serif;
        }
        .popup-content h2 {
            font-size: 24px;
            color: #896646;
        }
        .popup-content h3 {
            font-size: 20px;
            color: #896646;
            padding-bottom: 10px 
        }
    `;
    document.head.appendChild(style);

    // Remove the cart from localStorage
    localStorage.removeItem("cart");

    // Close the pop-up and redirect to index.html after 3 seconds
    setTimeout(() => {
        document.body.removeChild(popup);
        window.location.href = "index.html";
    }, 4000);

    // Clear cart and redirect
    // localStorage.removeItem("cart");
    // window.location.href = "payment.html";
});
