
const header = document.querySelector('.navigation');
const hamburger = document.querySelector(".burger-menu")
const nav = document.querySelector(".navigation-links");
const nav_link = document.querySelectorAll(".link");
const bodyContent = document.querySelector("body");

//Not hoisted (must be delcared before eventListener)
const showMobileMenu = () =>{
    header.classList.toggle('mobile');
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    bodyContent.classList.toggle("active");

}
const removeActiveOnLinkClick = () =>{
    header.classList.remove('mobile');
    nav.classList.remove("active");
    hamburger.classList.remove("active");
    bodyContent.classList.remove("active");
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

const logo = document.getElementById("logo");
const topSection = document.querySelector("html");


logo.addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection(topSection, event);
});


const aboutLink = document.getElementById("about-link");
const aboutSection = document.getElementById("aboutMe-part");
// const aboutSection = document.getElementById("aboutMe-part-context");

aboutLink.addEventListener("click", function(event) {
    event.preventDefault();
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

// set fixed header after reach some element

// 'DOMContentLoaded' fires when the DOM content is loaded, without waiting for images and stylesheets to finish loading.
// 'load' event is fired when the whole page has loaded,

document.addEventListener("DOMContentLoaded", function(){
    const header = document.querySelector("header");
    const mainContante = document.querySelector("main");
    const aboutMeSection = document.getElementById("aboutMe-part");
    // const aboutMeSection = document.getElementById("techs");
    console.log("DOMContentLoaded Executed");

    let lastKnowScrollPosition = 0;
    // ticking: A boolean flag to track if a scroll update is already scheduled.
    let ticking = false;

    function handleScroll(scrollPos){
        const aboutMeSectionTop = aboutMeSection.offsetTop + 40;
        
        if (!header.classList.contains('mobile')){
            if(scrollPos >= aboutMeSectionTop){
                header.classList.add('fixed');
                mainContante.classList.add('fixed-margin');
            }
            else{
                header.classList.remove('fixed');
                mainContante.classList.remove('fixed-margin');          
            }
        }
    }

    document.addEventListener('scroll', function(){
        lastKnowScrollPosition = window.scrollY;

        if(!ticking){
            // the function to call when it's time to update your animation for the next repaint.
            window.requestAnimationFrame(function(){
                handleScroll(lastKnowScrollPosition);
                ticking = false;
            });
            ticking = true;
        }
    })

    const resetMobileClasses = () => {
        if (window.innerWidth > 1024) {
            header.classList.remove('mobile');
            nav.classList.remove("active");
            hamburger.classList.remove("active");
            header.style.position = '';
            header.style.width = '';
        }
    }

    window.addEventListener("resize", resetMobileClasses);
})

let options = {
    root: null, 
    rootMargin: '0px', 
    threshold: 0.1 
};

// Observer - section scroll animations
let observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        //For showing anmation onces
        // if(entry.isIntersecting && !entry.target.classList.contains("show")){ //conditional added to avoid redundant animatio triggers
        if(entry.isIntersecting){ //conditional added to avoid redundant animatio triggers
            entry.target.classList.add("show");
        }//else if you want to show animation mutiple times
        else{
            entry.target.classList.remove("show");
        }
    })
}, options);

const sectionsElements = document.querySelectorAll(".hidden");
//loop through all section elements and observe it(with before defined observer)
sectionsElements.forEach((el) => observer.observe(el));


//Dinamicly add animationDelay values for tech-icons
const skillPart = document.querySelectorAll('.skills-part');

skillPart.forEach(section =>{
    const techIcons = section.querySelectorAll(".tech-icon");
    techIcons.forEach((icon, index) =>{
        icon.style.animationDelay = `${index * .07}s`;
        observer.observe(icon);
    })
})
