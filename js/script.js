// ---- SCRIPT DO CONTADOR REGRESSIVO ----
const eventDate = new Date("2025-09-28T15:30:00").getTime();
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysEl = document.getElementById("days"), hoursEl = document.getElementById("hours"), minutesEl = document.getElementById("minutes"), secondsEl = document.getElementById("seconds");

    if (daysEl && hoursEl && minutesEl && secondsEl) {
        daysEl.innerText = days.toString().padStart(2, '0');
        hoursEl.innerText = hours.toString().padStart(2, '0');
        minutesEl.innerText = minutes.toString().padStart(2, '0');
        secondsEl.innerText = seconds.toString().padStart(2, '0');
    }

    if (distance < 0) {
        clearInterval(countdownFunction);
        const countdownEl = document.getElementById("countdown");
        if(countdownEl) countdownEl.innerHTML = "<h3>O EVENTO JÁ ACONTECEU!</h3>";
    }
}, 1000);


// ---- SCRIPT PARA HEADER TRANSPARENTE AO ROLAR ----
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});


// ---- SCRIPT DO MENU HAMBURGUER ----
const menuHamburguer = document.getElementById('menu-hamburguer');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Abre/fecha o menu ao clicar no hamburguer
menuHamburguer.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuHamburguer.querySelector('i').classList.toggle('fa-bars');
    menuHamburguer.querySelector('i').classList.toggle('fa-times');
});

// Fecha o menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuHamburguer.querySelector('i').classList.remove('fa-times');
            menuHamburguer.querySelector('i').classList.add('fa-bars');
        }
    });
});