const grid = document.querySelector(".products-grid");

function displayProducts(data = products) {

    if (!grid) return;

    grid.innerHTML = "";

    data.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <span class="badge">${product.badge}</span>

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="brand">${product.brand}</p>

                <div class="stars">
                    ${"⭐".repeat(product.rating)}
                </div>

                <div class="price">
                    <span class="new-price">$${product.price}</span>
                    <span class="old-price">$${product.oldPrice}</span>
                </div>

                <div class="product-buttons">

    <button class="cart-btn"
    onclick="addToCart(${product.id})">

        <i class="fas fa-shopping-cart"></i>
        Add To Cart

    </button>

    <button class="view-btn"
    onclick="openModal(${product.id})">

        <i class="fas fa-eye"></i>

    </button>

    <button class="wishlist-btn"
    onclick="toggleWishlist(${product.id})">

        <i class="far fa-heart"></i>

    </button>

</div>

            </div>

        `;

        grid.appendChild(card);

    });

}

displayProducts();