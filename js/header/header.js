const headerBlock = document.querySelector(".header");
const menu = document.querySelector(".burger-menu__button");
menu.addEventListener("click", () => {
    headerBlock.classList.toggle("burger-menu__button_active")
    document.body.classList.toggle("body-blocker")
})

window.addEventListener("resize", () => {
    if (screen.width > 768 && headerBlock.className.indexOf("burger-menu__button_active") != -1) {
        headerBlock.classList.remove("burger-menu__button_active")
    }
})

const links = document.querySelectorAll(".header__link");

links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault()

        if (link.className.indexOf("burger-menu__link") != -1) {
            headerBlock.classList.remove("burger-menu__button_active")
            document.body.classList.remove("body-blocker")
        }

        const pos = document.getElementsByClassName(link.getAttribute("data-scroll"))[0].getBoundingClientRect().top + window.scrollY - 80;

        window.scrollTo({
            top: pos,
            behavior: 'smooth'
        });

    })
})

const logo = document.querySelector(".header__block-logo");

logo.addEventListener("click", (event) => {
    event.preventDefault()

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})


const list = document.querySelectorAll(".anim-block")

list.forEach((value) => {
    document.addEventListener("scroll", () => {
        const posBlock = value.getBoundingClientRect().top
        const heightBlock = document.getElementsByClassName(value.classList[0])[0].getBoundingClientRect().height

        console.log(posBlock);
        if (posBlock - 5 * window.innerHeight / 6 < 0) {
            value.classList.add("anim-block_active");
        }
    })
})


// const addAnim = (value) => {
//     value.forEach(el => {
//         if (el.target.className.indexOf("anim-block_active") == -1)
//             el.target.classList.toggle("anim-block_active", el.isIntersecting)
//     })
// }
// const options = {
//     rootMagin: "0px 0px 0px 200px",
//     threshold: 0
// }

// const observer = new IntersectionObserver(addAnim, options)

// const list = document.querySelectorAll(".anim-block")
// list.forEach(value => {
//     observer.observe(value)
// })


const listScroll = document.querySelectorAll(".scroll")

listScroll.forEach((value, index) => {
    document.addEventListener("scroll", () => {
        const posBlock = document.getElementsByClassName(value.classList[0])[0].getBoundingClientRect().top
        const heightBlock = document.getElementsByClassName(value.classList[0])[0].getBoundingClientRect().height

        if (posBlock - window.innerHeight / 2 < 0 && posBlock - window.innerHeight / 2 > (-1) * heightBlock) {
            links[index].classList.add("header__link_use");
        }
        else {
            links[index].classList.remove("header__link_use");
        }
    })
})
