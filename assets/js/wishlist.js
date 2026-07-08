// =============================
// WISHLIST.JS
// =============================

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function saveWishlist() {

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

}

function updateWishlistCount() {

    document.querySelectorAll(".wishlist-count").forEach(counter => {

        counter.textContent = wishlist.length;

    });

}

/*==============

function toggleWishlist(id) {

    const product = products.find(item => item.id === id);

    if (!product) return;

    const index = wishlist.findIndex(item => item.id === id);

    if (index > -1) {

        wishlist.splice(index, 1);

        if (typeof showToast === "function") {

            showToast("Removed from wishlist");

        }

    } else {

        wishlist.push(product);

        if (typeof showToast === "function") {

            showToast("Added to wishlist");

        }

    }

    saveWishlist();

    updateWishlistCount();

}
                   ============*/


                   // Replacing the Existing wishList Function with This

    function toggleWishlist(id) {

    const product = products.find(item => item.id === id);

    if (!product) return;

    const index = wishlist.findIndex(item => item.id === id);

    if (index > -1) {

        wishlist.splice(index, 1);

        if (typeof showToast === "function") {

            showToast("Removed from Wishlist ❤️");

        }

    } else {

        wishlist.push(product);

        if (typeof showToast === "function") {

            showToast("Added to Wishlist ❤️");

        }

    }

    saveWishlist();

    updateWishlistCount();

    renderWishlist();

}


//====================================
// Render Wishlist Sidebar
//====================================

function renderWishlist() {

    const wishlistItems = document.getElementById("wishlistItems");

    if (!wishlistItems) return;

    if (wishlist.length === 0) {

        wishlistItems.innerHTML = `

            <div class="empty-wishlist">

                <i class="far fa-heart"></i>

                <p>Your wishlist is empty.</p>

            </div>

        `;

        return;

    }

    wishlistItems.innerHTML = "";

    wishlist.forEach(product => {

        wishlistItems.innerHTML += `

        <div class="wishlist-item">

            <img src="${product.image}" alt="${product.name}">

            <div class="wishlist-details">

                <h4>${product.name}</h4>

                <p>$${product.price}</p>

                <div class="wishlist-actions">

                    <button
                        class="move-cart"
                        onclick="moveWishlistToCart(${product.id})">

                        Add to Cart

                    </button>

                    <button
                        class="remove-wishlist"
                        onclick="removeWishlist(${product.id})">

                        <i class="fas fa-trash"></i>

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

// Add Delete Icon Inorder to Remove The WishListCart 

function removeWishlist(id){

    wishlist = wishlist.filter(item => item.id !== id);

    saveWishlist();

    updateWishlistCount();

    renderWishlist();

    showToast("Removed from Wishlist");

}

// moveWishList To Cart

function moveWishlistToCart(id){

    addToCart(id);

    removeWishlist(id);

    showToast("Moved to Cart");

}


// The underleast code is for wishList page reload
updateWishlistCount();

renderWishlist();