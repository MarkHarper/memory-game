app.router.route('normal', function () {
  
  app.display('header-template', '#header');
  for (var i = 0; i < 24; i++) {
    app.displayTiles('tile-template', '#game-grid', 24);
    $('.tile').addClass('normal');
  }
  
  $(".tile").flip();
  
  $('.front, .back').css('height', '100%');
  $('.front, .back').css('width', '100%');

});