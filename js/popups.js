const setIcon = document.querySelector(".settings__icon-link:nth-last-child(1)");
const popups = document.querySelector(".popups");
const input = document.querySelector(".popups__input");
const percent = document.querySelector(".popups__neon span");


// włączenie panelu settings

const givePop = () => {
    console.log('włączę settingi');
    popups.classList.toggle("popupShow");

}
setIcon.addEventListener("click", givePop)


// ustawienie zmiany zaciemnienia tła
const changeLight = () => {
    let quantity = parseInt(input.value, 10);
    percent.textContent = quantity;
    document.documentElement.style.setProperty(`--light`, `${100 - quantity}%`);
    document.documentElement.style.setProperty("--glow", quantity + 'px');
    document.body.style.filter.brightness = `10%`
}

input.addEventListener("change", changeLight);
input.addEventListener("mousemove", changeLight);