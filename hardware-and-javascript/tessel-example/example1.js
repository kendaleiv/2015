var Npx = require('npx');

var npx = new Npx(24);

var yourFirstAnimation = npx.newAnimation(1); // initialized with number of animation frames
var yourFavoriteHexColor = '#FF0000';

yourFirstAnimation.setAll(yourFavoriteHexColor);

npx.play(yourFirstAnimation);