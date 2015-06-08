app.turn = function (difficulty) {
    var count = 0;
	  $('.tile').on('click', function (e) {
    e.preventDefault();
    $('#'+$(this)[0].id).addClass('flip');
    count++;
    //console.log($(this)[0].id);
    if (count%2!==0) {
     $('#'+$(this)[0].id).addClass('selected1');
     return false;
    }
    else {
      $('#'+$(this)[0].id).addClass('selected2');
      app.matchListener();
      setTimeout(function() {
			$('.flip').removeClass('flip');
		  }, 400);
      $('.tile').removeClass('selected1');
      $('.tile').removeClass('selected2');
      app.checkForLoss();
      app.checkWin(difficulty);
      return true;     
    }
    //console.log(count);
  });
  //console.log(count);
}