$(function() {
    $('.btn-trigger').on('click', function() {
        $(this).toggleClass('active');
        $('.nav-wrapper').fadeToggle(500);
        $('body').toggleClass('noscroll');
    });
});