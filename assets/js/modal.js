// ==========================
// PRODUCT QUICK VIEW MODAL
// ==========================

let selectedProduct = null;
let modalQty = 1;

const overlay = document.getElementById("modalOverlay");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalStars = document.getElementById("modalStars");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");
const modalBadge = document.getElementById("modalBadge");
const modalQuantity = document.getElementById("modalQuantity");


// ==========================
// OPEN MODAL
// ==========================

function openModal(id) {

    selectedProduct = products.find(product => product.id === id);

    if (!selectedProduct) {
        console.error("Product not found:", id);
        return;
    }

    modalQty = 1;

    // Product Image
    modalImage.src = selectedProduct.image;

    // Product Name
    modalTitle.textContent = selectedProduct.name;

    // Product Badge
    if (modalBadge) {
        modalBadge.textContent = selectedProduct.badge || "";
    }

    // Rating
    modalStars.innerHTML = "";

    for (let i = 0; i < selectedProduct.rating; i++) {
        modalStars.innerHTML += "⭐";
    }

    // Price
    modalPrice.innerHTML = `
        <span class="new-price">$${selectedProduct.price}</span>
        ${
            selectedProduct.oldPrice
                ? `<span class="old-price">$${selectedProduct.oldPrice}</span>`
                : ""
        }
    `;

    document.getElementById("modalBrand").textContent =
selectedProduct.brand;

document.getElementById("modalCategory").textContent =
selectedProduct.category;


    // Description

    modalDescription.textContent =
        selectedProduct.description || "No description available.";

    // Quantity
    modalQuantity.textContent = modalQty;

    // Show Modal
    overlay.classList.add("active");

    // Prevent background scrolling
    document.body.style.overflow = "hidden";
}



// ==========================
// CLOSE MODAL
// ==========================

function closeModal() {

    overlay.classList.remove("active");

    document.body.style.overflow = "auto";

}

document.getElementById("closeModal").addEventListener("click", closeModal);

overlay.addEventListener("click", function (e) {

    if (e.target === overlay) {

        closeModal();

    }

});

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        closeModal();

    }

});



// ==========================
// QUANTITY
// ==========================

document.getElementById("increaseQty").addEventListener("click", () => {

    modalQty++;

    modalQuantity.textContent = modalQty;

});

document.getElementById("decreaseQty").addEventListener("click", () => {

    if (modalQty > 1) {

        modalQty--;

        modalQuantity.textContent = modalQty;

    }

});



// ==========================
// ADD TO CART
// ==========================

document.getElementById("modalCartBtn").addEventListener("click", () => {

    if (!selectedProduct) return;

    addToCart(selectedProduct.id, modalQty);

    closeModal();

});



// ==========================
// WISHLIST
// ==========================

document.getElementById("modalWishlistBtn").addEventListener("click", () => {

    if (!selectedProduct) return;

    if (typeof toggleWishlist === "function") {

        toggleWishlist(selectedProduct.id);

    }

});