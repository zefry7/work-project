
const menu = document.querySelector(".burger-menu__button");
menu.addEventListener("click", () =>{
    const headerBlock = document.querySelector(".header");
    headerBlock.classList.toggle("burger-menu__button_active")
})