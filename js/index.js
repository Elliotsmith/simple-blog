window.onload = function() {
	
	// Controller for menu & title scroll animations
	/*
		This looks for windows scroll position if scroll is greater than
		80 the first set of animations will fire this sets the 'scrolled'
		flag to true confirming that the second set of animations can fire
		when the scroll is less than 80
	*/
	var scrolled = false;

	$(window).scroll(function() {
		var winPos = $(window).scrollTop();
		if (winPos > 5) {
			scrolled = true;
			document.getElementById("nav").style.boxShadow = "0 0 10px #666";
		} else if (winPos < 5 && scrolled === true) {
			document.getElementById("nav").style.boxShadow = "";
		}
	});
	
};