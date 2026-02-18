/* import './style.css'; */
import Flickity from 'flickity';
import flickityFade from 'flickity-fade';

//Hamburger Toggle menu
jQuery(function ($) {
  $('#hamburger_toggle').click(function () {
      $(this).toggleClass('is-active');
      $('#mobile_menu').toggle();
  });
});

/* BACK TO TOP */
$(document).ready(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('#backToTop').fadeIn();
      } else {
          $('#backToTop').fadeOut();
      }
  });

  $('#backToTop').on('click', function() {
      $('html, body').animate({ scrollTop: 0 }, 120, 'swing'); 
      return false;
  });
})
