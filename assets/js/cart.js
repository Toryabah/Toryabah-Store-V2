// =============================
// CART.JS
// =============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {

    let total = 0;

    cart.forEach(item => {

        total += item.quantity;

    });

    document.querySelectorAll(".cart-count").forEach(counter => {

        counter.textContent = total;

    });

}

function addToCart(id, quantity = 1) {

    const product = products.find(p => p.id === id);

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

    if (typeof showToast === "function") {

        showToast(`${product.name} added to cart`);

    }

}

function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();

    updateCartCount();

}

function clearCart() {

    cart = [];

    saveCart();

    updateCartCount();

}

updateCartCount();