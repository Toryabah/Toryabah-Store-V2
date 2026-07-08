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

        card.style.opacity="0";

        card.style.transform="translateY(30px)";

        productsGrid.appendChild(card);

        setTimeout(()=>{

        card.style.transition=".4s";

        card.style.opacity="1";

        card.style.transform="translateY(0)";

        },100);

            });

}

/**
 * Refresh Products
 */

function refreshProducts(filteredProducts){

    displayProducts(filteredProducts);

}


//==============================
// FILTER PRODUCTS
//==============================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const category = button.dataset.category;

if(category==="all"){

displayProducts(products);

return;

}

const filtered = products.filter(product=>

product.category.toLowerCase()===category.toLowerCase()

);

displayProducts(filtered);

});

});

/**
 * Initialize
 */

document.addEventListener("DOMContentLoaded", () => {

    displayProducts();

});



//Wishlist Open Sidebar

function openWishlist(){

    renderWishlist();

    document
    .getElementById("wishlistSidebar")
    .classList.add("active");

    document
    .getElementById("wishlistOverlay")
    .classList.add("active");

}

function closeWishlist(){

document
.getElementById("wishlistSidebar")
.classList.remove("active");

document
.getElementById("wishlistOverlay")
.classList.remove("active");

}




//==============================
// USER DROPDOWN
//==============================

function toggleUserMenu(){

document
.getElementById("userDropdown")
.classList.toggle("active");

}



// Close when click outside


document.addEventListener("click",function(e){

const menu=document.querySelector(".user-menu");

const dropdown=document.getElementById("userDropdown");

if(!menu.contains(e.target)){

dropdown.classList.remove("active");

}

});


//Function For Opening wishList sideBar

