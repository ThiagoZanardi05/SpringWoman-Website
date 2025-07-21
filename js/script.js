// ---- SCRIPT DO CONTADOR REGRESSIVO ----

// Defina a data e hora do evento
const eventDate = new Date("2025-09-28T15:30:00").getTime();

// Atualiza o contador a cada segundo
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Seleciona os elementos do contador
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    // Atualiza o HTML somente se os elementos existirem
    if (daysEl && hoursEl && minutesEl && secondsEl) {
        daysEl.innerText = days.toString().padStart(2, '0');
        hoursEl.innerText = hours.toString().padStart(2, '0');
        minutesEl.innerText = minutes.toString().padStart(2, '0');
        secondsEl.innerText = seconds.toString().padStart(2, '0');
    }

    if (distance < 0) {
        clearInterval(countdownFunction);
        const countdownEl = document.getElementById("countdown");
        if(countdownEl) {
            countdownEl.innerHTML = "<h3>O EVENTO JÁ ACONTECEU!</h3>";
        }
    }
}, 1000);


// ---- SCRIPT DO MENU HAMBURGUER ----

const menuHamburguer = document.getElementById('menu-hamburguer');
const mainNav = document.getElementById('main-nav');

// Verifica se os elementos do menu existem antes de adicionar os eventos
if (menuHamburguer && mainNav) {
    const navLinks = mainNav.querySelectorAll('#nav-links li a');
    const icon = menuHamburguer.querySelector('i');

    // Função para abrir/fechar o menu
    menuHamburguer.addEventListener('click', () => {
        mainNav.classList.toggle('menu-open');

        // Troca o ícone de hambúrguer para 'X' e vice-versa
        if (icon && icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fecha o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('menu-open')) {
                mainNav.classList.remove('menu-open');
                // Restaura o ícone para hambúrguer
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });
}
// NÃO HÁ MAIS NENHUMA CHAVE '}' AQUI