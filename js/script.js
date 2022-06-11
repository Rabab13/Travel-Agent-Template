// const menuIcon = document.querySelector('.menu-icon')
// const navLinks = document.querySelector('.nav-links')
// const links = document.querySelectorAll('.nav-links li')

// menuIcon.addEventListener("click",()=>{
//     //Animate links
//     navLinks.classList.toggle("open")
//     links.forEach(link =>{
//         link.classList.toggle("fade")
//     });
//     menuIcon.classList.toggle("toggle")
// });                               

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}