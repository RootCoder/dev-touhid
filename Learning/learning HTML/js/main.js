$(document).ready(function() {
 	

  $('#responsive_button').sidr({
      name: 'sidr-main',
      source: '#main-menu',
      side 	: 'right',
      speed : 500,
      timing : 'ease-out'
    });


  $("#learning_slider").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
	  autoPlay: false,
	  transitionStyle : "backSlide",
	  navigationText : ["<i class='fa fa-angle-left fa-5x'></i>","<i class='fa fa-angle-right fa-5x'></i>"],
	  pagination : false
	  
   
 
  });

$("#slider").owlCarousel();

$('.filter_item').mixItUp({

	animation : {
		effects : 'fade rotateY(10deg) stagger',
		duration : 700,
		easing : 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
	}

});

$("#blog_slide").owlCarousel({

	items 			: 2,
	loop 			: true,
	autoPlay 		: 3000,
	transitionStyle : "fade",
	itemsDesktop : [1199,2],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,2],
    itemsMobile : [479,1],
   
});

// search
	
	$(".learning_search").hide();

	$(".search li").on("click", function(){
		$(".learning_search").slideToggle(500);
	})

 // main menu

 $(".main_menu ul li").on("click", function(){
 		$(".main_menu ul li").removeClass("active");
 		$(this).addClass("active");
 });

// Mixit up active effect
$(".filter_control ul.nav_filter li").on("click", function(){
	$(".filter_control ul.nav_filter li").removeClass("filter_active");
	$(this).addClass("filter_active");
});

// accordian active effect

$(".panel .panel-heading").on("click", function(){
	$(".panel .panel-heading").removeClass("accordian_active");
	$(this).addClass("accordian_active");
});


 
});
