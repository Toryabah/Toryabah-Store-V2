const grid = document.querySelector(".products-grid");

function displayProducts(data = products){

if(!grid) return;

grid.innerHTML="";

data.forEach(product=>{

grid.innerHTML +=`

<div class="product-card">

<span class="badge">${product.badge}</span>

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>${product.brand}</p>

<div class="price">

<span>$${product.price}</span>

<del>$${product.oldPrice}</del>

</div>

<div class="product-buttons">

<button onclick="addToCart(${product.id})">

<i class="fas fa-shopping-cart"></i>

Add To Cart

</button>

<button onclick="openModal(${product.id})">

<i class="fas fa-eye"></i>

</button>

</div>

</div>

`;

});

}

displayProducts();