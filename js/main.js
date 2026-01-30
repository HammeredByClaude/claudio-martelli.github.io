document.addEventListener("DOMContentLoaded", function() {
    const secretDoc = document.getElementById('secret-doc');
    if (secretDoc) {
        secretDoc.addEventListener('click', function() {
            this.classList.toggle('revealed');
        });
    }
    const links = document.querySelectorAll('.nav ul li a');
    const slider = document.querySelector('.slider-container');
    if (slider && links.length > 0) {        
        links.forEach((link, index) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();                               
                slider.style.transform = `translateX(-${index * 100}%)`;
            });
        });
    }
});
