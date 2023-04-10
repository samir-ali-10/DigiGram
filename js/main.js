
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
///////////////////////////////////////////////////////////////

var sliderDots = document.querySelectorAll(".slider .dot"),
    containers = document.querySelectorAll(".news .row");



for (let index = 0; index < containers.length; index++) {
    const containerElement = containers[index];
    for (let index = 0; index < sliderDots.length; index++) {
        const sliderDot = sliderDots[index];
        sliderDot.addEventListener("click", () => {
            for (let index = 0; index < sliderDots.length; index++) {
                const element = sliderDots[index];
                element.classList.remove("active");
                containerElement.classList.remove("show");
            }
            sliderDot.classList.add("active");
            if(sliderDot.getAttribute("data-count") === containerElement.getAttribute("data-count")) {
                containerElement.classList.add("show");
            }
        })
    }
}