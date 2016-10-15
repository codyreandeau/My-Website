$(window).on('scroll', function () {
    if ($(this).scrollTop() > 40) {
        if (!$('#nav_wrapper').hasClass('shrink')) {
            $('#nav_wrapper').addClass('shrink');
        }
    } else {
        if ($('#nav_wrapper').hasClass('shrink')) {
            $('#nav_wrapper').removeClass('shrink');
        }
    }

     if ($(this).scrollTop() > 40) {
        if (!$('#header_wrapper').hasClass('shrink')) {
            $('#header_wrapper').addClass('shrink');
        }
    } else {
        if ($('#header_wrapper').hasClass('shrink')) {
            $('#header_wrapper').removeClass('shrink');
        }
    }
});

