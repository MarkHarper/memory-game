app.router.route('easy', function () {
  
  app.display('header-template', '#header');
  var countDoun = 90;
  setTimeout(function(){ 
	 $('.gametracker').html('<span id="time">'+countDoun+'</span>');
	 }, 90000);
  
  app.displayTiles('tile-template', '#game-grid', 18);
  $('.tile').addClass('easy');
  
  //$('.tile').attr('id', );
  app.appendIcons(9);
  
  app.turn();

});