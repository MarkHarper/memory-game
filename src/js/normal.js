app.router.route('normal', function () {
  
  app.display('header-template', '#header');
  for (var i = 0; i < 24; i++) {
    app.display('tile-template', '#game-grid');
    $('.tile').addClass('normal');
  }
  
  $(".tile").flip();
  
  $('.front, .back').css('height', '100%');
  $('.front, .back').css('width', '100%');

});