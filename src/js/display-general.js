app.display = function (templateId, placement, model) {
  var templateHtml = $('#' + templateId).html();
  //console.log(templateHtml);
  var templateFn = _.template(templateHtml, { variable: 'm' });
  //console.log(templateFn);
  var result = templateFn(model);
  //console.log(result);
  $(placement).html(result);
};