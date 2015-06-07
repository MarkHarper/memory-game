app.router.route('easy', function () {
  
  app.display('header-template', '#header');
  
  app.displayTiles('tile-template', '#game-grid', 18);
  $('.tile').addClass('easy');
  var x = 1;
  $('.tile').attr('id', 'tile'+x);
  
  $(".tile").flip();
  
  $('.front, .back').css('height', '100%');
  $('.front, .back').css('width', '100%');
  
  var count = 0;
  
  $('.tile').on('click', function (e) {
    e.preventDefault();
    count++;
    if (count%2 === 0) {
      //$('.tile').unbind('click');
    }
  });

});