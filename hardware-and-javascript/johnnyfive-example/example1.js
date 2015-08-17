var pixel = require("node-pixel");
var five = require("johnny-five");
 
var board = new five.Board();
 
board.on("ready", function() {
 
    var strip = new pixel.Strip({
        data: 6,
        length: 24,
        board: this,
        controller: "FIRMATA",
    });
 
    strip.on("ready", function() {
        strip.color("#ff0000");
		strip.show();
    });
});