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
