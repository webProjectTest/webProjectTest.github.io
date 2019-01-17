$(window).on('load', function(){
  $(".hameid-loader-overlay").hide();  
});
$(document).ready(function() {
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  //hide collapsible navbar on click
  $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });
  //get current year for copyright
  let year = new Date().getFullYear();
  $('#currentYear').text(year);
  //add selected class to side menu
  $('.category').on('click', function(){
    $('.category').removeClass('selected');
    $(this).addClass('selected');
  });
});

