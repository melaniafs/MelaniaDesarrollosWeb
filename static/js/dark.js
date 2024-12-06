

$(document).ready(function() {
    // Función para animar las secciones
    function animateSections() {
        $('.slide-in').each(function(index) {
            var $this = $(this);
            var elementTop = $this.offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < viewportBottom) {
                setTimeout(function() {
                    $this.addClass('section-visible');
                }, index * 500); // Retraso basado en el índice para animar uno a uno
            }
        });
    }

    // Animar las secciones al cargar la página
    animateSections();

    // Animar las secciones al hacer scroll
    $(window).on('scroll', function() {
        animateSections();
    });

    // Aplicar el modo oscuro si estaba previamente activado
    if (localStorage.getItem('darkMode') === 'enabled') {
        $('body').addClass('dark-mode');
        $('#toggle-theme').prop('checked', true);
    }

    // Cambiar entre modos claro y oscuro
    $('#toggle-theme').on('change', function() {
        if ($(this).is(':checked')) {
            $('body').addClass('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            $('body').removeClass('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});



