const arrow = document.querySelector(".main-block__arrow")

arrow.addEventListener("click", (event) => {
    event.preventDefault()
    
    window.scroll({
        top: document.querySelector(".name-block").getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
    })
})