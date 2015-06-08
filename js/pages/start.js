(function () {
  app.router.route('', app.display('new', '#header'));
  app.router.route('start', app.display('new', '#header'));
  
  $('#easy-button').on('click', function (e) {
      e.preventDefault();

      document.location = '#easy';
    });
    
  $('#normal-button').on('click', function (e) {
    e.preventDefault();

    document.location = '#normal';
  });
  
  $('#hard-button').on('click', function (e) {
    e.preventDefault();

    document.location = '#hard';
  });

})();
