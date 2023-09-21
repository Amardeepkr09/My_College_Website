//**********NAVBAR JAVASCRIPT*********//
(() =>{
const NavOpen = document.querySelector('.hamburger');
const NavClose = document.querySelector('.close');
navBar = document.querySelector('.navbar');
const menuOverlay = document.querySelector('.menu-overlay');
mediaSize = 980;


NavOpen.addEventListener('click', toggleNav);
NavClose.addEventListener('click', toggleNav);
// Close the navmenu by clicking outside
menuOverlay.addEventListener('click', toggleNav);


function toggleNav () {
    navBar.classList.toggle("open");
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("hidden-scrollling");
} 

navBar.addEventListener("click", (event) =>{
    if(event.target.hasAttribute("data-toggle") &&
    window.innerWidth <= mediaSize){
        // prevent default anchor click behavior
        event.preventDefault();
        const downMenu = event.target.parentElement;
        // if downMenu is already expanded, collapse it
        if(downMenu.classList.contains("active")){
            collapseSubMenu();
        }
        else{
            // collapse existing expanded downMenu
            if(navBar.querySelector(".down-menu.active")){
                collapseSubMenu();
            }
            // expand new downMenu 
            downMenu.classList.add("active");
            const subMenu = downMenu.querySelector(".sub-menu");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
    }
});

function collapseSubMenu(){
    navBar.querySelector(".down-menu.active .sub-menu").removeAttribute("style");
    navBar.querySelector(".down-menu.active").classList.remove("active");
}

function resizeFix() {
    // if navBar is open , close it
    if(navBar.classList.contains("open")){
        toggleNav();
    }
    // if downMenu is expanded , collapse it
    if(navBar.querySelector(".down-menu.active")){
        collapseSubMenu();
    }
}

window.addEventListener("resize", function(){
    if(this.innerWidth > mediaSize){
        resizeFix();
    }
});

})();


// ***********CROUSEL SLIDER**********//

const itemList = document.querySelector('.slider .item-list');
const item = document.querySelectorAll('.slider .item-list .item');
const dots = document.querySelectorAll('.slider .dots li');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let active = 0;
const lengthItems = item.length - 1;

next.onclick = function() {
    if(active + 1 > lengthItems){
        active = 0;
    }
    else{
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function() {
    if(active -1 < 0){
        active = lengthItems;
    }
    else{
        active = active - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(()=> {
    next.click()
}, 5000);

function reloadSlider() {
    const checkLeft = item[active].offsetLeft;
    itemList.style.left = -checkLeft + 'px';

    const lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {
        next.click()
    }, 5000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', function() {
        active = key;
        reloadSlider();
    })
})



let copySlide = document.querySelector(".review-slide").cloneNode(true);
document.querySelector(".review-left").appendChild(copySlide);

let copySlide2 = document.querySelector(".slide-2").cloneNode(true);
document.querySelector(".review-right").appendChild(copySlide2);




//******** */ Scroll up button functionality

const scrollUp = document.querySelector('.scroll-up');
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        scrollUp.classList.add("active");
    } else {
        scrollUp.classList.remove("active");
    }
})
