const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

emailjs.sendForm(

"service_tkjejep",

"template_xax5mrn",

this

)

.then(()=>{

alert("✅ Message sent successfully!");

contactForm.reset();

})

.catch(error=>{

console.log(error);

alert("❌ Failed to send message.");

});

});

}


//FAQ


const faqs=document.querySelectorAll(".faq-item");

faqs.forEach(faq=>{

const btn=faq.querySelector(".faq-question");

btn.addEventListener("click",()=>{

faq.classList.toggle("active");

});

});


// PopUp Message

function showToast(message, success = true){

const toast = document.getElementById("toast");

const text = document.getElementById("toastMessage");

text.textContent = message;

if(success){

toast.classList.remove("error");

}else{

toast.classList.add("error");

}

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},3000);

}