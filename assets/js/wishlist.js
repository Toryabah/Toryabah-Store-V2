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

updateWishlistCount();