// function for menu

document.querySelectorAll('.submenu a').forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        // Get item details
        const name = item.getAttribute('data-name');
        const price = item.getAttribute('data-price');
        const image = item.getAttribute('data-image');
        // console.log(selectedItem)
        // Store item details in localStorage
        localStorage.setItem('selectedItem', JSON.stringify({ name, price, image }));

        // Redirect to the next page
        window.location.href = 'secondPage.html';
        
    });    
});

// function for signUp button

let signup = document.querySelector("#signUp");
signup.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'signUp.html';
})


// function for Index images 
document.querySelectorAll('.mainCard img,.mainCard1 img, .mainCard2 img').forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        // Get item details
        const name = item.getAttribute('data-name');
        const price = item.getAttribute('data-price');
        const image = item.getAttribute('data-image');

        // Store item details in localStorage
        localStorage.setItem('selectedItem', JSON.stringify({ name, price, image }));
        
        // Redirect to the next page
        window.location.href = 'secondPage.html';
    });
});


// signIn Update when user loggenIn

document.addEventListener("DOMContentLoaded", () => {
    // Fetch user info from local storage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    // Get the user menu container
    const userMenu = document.getElementById("user-menu");

    if (loggedInUser && loggedInUser.email) {
        // User is logged in, show "Hello, [User]"
        userMenu.innerHTML = `
            <span>Hello, ${loggedInUser.email.split('@')[0]}</span>
            <ul class="submenu">
                <li><a href="#">My Account</a></li>
                <li><a href="./cart.html">My Orders</a></li>
                <li><a href="#">List</a></li>
                <li><a href="#">Review My Purchase</a></li>
                <li><a href="#">Recently Viewed</a></li>
                <li><a href="#">Help & Contact</a></li>
                <li><a href="#">Design Services</a></li>
                <hr>
                <li><a href="#">Gift Card</a></li>
                <li><a href="#">Chai-iayah Rewards</a></li>
                <li><a href="#">Chai-iayah Credit Card</a></li>
                <li><a href="#">Chai-iayah Financing</a></li>
                <hr>
                <li><a id="logout-btn" href="#">Logout</a></li>
            </ul>
        `;

        // Add logout functionality
        document.getElementById("logout-btn").addEventListener("click", () => {
            localStorage.removeItem("loggedInUser");
            window.location.reload(); // Refresh the page
        });
    }
});

// Logout
if (loggedInUser && loggedInUser.email) {
    userInfo.innerHTML = `
        <span>Hello, ${loggedInUser.email.split('@')[0]}</span>
        <button id="logout-btn">Logout</button>
    `;

    document.getElementById("logout-btn").addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        window.location.reload(); // Refresh the page to reset the navbar
    });
}
