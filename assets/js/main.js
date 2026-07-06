const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if(menuToggle && navbar){

    menuToggle.addEventListener("click",()=>{

        navbar.classList.toggle("active");

    });

}

function showToast(message){

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2500);

}