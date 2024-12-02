document.addEventListener("DOMContentLoaded", function() { 
    var preloader = document.querySelector('.preloader'); 
    window.addEventListener('load', function() { 
        preloader.style.display = 'none'; 
    }); 
});

document.addEventListener("DOMContentLoaded", function() {
    var words = ["INFORMATIVA", "ÚNICA", "ATRACTIVA", "DESTACADA"];
    var index = 0;
    var element = document.getElementById("changing-word");
    
    setInterval(function() {
        element.textContent = words[index];
        index = (index + 1) % words.length;
    }, 2000); // Cambia la palabra cada 2 segundos (2000 milisegundos)
});
