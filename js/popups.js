const setIcon = document.querySelector(".settings__icon-link:nth-last-child(1)");
const popups = document.querySelector(".popups");
const input = document.querySelector(".popups__input");
const percent = document.querySelector(".popups__neon span");


// włączenie panelu settings

const givePop = () => {
    console.log('włączę settingi');
    popups.classList.toggle("popupShow");
    popups.classList.toggle("jazda");

}
setIcon.addEventListener("click", givePop)


// ustawienie zmiany zaciemnienia tła
const changeLight = () => {
    let quantity = input.value;
    percent.textContent = quantity;
    document.documentElement.style.setProperty("--light", quantity);
    document.documentElement.style.setProperty("--glow", quantity + 'px');
}

input.addEventListener("change", changeLight);
input.addEventListener("mousemove", changeLight);