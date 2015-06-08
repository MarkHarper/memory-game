app.router.route('normal', function () {
  
  app.display('header-template', '#header');
  for (var i = 0; i < 24; i++) {
    app.displayTiles('tile-template', '#game-grid', 24);
    $('.tile-container').addClass('normal');
  }
  
  app.appendIcons(12);
  
  app.turn();

});