app.router.route('hard', function () {
  
  app.display('header-template', '#header');
  for (var i = 0; i < 32; i++) {
    app.displayTiles('tile-template', '#game-grid', 32);
    $('.tile-container').addClass('hard');
  }
  
  app.appendIcons(16);
  
  app.turn();
  
});