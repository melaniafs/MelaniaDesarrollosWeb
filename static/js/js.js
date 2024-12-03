//loader del inicio
document.addEventListener("DOMContentLoaded", function() { 
    var preloader = document.querySelector('.preloader'); 
    window.addEventListener('load', function() { 
        preloader.style.display = 'none'; 
    }); 
});

//cambio de palabras
document.addEventListener("DOMContentLoaded", function() {
    var words = ["INFORMATIVA", "ÚNICA", "ATRACTIVA", "DESTACADA"];
    var index = 0;
    var element = document.getElementById("changing-word");
    
    setInterval(function() {
        element.textContent = words[index];
        index = (index + 1) % words.length;
    }, 2000); // Cambia la palabra cada 2 segundos (2000 milisegundos)
});

//DESLIZAMIENTO DE SECCIONES
// JavaScript para manejar la animación de deslizamiento
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.slide-in');

    if (sections) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });
    } else {
        console.error('No se encontraron secciones para observar.');
    }
});
