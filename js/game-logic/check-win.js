app.checkWin = function (difficulty) {
	console.log(difficulty);
	var count = 0;
	$( ".tile" ).each(function(  ) {
		if ($(this).hasClass('correct')) {
			count++;
		}
	});
	if (count>=difficulty) {
		alert('you win');
	}
}