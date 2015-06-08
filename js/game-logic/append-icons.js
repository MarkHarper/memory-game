app.appendIcons = function (difficulty) {
	var iconArray = app.randomSelect(app.chooseIcons(difficulty));
	$( ".tile" ).each(function( index ) {
		$(this).attr('id', index);
		$('#'+index).find('.icon').text(iconArray[index]);
		//console.log( index + ": " + $( this ).text() );
		//console.log(iconArray[index]);
	});
};