const products = [
    { name: "Adrak Vali Chai", price: "50", image: "./Image_files/Tea/Ginger-Cinnamon.jpg" },
    { name: "Kashmiri Kahwa", price: "45", image: "./Image_files/Tea/Kashmiri_kahwa.jpg" },
    { name: "Irani Chai", price: "55", image: "./Image_files/Tea/Irani_tea.jpg" },
    { name: "Green Tea", price: "40", image: "./Image_files/Tea/Green_tea.jpg" },
    { name: "Butterfly Pea Chai", price: "70", image: "./Image_files/Tea/ButterFly_pea_tea.jpg" },
    { name: "Chai - Makhan maar ke", price: "50", image: "./Image_files/Tea/Butter_tea1.jpg" },
    { name: "Kesar Chai", price: "80", image: "./Image_files/Tea/Kesar_tea.jpg" },
    { name: "Tulsi Chai", price: "40", image: "./Image_files/Tea/Tulsi_tea.jpg" },
    { name: "Americano", price: "80", image: "./Image_files/Coffee/Americano_coffee.jpg" },
    { name: "Iced Coffee", price: "70", image: "./Image_files/Coffee/Iced Coffee.jpg" },
    { name: "Caffe Macchiato", price: "90", image: "./Image_files/Coffee/Caffe Macchiato .jpg" },
    { name: "Caffe Mocha", price: "120", image: "./Image_files/Coffee/Caffe mocha.jpg" },
    { name: "Cortado", price: "150", image: "./Image_files/Coffee/Cortado1.jpg" },
    { name: "Frappe", price: "100", image: "./Image_files/Coffee/Frappe.jpg" },
    { name: "Espresso", price: "100", image: "./Image_files/Coffee/Espresso.jpg" },
    { name: "Latte", price: "100", image: "./Image_files/Coffee/Latte.jpg" },
    { name: "Poha", price: "40", image: "./Image_files/Nashta/Poha.jpg" },
    { name: "Aalu Paratha", price: "20", image: "./Image_files/Nashta/Aalu Paratha.jpg" },
    { name: "Dahi Kachori", price: "60", image: "./Image_files/Nashta/DahiKachori.jpg" },
    { name: "Dosa", price: "30", image: "./Image_files/Nashta/Dosa.jpg" },
    { name: "Idli", price: "10", image: "./Image_files/Nashta/Rawa Idli.jpg" },
    { name: "Sabudana Khichdi", price: "35", image: "./Image_files/Nashta/Sabudana Khichdi.jpg" },
    { name: "Samosa", price: "12", image: "./Image_files/Nashta/Samosa.jpg" },
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

// Function to render products
function renderProducts(filteredProducts) {
    productList.innerHTML = "";
    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
        `;
        productList.appendChild(productDiv);
    });
}


// Search functionality
searchInput.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    if (query === "") {
        productList.innerHTML = "";
        productList.style.display = "none";
    } else {
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query)
        );
        renderProducts(filteredProducts);
        productList.style.display = "block";

        // function for search Input

        document.querySelectorAll('.product').forEach(item => {
            item.addEventListener('click', () => {
                // Get product details
                const name = item.getAttribute('data-name');
                const price = item.getAttribute('data-price');
                const image = item.getAttribute('data-image');

                // Store product details in localStorage
                localStorage.setItem('selectedItem', JSON.stringify({ name, price, image }));

                // Redirect to the next page
                window.location.href = 'secondPage.html';
            });
        });
    }
});

// // Render Products Function (Updated)
function renderProducts(filteredProducts) {
    productList.innerHTML = "";
    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.setAttribute("data-name", product.name);
        productDiv.setAttribute("data-price", product.price);
        productDiv.setAttribute("data-image", product.image);

        productDiv.innerHTML = `        
        <h3>${product.name}</h3>
    `;
        productList.appendChild(productDiv);
    });
}


