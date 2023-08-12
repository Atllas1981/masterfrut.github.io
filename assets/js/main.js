(function($) {
    'use strict';

//Toggle Nav for mobile  menu
    $('.menu-toggle').click(function(){
        $('.menu-wrapper').toggleClass('active-nav');
    });


    //Toggle Nav for mobile menu
$('.open_bar').click(function(){
$('nav').addClass('active-nav');
$('.menu-toggle').addClass('closee');
});
$('.close_bar').click(function(){
$('nav').removeClass('active-nav');
$('.menu-toggle').removeClass('closee');
});

$(document).ready(function(){
    $('.venobox').venobox(); 
});

    
	 // Slider Active
$('.slider_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        smartSpeed: 1500,
        dots:true,
        nav: false,
        navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });	


    $('.testi-slider2').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1500,
        nav:false,
        dots: false,
        navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
        items:1,
    });


    $('.gallery-slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        smartSpeed: 1500,
        dots:false,
        nav: true,
        navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    }); 


    $('.brand-slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1500,
        dots:false,
        nav: false,
        navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 4
            },
            1920: {
                items: 5
            }
        }
    }); 

// blog slider

      $('.blog-slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        smartSpeed: 1500,
        dots:false,
        nav: false,
        navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });

(function($) {
    'use strict';
    
    // Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        onePage: false,
    }); 
    
})(jQuery);




  // Counter Up =========
jQuery(document).ready(function( $ ) {

    $('.counter').counterUp({
            time: 1500
    });

});


        /* Portfolio Isotope  */
    $('.image_load').imagesLoaded(function() {

        if ($.fn.isotope) {

            var $portfolio = $('.image_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '*',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });
            $('.menu-filtering li').on('click', function() {

                $('.menu-filtering li').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });

            });

        };

    });

    


   // Loder  //
    $(function () {
        $('body').addClass('loaded');
    });

         
    
         //Header Search
    if($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }


// sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky-nav');
        } else {
            sticky.addClass('sticky-nav');
        }
    });

// scroll strat============================

		 $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
    });

    $('.go-top').on('click', function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 1200);
    });





$('.tilt-effect').tilt({
maxTilt: 20,
perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
scale: 1, // 2 = 200%, 1.5 = 150%, etc..
speed: 300, // Speed of the enter/exit transition.
transition: true, // Set a transition on enter/exit.
disableAxis: null, // What axis should be disabled. Can be X or Y.
reset: true, // If the tilt effect has to be reset on exit.
glare: false, // Enables glare effect
maxGlare: 1 // From 0 - 1.
});


$("#to-top").click(function(){
$('html , body').animate({scrollTop :0},800)
});

// to wow Jquery
new WOW().init();
    

	
})(jQuery);






