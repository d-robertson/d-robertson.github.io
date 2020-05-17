$(document).ready(function(){

	var today = new Date();
    var date = today.getFullYear()
    var string = "&copy; "+date+" Derek Robertson. All rights reserved."

	$('#copy_reserved').html(string);
	

});

// Remove site preloader after site is loaded
$(window).load(function() {
	$('#sitePreloader').delay(1000).fadeOut(500, function() {
		$(this).remove();
	});
	
	// Fade site in
	$(".container").delay(1200).fadeIn(500);

	
});
