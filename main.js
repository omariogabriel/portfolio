const menuButton = document.querySelector(".menu-hamburguer")
const menu = document.querySelector(".header-nav-list")

menuButton.addEventListener("click", ()=>{
    menu.classList.toggle('active')
})