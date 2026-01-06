$(document).ready(function(){

    // Función para igualar altura de tarjetas de la slide visible
    function equalizeVisibleCards() {
        const activeSlide = $('.carousel-item.active');
        const cards = activeSlide.find('.service-card');
        let maxHeight = 0;

        // Resetear altura para recalcular
        cards.css('min-height', '0');

        cards.each(function() {
            const cardHeight = $(this).outerHeight();
            if(cardHeight > maxHeight) maxHeight = cardHeight;
        });

        cards.css('min-height', maxHeight + 'px');
    }

    // Igualar altura al cargar
    equalizeVisibleCards();

    // Igualar altura al cambiar de slide
    $('#servicesCarousel').on('slid.bs.carousel', function () {
        equalizeVisibleCards();
    });

    // Igualar altura al redimensionar ventana
    $(window).on('resize', function() {
        equalizeVisibleCards();
    });

});
