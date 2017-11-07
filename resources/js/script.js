// The way a jQuery starts. This ensure that this code can only run after the document has been loaded
$(document).ready(function() {

    // We select our Section features, we wall the method waypoint a we pass a function with the argument direction
    // which actually detects if the user is scrolling down or up the page
    $('.js--section-features').waypoint(function (direction) {

        // If user scrolls down
        if (direction === 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px' // We can specify some offset
    });


    /* SCROLL ON BUTTONS */

    $('.js--scroll-to-plans').click(function () {

        // In order to make animated scroll we need to select html and body
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000) // This is the speed of the animation
    });

    $('.js--scroll-to-start').click(function () {

        // In order to make animated scroll we need to select html and body
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000) // This is the speed of the animation
    });

    /* NAVIGATION SCROLL */

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


    /* ANIMATIONS ON SCROLL */

    // When user arrives to '.js--wp-1...
    $('.js--wp-1').waypoint(function (direction) {

        // In order to use Animate.css all we need to do is adding the class name 'animated' plus the one we wish to use
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%' // This would be more or less in the middle of page
    });

    // When user arrives to '.js--wp-2...
    $('.js--wp-2').waypoint(function (direction) {

        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    // When user arrives to '.js--wp-3...
    $('.js--wp-3').waypoint(function (direction) {

        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    // When user arrives to '.js--wp-4...
    $('.js--wp-4').waypoint(function (direction) {

        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    /* MOBILE NAVIGATION */
    $('.js--nav-icon').click(function () {

        // We select the js--main-nav
        var nav = $('.js--main-nav');
        // We select our icon
        var icon = $('.js--nav-icon i');

        // slideToggle open and close a box
        nav.slideToggle(200); // We set to take 2 milliseconds


        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

    /* MAPS */
    var map = new GMaps({
        div: '.map', // This is where our map will appear
        lat: 38.7436883,
        lng: -9.05, // Before -9.1953085, we changed it to make visible to the left
        zoom: 12 // Initial value is 15
    });

    map.addMarker({
        lat: 38.74368834,
        lng: -9.1953085,
        title: 'Lisbon',
        infoWindow: {
            content: '<p>Our Lisbon headquarters</p>'
        }
    });

});