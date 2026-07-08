// ABOUT PAGE COUNTER


document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        const updateCounter = () => {

            const current = Number(counter.innerText.replace(/,/g, ""));

            const increment = Math.ceil(target / 80);

            if (current < target) {

                counter.innerText = current + increment > target
                    ? target
                    : current + increment;

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target.toLocaleString() + "+";

            }

        };

        updateCounter();

    });

});



/* HOME PAGE COUNT DOWN */


const endDate = new Date();

endDate.setDate(endDate.getDate() + 5);

function updateCountdown(){

const now = new Date().getTime();

const distance = endDate - now;

const days = Math.floor(distance / (1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").textContent=days;
document.getElementById("hours").textContent=hours;
document.getElementById("minutes").textContent=minutes;
document.getElementById("seconds").textContent=seconds;

}

setInterval(updateCountdown,1000);

updateCountdown();




