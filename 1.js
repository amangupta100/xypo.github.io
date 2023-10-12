let menu = document.querySelector(".menu_icon")
let cont = document.querySelector(".menu_cont")
menu.addEventListener("click",()=>{
    cont.classList.toggle("show_cont")
    console.log("clicked")
})