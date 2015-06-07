app.router.route('easy', function () {
  
  app.display('header-template', '#header');
  for (var i = 0; i < 18; i++) {
    app.display('tile-template', '#game-grid');
  }
  
  $(".tile").flip();

});