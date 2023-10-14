let menu = document.querySelector(".menu_icon")
let cont = document.querySelector(".menu_cont")
let media = document.querySelector(".media")
menu.addEventListener("click",()=>{
    cont.classList.toggle("show_cont")
    console.log("clicked")
})
function LWindow(){
window.open('https://www.linkedin.com/in/aman-gupta-721953250/');
}
function iWindow(){
    window.open('https://www.instagram.com/');
}
function fWindow(){
    window.open('https://www.facebook.com/profile.php?id=100034360563388');
}
function tWindow(){
    window.open('https://twitter.com/home');
}