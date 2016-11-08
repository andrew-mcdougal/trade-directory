(function($) {
	// $ Works! You can test it with next line if you like
	$(document).ready(function() {

		// Header slider
		$('.main-carousel').slick({
			arrows: true,
			dots: true,
			autoplay: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
		});
	

		function changeMeta() {
			$('meta[name=description]').attr('content', 'New Author Name');
		}

		changeMeta();


	}); // end document ready



	jQuery(window).load(function() {
	//setTimeout(resetMap, 200);
	});




})( jQuery );