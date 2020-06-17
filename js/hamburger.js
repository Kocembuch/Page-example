const burger = document.querySelector(".menu__burger");
const menu = document.querySelector(".menu__burgerMenu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("show");
})