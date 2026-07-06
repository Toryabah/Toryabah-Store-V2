// =============================
// APP.JS
// Display Products
// =============================

const productsGrid = document.querySelector(".products-grid");

/**
 * Display Products
 */
function displayProducts(data = products) {

    if (!productsGrid) return;

    productsGrid.innerHTML = "";

    if (data.length === 0) {

        productsGrid.innerHTML = `
            <div class="no-products">
                <h2>No Products Found</h2>
                <p>Try another search or category.</p>
            </div>
        `;

        return;
    }

    data.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `

            <span class="badge">${product.badge || ""}</span>

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="brand">${product.brand}</p>

                <div class="stars">
                    ${"⭐".repeat(product.rating)}
                </div>

                <div class="price">

                    <span class="new-price">

                        $${product.price}

                    </span>

                    <span class="old-price">

                        $${product.oldPrice}

                    </span>

                </div>

                <div class="product-buttons">

                    <button
                        class="cart-btn"
                        onclick="addToCart(${product.id})">

                        <i class="fas fa-shopping-cart"></i>

                        Add To Cart

                    </button>
                    <button
                        class="view-btn"
                        onclick="openModal(${product.id})">

                        <i class="fas fa-eye"></i>

                    </button>

                    <button
                        class="wishlist-btn"
                        onclick="toggleWishlist(${product.id})">

                        <i class="far fa-heart"></i>

                    </button>

                </div>

            </div>

        `;

        productsGrid.appendChild(card);

    });

}

/**
 * Refresh Products
 */

function refreshProducts(filteredProducts){

    displayProducts(filteredProducts);

}

/**
 * Initialize
 */

document.addEventListener("DOMContentLoaded", () => {

    displayProducts();

});