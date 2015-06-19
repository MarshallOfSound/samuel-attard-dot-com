$(function() {
    $('.downArrow').click(function() {
        var body = $("html, body");
        body.animate({scrollTop: $(window).height()}, '500', 'swing');
    });
    $(window).on('scroll resize', function() {
        $('.project').each(function() {
            var top = $(this).offset().top,
                height = $(this).height();

            if ($(window).scrollTop() > top + height + 20 - $(window).height() && top - 20 > $(window).scrollTop() && $(window).width() <= 700) {
                $(this).find('a').first().addClass('hover');
            } else {
                $(this).find('a').first().removeClass('hover');
            }
        });
    });
});