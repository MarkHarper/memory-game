app.router.route('hard', function () {
  
  app.display('header-template', '#header');
  for (var i = 0; i < 32; i++) {
    app.displayTiles('tile-template', '#game-grid', 32);
    $('.tile').addClass('hard');
  }
  
  $(".tile").flip();
  
  $('.front, .back').css('height', '100%');
  $('.front, .back').css('width', '100%');

});