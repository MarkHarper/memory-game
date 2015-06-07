app.randomSelect = function (orderedIcons){
  var currentIndex = orderedIcons.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = orderedIcons[currentIndex];
    orderedIcons[currentIndex] = orderedIcons[randomIndex];
    orderedIcons[randomIndex] = temporaryValue;
  }
  var randomIcons = orderedIcons;
  return randomIcons;
}