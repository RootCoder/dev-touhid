$(document).ready(function() {
 
  $("#slider").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
	  autoPlay: true,
	  navigationText : ["<i class='fa fa-angle-left fa-5x'></i>","<i class='fa fa-angle-right fa-5x'></i>"],
	  pagination : false,
	  transitionStyle : "backSlide",
	  
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
	  
	  
   
 
  });
 
});
