$(document).ready(function() {

    $(document).on('click', '.mobile-menu-icon', function() {
        $('.overlay-content').addClass('open-overlay');
        $('.mobile-megamenu').addClass('open-menu');
        $('body').addClass('overflow-hidden');
    });

     $(document).on('click', '.overlay-content', function() {
        $('.overlay-content').removeClass('open-overlay');
        $('.mobile-megamenu').removeClass('open-menu');
        $('body').removeClass('overflow-hidden');
    });

    $(document).on('click', '.close-icon', function() {
        $('.overlay-content').removeClass('open-overlay');
        $('.mobile-megamenu').removeClass('open-menu');
        $('body').removeClass('overflow-hidden');
    });

});