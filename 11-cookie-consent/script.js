const accept_btn = document.querySelector(".accept-cookies");
const cookie_container = document.querySelector(".cookie-container");

if (localStorage.length>0) {
    cookie_container.style.display = "none";
}

accept_btn.addEventListener("click", () => {
    cookie_container.style.display = "none";
    localStorage.setItem('cookies', 'accepted');
})