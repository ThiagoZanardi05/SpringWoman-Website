document.addEventListener('DOMContentLoaded', function() {

    // ---- SCRIPT DO CONTADOR REGRESSIVO ----
    const eventDate = new Date("2025-09-28T15:30:00").getTime();
    const countdownFunction = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "<h3>O EVENTO JÁ ACONTECEU!</h3>";
        }
    }, 1000);


    // ---- SCRIPT PARA HEADER TRANSPARENTE AO ROLAR ----
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
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
    const icon = menuHamburguer.querySelector('i');

    // Abre/fecha o menu ao clicar no hamburguer
    menuHamburguer.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Fecha o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

});