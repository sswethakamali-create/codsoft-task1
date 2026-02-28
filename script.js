// Cart Logic
let cartCount = 0;
const cartDisplay = document.getElementById('cart-count');

function addToCart() {
    cartCount++;
    cartDisplay.innerText = cartCount;
    
    // Smooth animation effect
    cartDisplay.style.transform = "scale(1.5)";
    setTimeout(() => {
        cartDisplay.style.transform = "scale(1)";
    }, 200);
}

// Simple Form Submission Alert
document.getElementById('cakeForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Get values from form
    const orderData = {
        size: document.getElementById('cakeSize').value,
        flavor: document.getElementById('cakeFlavor').value,
        message: document.getElementById('cakeMessage').value
    };

    try {
        // Send data to our backend
        const response = await fetch('http://localhost:3000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        });

        const result = await response.json();

        if (response.ok) {
            alert("Success! " + result.message);
            this.reset(); // Clear form
        } else {
            alert("Something went wrong.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Could not connect to the server.");
    }
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = "10px 8%";
        nav.style.background = "#fff";
    } else {
        nav.style.padding = "20px 8%";
    }
});