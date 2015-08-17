var pixel = require("node-pixel");
var five = require("johnny-five");
 
var board = new five.Board();
 
board.on("ready", function() {
    //this only works if the stripLength < 255
    var stripLength = 24;
    var delay = 50;
    var offset = 0;

    var strip = new pixel.Strip({
        data: 6,
        length: stripLength,
        board: this,
        controller: "FIRMATA",
    });

    strip.on("ready", function() {
        board.loop(delay, function(){
            drawRainbow(offset);
            offset++;
            if (offset > stripLength){
                offset=0;
            }
            strip.show();
        });
    });

    //draw the strip in a rainbow, starting at the offset pixel
    function drawRainbow(offset){
        for (var i = 0; i < stripLength; i++) {
            var p = strip.pixel(i);
            p.color(colorWheel(Math.floor((255/stripLength) * ((i+offset) % stripLength))));
        }
    }
});

// Input a value 0 to 255 to get a color value.
// The colors are a transition r - g - b - back to r.
function colorWheel( WheelPos ){
    var r,g,b;
    WheelPos = 255 - WheelPos;

    if ( WheelPos < 85 ) {
        r = 255 - WheelPos * 3;
        g = 0;
        b = WheelPos * 3;
    } else if (WheelPos < 170) {
        WheelPos -= 85;
        r = 0;
        g = WheelPos * 3;
        b = 255 - WheelPos * 3;
    } else {
        WheelPos -= 170;
        r = WheelPos * 3;
        g = 255 - WheelPos * 3;
        b = 0;
    }
    // returns a string with the rgb value to be used as the parameter
    return "rgb(" + r +"," + g + "," + b + ")";
}