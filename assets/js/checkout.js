// =========================================
// TORYABAH STORE
// checkout.js
// =========================================

// Get cart from Local Storage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

const checkoutItems = document.getElementById("checkoutItems");
const checkoutTotal = document.getElementById("checkoutTotal");
const placeOrderBtn = document.getElementById("placeOrderBtn");

// ------------------------------
// DISPLAY ORDER ITEMS
// ------------------------------

function renderCheckout() {

    if (!checkoutItems) return;

    if (cart.length === 0) {

        checkoutItems.innerHTML = `
            <p>Your cart is empty.</p>
        `;

        checkoutTotal.textContent = "$0.00";

        if (placeOrderBtn) {

            placeOrderBtn.disabled = true;

            placeOrderBtn.style.opacity = ".6";

            placeOrderBtn.style.cursor = "not-allowed";

        }

        return;
    }

    checkoutItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        checkoutItems.innerHTML += `

            <div class="checkout-item">

                <img src="${item.image}" alt="${item.name}">

                <div class="checkout-item-info">

                    <h4>${item.name}</h4>

                    <p>Quantity: ${item.quantity}</p>

                    <strong>$${(item.price * item.quantity).toFixed(2)}</strong>

                </div>

            </div>

        `;

    });

    checkoutTotal.textContent = "$" + total.toFixed(2);

}

// ------------------------------
// PLACE ORDER
// ------------------------------

function placeOrder() {

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const country = document.getElementById("country").value;

    if (
        !fullName ||
        !email ||
        !phone ||
        !address ||
        !city ||
        !state
    ) {

        alert("Please fill in all required fields.");

        return;
    }

    const order = {

        customer: {

            fullName,
            email,
            phone,
            address,
            city,
            state,
            country

        },

        items: cart,

        total: checkoutTotal.textContent,

        orderDate: new Date().toLocaleString()

    };

    // Save latest order
    localStorage.setItem("lastOrder", JSON.stringify(order));

    // Clear cart
    localStorage.removeItem("cart");

    // Go to Success Page
    window.location.href = "success.html";

}

// ------------------------------
// EVENT LISTENER
// ------------------------------

if (placeOrderBtn) {

    placeOrderBtn.addEventListener("click", placeOrder);

}

// ------------------------------
// INITIALIZE
// ------------------------------

renderCheckout();