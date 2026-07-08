/*=============================
 PRE LOADER
==============================*/


window.addEventListener("load",function(){

    document.getElementById("preloader").style.display="none";

});


// =========================================
// TORYABAH STORE
// cart.js
// =========================================

// ------------------------------
// CART DATA
// ------------------------------

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ------------------------------
// SAVE CART
// ------------------------------

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// ------------------------------
// UPDATE CART COUNT
// ------------------------------

function updateCartCount() {

    const counters = document.querySelectorAll(".cart-count");

    let total = 0;

    cart.forEach(item => {

        total += item.quantity;

    });

    counters.forEach(counter => {

        counter.textContent = total;

    });

}

// ------------------------------
// ADD TO CART
// ------------------------------

function addToCart(id, quantity = 1) {

    const product = products.find(product => product.id === id);

    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({

            ...product,

            quantity

        });

    }

    saveCart();

    updateCartCount();

    renderCart();

    openCart();

    if (typeof showToast === "function") {

        showToast(product.name + " added to cart");

    }

}

// ------------------------------
// REMOVE PRODUCT
// ------------------------------

function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();

    updateCartCount();

    renderCart();

}

// ------------------------------
// CHANGE QUANTITY
// ------------------------------

function changeQuantity(id, change) {

    const item = cart.find(product => product.id === id);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {

        removeFromCart(id);

        return;

    }

    saveCart();

    updateCartCount();

    renderCart();

}


// ------------------------------
// RENDER CART
// ------------------------------

function renderCart() {

    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        cartTotal.textContent = "$0.00";

        return;

    }

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach(item => {

        total += item.price * item.quantity;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-details">

                <h4>${item.name}</h4>

                <p>$${item.price}</p>

                <div class="cart-qty">

                    <button onclick="changeQuantity(${item.id}, -1)">−</button>

                    <span>${item.quantity}</span>

                    <button onclick="changeQuantity(${item.id}, 1)">+</button>

                </div>

            </div>

            <button class="remove-item"
                onclick="removeFromCart(${item.id})">

                <i class="fas fa-trash"></i>

            </button>

        </div>

        `;

    });

    cartTotal.textContent = "$" + total.toFixed(2);

}



// ------------------------------
// CART SIDEBAR
// ------------------------------

const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");

function openCart() {

    renderCart();

    cartSidebar.classList.add("active");

    cartOverlay.classList.add("active");

    document.body.style.overflow = "hidden";

}

function closeCart() {

    cartSidebar.classList.remove("active");

    cartOverlay.classList.remove("active");

    document.body.style.overflow = "auto";

}



// ------------------------------
// EVENT LISTENERS
// ------------------------------

document.getElementById("closeCart").addEventListener("click", closeCart);

cartOverlay.addEventListener("click", closeCart);



// ------------------------------
// CHECKOUT BUTTON
// ------------------------------

const checkoutBtn = document.getElementById("checkoutBtn");

if (checkoutBtn) {

    checkoutBtn.addEventListener("click", () => {

        if (cart.length === 0) {

            alert("Your cart is empty.");

            return;

        }

        window.location.href = "checkout.html";

    });

}



// ------------------------------
// CLEAR CART
// ------------------------------

function clearCart() {

    cart = [];

    saveCart();

    updateCartCount();

    renderCart();

}


/*=============================
 BACK TO TOP BUTTON
==============================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});
// ------------------------------
// INITIALIZE
// ------------------------------

updateCartCount();

renderCart();