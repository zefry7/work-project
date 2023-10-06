const listQ = document.querySelectorAll(".lending-block__input")

listQ.forEach(value => {
    value.addEventListener("click", () => {
        var desc = document.querySelector(".lending-block__description")

        desc.textContent = value.getAttribute("data-desc");
    })
})