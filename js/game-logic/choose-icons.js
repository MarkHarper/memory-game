app.chooseIcons = function (difficulty) {
	var icons = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q'];
	//console.log(icons.length);
	var chosen = [];
	for (var index = 0; index < difficulty; index++){
		chosen.push(icons[index]);
	}
	console.log(chosen.concat(chosen));
	return chosen.concat(chosen);
}