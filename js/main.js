// var sliderDots = document.querySelectorAll(".slider .dot");

// for (let index = 0; index < sliderDots.length; index++) {
//     const sliderDot = sliderDots[index];
//     sliderDot.onclick = function() {
        
//     }
// }

let menu = document.querySelector(".fa-bars"),
    navLinks = document.querySelector(".navbar-nav");


menu.onclick = function() {
    navLinks.classList.toggle("show");
}