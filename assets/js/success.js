const order = JSON.parse(localStorage.getItem("lastOrder"));

const summary = document.getElementById("orderSummary");

const total = document.getElementById("orderTotal");

if(order){

let html="";

order.items.forEach(item=>{

html+=`

<div class="order-item">

<span>

${item.name} × ${item.quantity}

</span>

<strong>

$${(item.price*item.quantity).toFixed(2)}

</strong>

</div>

`;

});

summary.innerHTML=html;

total.textContent=order.total;

}

document
.getElementById("downloadReceipt")
.addEventListener("click",()=>{

window.print();

});