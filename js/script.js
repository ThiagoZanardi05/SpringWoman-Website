// ---- SCRIPT DO CONTADOR REGRESSIVO ----

// Defina a data e hora do evento
const eventDate = new Date("2025-09-28T15:30:00").getTime();

// Atualiza o contador a cada segundo
const countdownFunction = setInterval(() => {
    // Pega a data e hora de hoje
    const now = new Date().getTime();
    
    // Encontra a distância entre agora e a data do evento
    const distance = eventDate - now;
    
    // Cálculos de tempo para dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Mostra o resultado nos elementos com os IDs correspondentes
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    
    // Se a contagem terminar, escreva uma mensagem
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "<h3>O EVENTO JÁ ACONTECEU!</h3>";
    }
}, 1000);