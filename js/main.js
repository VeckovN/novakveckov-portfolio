
const header = document.querySelector('.navigation');
const hamburger = document.querySelector(".burger-menu")
const nav = document.querySelector(".navigation-links");
const nav_link = document.querySelectorAll(".link");

//Not hoisted (must be delcared before eventListener)
const showMobileMenu = () =>{
    header.classList.toggle('mobile');
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

//Scroll-features

function scrollToSection(sectionElement, event) {
    event.preventDefault();
    sectionElement.scrollIntoView({behavior: 'smooth'});
}

const aboutLink = document.getElementById("about-link");
const aboutSection = document.getElementById("aboutMe-part");
// const aboutSection = document.getElementById("aboutMe-part-context");

aboutLink.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Scrolling to section:", aboutSection.id);
    scrollToSection(aboutSection, event);
});

const projectsLink = document.getElementById("project-link");
const projectsSection = document.getElementById("projects-part");

projectsLink.addEventListener("click", function(event) {
    scrollToSection(projectsSection, event);
});

const contactLink = document.getElementById("contact-link");
const contactSection = document.getElementById("contactMe-part");

contactLink.addEventListener("click", function(event) {
    scrollToSection(contactSection, event);
});

const projectsButton = document.getElementById("projects-view-btn");
projectsButton.addEventListener("click", function(event) {
    scrollToSection(projectsSection, event);
});


// document.getElementById('аbout-link').addEventListener('click', function(event){
//     event.preventDefault();
//     const scrollElement = document.getElementById('aboutMe-part');
//     scrollElement.scrollIntoView({behavior:'smooth'});
// });
// document.getElementById('project-link').addEventListener('click', function(event){
//     event.preventDefault();
//     const scrollElement = document.getElementById('projects-part');
//     scrollElement.scrollIntoView({behavior:'smooth'});
// });
// document.getElementById('project-link').addEventListener('click', function(event){
//     event.preventDefault();
//     const scrollElement = document.getElementById('projects-part');
//     scrollElement.scrollIntoView({behavior:'smooth'});
// });

