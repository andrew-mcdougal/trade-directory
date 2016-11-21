(function($) {
	// $ Works! You can test it with next line if you like
	$(document).ready(function() {

		// Header slider
		$('.main-carousel').slick({
			arrows: true,
			dots: true,
			autoplay: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
		});
	

		function changeMeta() {
			$('meta[name=description]').attr('content', 'New Author Name');
		}

		changeMeta();



		$('.search-container select option:contains("Select Trade_category")').html('Trades and Services &#x25BC;');
		$('.search-container select option:contains("Select State_category")').html('State &#x25BC;');
		$('.search-container select option:contains("Select Region_category")').html('Area/Region/Suburb &#x25BC;');


	}); // end document ready



	jQuery(window).load(function() {
	//setTimeout(resetMap, 200);
	});




})( jQuery );