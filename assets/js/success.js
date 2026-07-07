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


// Add the EmailJS SDK


function sendConfirmationEmail(order){

    if(!order) return;

    emailjs.send(

        "service_tkjejep",

        "template_xax5mrn",

        {

            customer_name: order.customer.fullName,

            reply_to: order.customer.email,

            order_number: order.orderNumber,

            reference: order.reference,

            amount: order.total

        }

    )

    .then(()=>{

        console.log("Confirmation email sent.");

    })

    .catch(error=>{

        console.error("Email failed:", error);

    });

}

if(order && !sessionStorage.getItem("emailSent")){

    sendConfirmationEmail(order);

    sessionStorage.setItem("emailSent","true");

}