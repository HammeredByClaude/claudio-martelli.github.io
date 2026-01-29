// File: js/main.js

document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. GESTIONE DOCUMENTO CLASSIFIED ---
    const secretDoc = document.getElementById('secret-doc');

    // Controllo se l'elemento esiste per evitare errori se cambi pagina
    if (secretDoc) {
        secretDoc.addEventListener('click', function() {
            // Aggiunge o rimuove la classe "revealed" al contenitore
            this.classList.toggle('revealed');
        });
    }

    // --- 2. GESTIONE NAVIGAZIONE SLIDER ---
    const links = document.querySelectorAll('.nav ul li a');
    const slider = document.querySelector('.slider-container');

    // Controllo se gli elementi esistono
    if (slider && links.length > 0) {
        // Assegniamo gli indici automaticamente in base all'ordine nel menu HTML
        links.forEach((link, index) => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Blocca il salto standard del link
                
                // Sposta il contenitore: 0%, -100%, -200% ecc.
                slider.style.transform = `translateX(-${index * 100}%)`;
            });
        });
    }
});