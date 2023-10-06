const eyes = document.querySelectorAll(".feedback-block__eye")
const feedback = document.querySelector(".feedback-block")

eyes.forEach((value, index) => {
    feedback.addEventListener("mousemove", (e) => {
        var wD = document.querySelector(".wpapper").getBoundingClientRect().width;
        var posX = e.pageX - (window.screen.availWidth - wD) / 2;

        var hD = feedback.getBoundingClientRect().height;
        var posY = e.pageY - (document.body.getBoundingClientRect().height - hD) - 80

        if (index == 0) {
            if (posX / wD * 100 > 75 && posX / wD * 100 < 79)
                value.style.left = posX / wD * 100 + "%";
            else if (posX / wD * 100 < 75)
                value.style.left = 75 + "%"
            else
                value.style.left = 79 + "%"

            if (posY / hD * 100 < 63 && posY / hD * 100 > 55)
                value.style.top = posY / hD * 100 + "%";
            else if (posY / hD * 100 > 63)
                value.style.top = 63 + "%"
            else
                value.style.top = 55 + "%"
        } else {
            if (posX / wD * 100 > 75 && posX / wD * 100 < 79)
                value.style.left = posX / wD * 100 + 5 + "%";
            else if (posX / wD * 100 < 75)
                value.style.left = 81 + "%"
            else
                value.style.left = 86 + "%"

            if (posY / hD * 100 < 63 && posY / hD * 100 > 55)
                value.style.top = posY / hD * 100 + 6 + "%";
            else if (posY / hD * 100 > 63)
                value.style.top = 69 + "%"
            else
                value.style.top = 61 + "%"
        }
    })
})
