app.matchListener = function () {
    //console.log($('.selected1').find('.icon').text());
	if ($('.selected1').find('.icon').text()===$('.selected2').find('.icon').text()) {
		console.log(true);
		$('.selected1').addClass('correct');
		$('.selected2').addClass('correct');
		return true;
	}
	else if ($('.selected1').find('.icon').text()!==$('.selected2').find('.icon').text()){
		var hearts = $('#lives').text();
		hearts = hearts.substring(0, hearts.length -1);
		console.log(hearts);
		$('#lives').html('<span id="lives">'+hearts+'</span>');
		//$( ".tile" ).each(function( index ) {
		//if ($(this).hasClass('correct')) {
		//	return false;
		//}
		//else {
		///	}
		//});
		console.log(false);
		return false;
	}
}