var Npx = require('npx');

var npx = new Npx(24);

var red = [0xFF, 0x00, 0x00];
var orange = "#FFAF00";
var yellow = "#FFF000";
var green = [0x00, 0xFF, 0x00];
var blue = [0x00, 0x00, 0xFF];
var violet = [0xFF, 0x00, 0xFF];
var colors = [red, orange, yellow, green, blue, violet];

// For each color
for (var i = 0; i < colors.length; i++) {
	var animation = npx.newAnimation(1, 1);

	//create a pattern starting with the color of the index
	var pattern = colors.slice(i).concat(colors.slice(0, i));
	//console.log(pattern);

	animation.setPattern(pattern);
	npx.enqueue(animation, 100);
};

npx.loop();