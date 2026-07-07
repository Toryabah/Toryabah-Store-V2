// =========================================
// TORYABAH STORE
// payment.js
// =========================================

const PAYSTACK_PUBLIC_KEY =
"pk_test_5a5fe86ea114efca2d60f9045beaf1b631ceac51";

// ----------------------------
// Generate Order Number
// ----------------------------

function generateOrderNumber() {

    const now = new Date();

    return `TBS-${now.getFullYear()}${String(now.getMonth()+1).padStart(2,"0")}${String(now.getDate()).padStart(2,"0")}-${Math.floor(Math.random()*900000+100000)}`;

}



// ----------------------------
// Paystack Payment
// ----------------------------

function payWithPaystack(orderData,totalAmount){

    const handler = PaystackPop.setup({

        key: PAYSTACK_PUBLIC_KEY,

        email: orderData.customer.email,

        amount: totalAmount * 100,

        currency:"NGN",

        ref: generateOrderNumber(),

        metadata:{

            custom_fields:[

                {

                    display_name:"Customer",

                    variable_name:"customer_name",

                    value:orderData.customer.fullName

                }

            ]

        },

        callback:function(response){

            orderData.reference=response.reference;

            orderData.orderNumber=generateOrderNumber();

            orderData.paymentStatus="Paid";

            orderData.paymentDate=new Date().toLocaleString();

            localStorage.setItem("lastOrder",JSON.stringify(orderData));

            localStorage.removeItem("cart");

            window.location.href="success.html";

        },

        onClose:function(){

            alert("Payment cancelled.");

        }

    });

    handler.openIframe();

}