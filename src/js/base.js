$(function() {
    $('.downArrow').click(function() {
        var body = $("html, body");
        body.animate({scrollTop: $(window).height()}, '500', 'swing');
    });
});