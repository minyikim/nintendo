$(function () {

	// Show/hide the footer button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 400) {
			$('#top').fadeIn(200);
		} else {
			$('#top').fadeOut(200);
		}
	});

	// Animate scrolling
	$('#top').click(function(e) {
		e.preventDefault();		
		$('html, body').animate({scrollTop: 0}, 500, 'easeOutQuart');
	});
	
});
