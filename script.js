document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");

    // Cria um observer para detectar quando cada step entra na visualização
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1 // Define que o elemento precisa estar 10% visível para acionar a animação
    });

    // Observa cada elemento .step
    steps.forEach((step) => {
        observer.observe(step);
    });
});

// Obtém o elemento do header
const header = document.getElementById('header');

// Função para mostrar o header quando o scroll for feito
window.onscroll = function() {
    if (window.scrollY > 50) { // Quando o usuário rolar mais de 50px
        header.classList.add('show'); // Adiciona a classe "show"
    } else {
        header.classList.remove('show'); // Remove a classe "show" se o scroll for menor que 50px
    }
};
