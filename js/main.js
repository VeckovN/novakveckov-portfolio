
let hamburger = document.querySelector(".burger-menu")
let nav = document.querySelector(".navigation-links");
let nav_link = document.querySelectorAll(".link");

//Not hoisted (must be delcared before eventListener)
const showMobileMenu = () =>{
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
}
const removeActiveOnLinkClick = () =>{
    nav.classList.remove("active");
    hamburger.classList.remove("active");
}

hamburger.addEventListener('click', showMobileMenu);

//for each element set event listener (there is more then 1 links)
nav_link.forEach(el =>{
    el.addEventListener('click', removeActiveOnLinkClick);
}) 

// function showMobileMenu() {
//     alert("Mobile");
// }
