// Fetch item details from localStorage
document.addEventListener('DOMContentLoaded', () => {
        const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));
        // console.log(selectedItem)
    // Update the page with item details
    if (selectedItem) {
        document.getElementById('item-image').src = selectedItem.image;
        document.getElementById('item-name').textContent = selectedItem.name;
        document.getElementById('item-price').textContent = `Price: ₹ ${selectedItem.price}`;
        document.getElementById('item-detail').textContent = selectedItem.description;
    }


    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const addToCartbtn = document.querySelector("#add-to-cart");
    if (addToCartbtn) {
        addToCartbtn.addEventListener("click", (event) => {
            event.preventDefault();

            // Check if selectedItem exists
            if (selectedItem) {
                // Add the selected item to the cart
                cart.push({
                    name: selectedItem.name,
                    price: selectedItem.price,
                    description: selectedItem.description,
                });

                // Save the updated cart back to localStorage
                localStorage.setItem("cart", JSON.stringify(cart));

                // Confirmation alert
                alert(`${selectedItem.name} has been added to your cart!`);
            } else {
                alert("No item selected to add to the cart!");
            }
        });
    } else {
        console.error("#add-to-cart button not found!");
    }
});
