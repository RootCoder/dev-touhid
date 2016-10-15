$(document).ready(function(){
	 
	 var  windowHeight = window.innerHeight;
	 $('.header-feature').css('height', windowHeight);
	 
	 $(".owl-carousel").owlCarousel({
	 	items	: 1,
	 	autoplay : true,
	 	autoplayTimeout : 3000,
	 	smartSpeed	: 100,
	 	autoplaySpeed : true,
	 	loop	: true,
	 	animateOut	: 'lightSpeedOut',
	 	animateIn	: 'lightSpeedIn'
	 });

	 $(".search-box").hide();

	 $("i.fa.fa-search").click(function(){
	 	$(".search-box").fadeToggle();
	 });


	 var  windowWeight = window.innerWidth;
	 if(windowWeight > 1199 ){
	 $(".hidden-menu").hide();
	 $("li.menu").click(function(){
	 	$(".hidden-menu").fadeToggle(500);
	 });
	 }


	 $('.counter').counterUp({
	 	delay : 10 ,
	 	time  : 2000
	 });

	 $(".map-display").mousedown(function(){
	 	$(this).css("display", "none");
	 });
	 
	 $('#foinni-menu').sidr({
	 	side	: 'right'
	 });

});

