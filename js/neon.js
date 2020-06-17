const btnOff = document.querySelector(".baner li:nth-last-child(2) i");
const btnOn = document.querySelector(".baner li:nth-last-child(1) i");

const letters = [...document.querySelectorAll(".baner li")];

btnOff.addEventListener("click", () => {
    console.log('działa');
    letters.forEach(function (letter) {
        letter.classList.toggle("stop");
    })
    btnOff.classList.toggle("hide");
    btnOn.classList.toggle("hide");
})

btnOn.addEventListener("click", () => {
    letters.forEach(function (letter) {
        letter.classList.toggle("stop");
    })
    btnOn.classList.toggle("hide");
    btnOff.classList.toggle("hide");
})