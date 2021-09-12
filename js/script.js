$(function() {
    $('.btn-trigger').on('click', function() {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('header-nav1');
        $('.header-nav1').fadeToggle(500);
        return false;
    });
});