let selectedProduct = null;

let modalQty = 1;

const overlay = document.getElementById("modalOverlay");

function openModal(id){

selectedProduct = products.find(product=>product.id===id);

if(!selectedProduct) return;

modalQty = 1;

document.getElementById("modalImage").src = selectedProduct.image;

document.getElementById("modalTitle").textContent = selectedProduct.name;

document.getElementById("modalPrice").textContent =
"$"+selectedProduct.price;

document.getElementById("modalDescription").textContent =
selectedProduct.description;

document.getElementById("modalStars").innerHTML =
"⭐".repeat(selectedProduct.rating);

document.getElementById("modalQuantity").textContent = modalQty;

overlay.classList.add("active");

}

document.getElementById("closeModal").onclick=function(){

overlay.classList.remove("active");

};

overlay.onclick=function(e){

if(e.target===overlay){

overlay.classList.remove("active");

}

};



// Quantity Button


document.getElementById("increaseQty").onclick=function(){

modalQty++;

document.getElementById("modalQuantity").textContent=modalQty;

};

document.getElementById("decreaseQty").onclick=function(){

if(modalQty>1){

modalQty--;

document.getElementById("modalQuantity").textContent=modalQty;

}

};


// Connect Add to Cart

document.getElementById("modalCartBtn").onclick=function(){

addToCart(selectedProduct.id,modalQty);

overlay.classList.remove("active");

};