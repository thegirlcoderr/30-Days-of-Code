const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open')  
    overlay.classList.toggle('overlay-show')
    document.body.classList.toggle('stop-scrolling')
    menu.classList.toggle('show-menu')
}

function countUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            //This will get count target
            const target = +counter.getAttribute('data-target');
           // This will help get the current target
            const c = +counter.innerText;

            //To create an increment
            const increment = target / 100;

            // If counter is less than target, add increment
            if (c < target) {
                //Round up and set counter value
                counter.innerText = `${Math.ceil(c + increment)}`;


                setTimeout(updateCounter, 75);
            
                
            } else {
                counter.innerText = target;
        
            }
        };

        updateCounter();

   }) 
}
countUp()