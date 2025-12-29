/**
 * Eastend Visa Consulting
 *
 * This file contains all theme JS functions
 *
 * @package 
--------------------------------------------------------------
				   Contents
--------------------------------------------------------------
* 01 - Owl Caserol 
        - Blog-slider
        - Choose Country
* 02 - Video Play
* 03 - Facts Count
* 04 - Navigation / Menu
* 05 - Smooth Scroll
* 06 - Mailchimp Form
* 07 - Preloader

--------------------------------------------------------------*/

(function($) {
  "use strict";

  var $window = $( window )
 
/* ================================= */
  /*===== Owl Caserol =====*/
/* ================================= */
// Blog-slider  
    $("#blog-slider").owlCarousel({
      loop: true,
      items: 3,
      dots: false,
      nav: true,      
      autoplayTimeout: 10000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="flaticon-left-arrow" aria-hidden="true"></i>', '<i class="flaticon-right-arrow" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 2,
            nav: false,
            dots: false,
        },
        768: {
            items: 2,
            nav: true,
            dots: false,
        },
        1100: {
            items: 3,
            nav: true,
            dots: false,
        }
      }
    });
    
// Choose Country  
    $("#choose-country-slider").owlCarousel({
      loop: true,
      items: 4,
      dots: false,
      nav: false,      
      autoplayTimeout: 10000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 2,
            nav: false,
            dots: false,
        },
        768: {
            items: 3,
            nav: false,
            dots: false,
        },
        1100: {
            items: 4,
            nav: false,
            dots: false,
        }
      }
    });

/* ================================= */
    /*===== Video Play =====*/
/* ================================= */    
    $('.btn-video-play').on('click',function() {
      $('.video-item .video-preview').append(video_url);
      $(this).hide();
    });  

/* /* ================================= */
    /*===== Facts Count  =====*/
/* ================================= */ 
    if ($('.counter').length) {   
      $('.counter').counterUp({
        delay: 20,
        time: 2000
      });
    }

/* ================================= */
    /*===== Navigation / Menu  =====*/
/* ================================= */ 
    $("#cssmenu").menumaker({
      title: "Menu",
      format: "multitoggle"
    });

/* ================================= */
    /*===== Smooth Scroll =====*/
/* ================================= */ 
    smoothScroll.init();

/* ================================= */
    /*===== Mailchimp Form =====*/
/* ================================= */   
    $('#subscribe-form').ajaxChimp({
        url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh9'
    });

 /* ================================= */
  /*===== Preloader =====*/
/* ================================= */ 
  $window.on('load', function()  { 
    $('.status').fadeOut();
    $('.preloader').delay(350).fadeOut('slow'); 
  }); 

})(jQuery);