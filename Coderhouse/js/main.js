$(document).ready(function() {
	
	
	  wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       100,          // default
      mobile:       true,       // default
      live:         true        // default
    }
  )
  wow.init();

  $(".one_slide_carousel").owlCarousel({
 
	  navigation : false, // Show next and prev buttons
	  slideSpeed : 300,
	  paginationSpeed : 400,
	  singleItem:true,
	  autoPlay: true,
	  autoPlay : 4000,
	  transitionStyle : "backSlide"
 
	  // "singleItem:true" is a shortcut for:
	  // items : 1, 
	  // itemsDesktop : false,
	  // itemsDesktopSmall : false,
	  // itemsTablet: false,
	  // itemsMobile : false
 
  });

  $('.header_area').scrolly({bgParallax: true});
 
});




var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});



