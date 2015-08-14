/******************************************************************************
    Transforms the basic Twitter Bootstrap Carousel into Fullscreen Mode
    @author Fabio Mangolini
     http://www.responsivewebmobile.com
******************************************************************************/
(function($, W, D) {
    var CAROUSEL = {};

    CAROUSEL.UTIL = {
        intiCarousel: function() {
            $('.carousel').carousel({
                pause: "false",
                interval: 800000000
            });

            if ($(W).width() > 450 && $(W).width() < 750) {
                $('.carousel').css({
                    'margin': 0,
                    'width': $(window).outerWidth(),
                    'height': $(window).outerHeight() - 100
                });
                $('.carousel .item').css({
                    'margin': 0,
                    'width': $(window).outerWidth(),
                    'height': $(window).outerHeight() - 100
                });
            } 
            else if ($(W).width() < 450 ) {
                $('.carousel').css({
                    'margin': 0,
                    'width': $(window).outerWidth(),
                    'height': $(window).outerHeight() - 100
                });
                $('.carousel .item').css({
                    'margin': 0,
                    'width': $(window).outerWidth(),
                    'height': $(window).outerHeight() - 100
                });
            }
            else {
                $('.carousel').css({
                    'margin': 0,
                    'width': $(window).outerWidth(),
                    'height': $(window).outerHeight() - 200
                });
                $('.carousel .item').css({
                    'margin': 0,
                    'width': $(window).outerWidth(),
                    'height': $(window).outerHeight() - 200
                });
            }
        },
        setImageBack: function() {
            $('.carousel-inner div.item img').each(function() {
                var imgSrc = $(this).attr('data-src');
                $(this).parent().css({
                    'background': 'url(' + imgSrc + ') center center no-repeat',
                    '-webkit-background-size': '100% ',
                    '-moz-background-size': '100%',
                    '-o-background-size': '100%',
                    'background-size': '100%',
                    '-webkit-background-size': 'cover',
                    '-moz-background-size': 'cover',
                    '-o-background-size': 'cover',
                    'background-size': 'cover'
                });
            });
        },

        setImageBackIpad: function() {
            $('.carousel-inner div.item img').each(function() {
                var imgSrc = $(this).attr('data-ipad');
                $(this).parent().css({
                    'background': 'url(' + imgSrc + ') center center no-repeat',
                    '-webkit-background-size': '100% ',
                    '-moz-background-size': '100%',
                    '-o-background-size': '100%',
                    'background-size': '100%',
                    '-webkit-background-size': 'cover',
                    '-moz-background-size': 'cover',
                    '-o-background-size': 'cover',
                    'background-size': 'cover'
                });
            });
        },
        setImageBackMobile: function() {
            $('.carousel-inner div.item img').each(function() {
                var imgSrc = $(this).attr('data-mobile');
                $(this).parent().css({
                    'background': 'url(' + imgSrc + ') center center no-repeat',
                    '-webkit-background-size': '100% ',
                    '-moz-background-size': '100%',
                    '-o-background-size': '100%',
                    'background-size': '100%',
                    '-webkit-background-size': 'cover',
                    '-moz-background-size': 'cover',
                    '-o-background-size': 'cover',
                    'background-size': 'cover'
                });
            });
        }
    }
    $(D).ready(function($) {
        CAROUSEL.UTIL.intiCarousel();
        if ($(W).width() == 768) {
            CAROUSEL.UTIL.setImageBackIpad()

        } else if ($(W).width() < 465) {
            CAROUSEL.UTIL.setImageBackMobile()
        } else {
            CAROUSEL.UTIL.setImageBack()
        }
    })

    $(W).on('resize', function() {
        CAROUSEL.UTIL.intiCarousel();
        if ($(W).width() == 768) {
            CAROUSEL.UTIL.setImageBackIpad()

        } else if ($(W).width() < 465) {
            CAROUSEL.UTIL.setImageBackMobile()
        } else {
            CAROUSEL.UTIL.setImageBack()
        }
    })
})(jQuery, window, document);
