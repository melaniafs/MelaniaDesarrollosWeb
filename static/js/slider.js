$(document).ready(function() {
    function animateSections() {
        $('.slide-in').each(function() {
            var $this = $(this);
            var elementTop = $this.offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < viewportBottom) {
                setTimeout(function() {
                    $this.addClass('section-visible');
                }, $this.index() * 200); // Retraso basado en el índice
            }
        });
    }

    // Animar las secciones al cargar la página
    animateSections();

    // Animar las secciones al hacer scroll
    $(window).on('scroll', function() {
        animateSections();
    });
});



