app.displayTiles = function (templateId, placement, tileNumber, model) {
  var templateHtml = $('#' + templateId).html();
  //console.log(templateHtml);
  var templateFn = _.template(templateHtml, { variable: 'm' });
  //console.log(templateFn);
  var result = templateFn(model);
  
  //console.log(app.randomSelect(app.chooseIcons(9)));
 
  //console.log(result);
  var results = '';
  for (var i = 0; i < tileNumber; i++) {
    results = results.concat(result);
  }
  //console.log('This is ' + results);
  $(placement).html(results);
  
  app.appendIcons();
  
};