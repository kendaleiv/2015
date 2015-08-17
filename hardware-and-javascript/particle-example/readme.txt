This part was a little different.

This specific example requires a lot of LEDs, and powering all of them can be a bit tricky. I did this example to show the power of particle's function exposing. This one is not for beginners mainly for the power requirements. Don't try to power a 32x8 LED array off the particle alone, it's probably not good for it :( 

I'm going to go over the basics of how to run this though. Feel free to email me if you have any questions at kdurivage@gelicia.com

Example 1 was using Postman to send data to the exposed function. 
Example 2 was using IFTTT and the Particle channel to display text from an email subject

For this code to work with particle
1.) Open up the IDE you use with particle. Be sure your device is available under the device part, and have that device starred to be flashed to.
2.) Create a new app, name it midwestjs. You should see midwestjs.ino in the tab.
3.) Click the folder to save the app.
4.) Hit the bookmark button to open the libraries tab. See neopixel at the top of the list of community libraries. 
5.) Click on neopixel, click the "Include in app" button. It will show you a list of apps, click the MIDWESTJS app you just created. It will then open that app. Click "Add to this app"
6.) You'll see that it added an include statement to the top of the file. Clear out that file completely. Don't worry - the include statement is part of what you'll copy over.
7.) Open midwestjs.ino and copy paste the entire file into your app.
8.) You can flash this to your particle before doing any hardware stuff.

For the hardware side, we power this off a battery that gives off 11.5V. This is a lipo battery you might use in a larger quadcopter. It's ran through a voltage regulator tuned to drop the voltage down to 5V, and spit out as many amps as it can give out. 

From the voltage out of the battery, the power and ground wires are both forked. One set of power and ground goes to the VIN and GND pins of the particle, the other goes to the power and ground of the LED array. This makes sure the LED array gets power directly.

The code above uses Data pin 3 for no other reason than I like d3.js. Feel free to use a data pin of your choosing, just be sure to modify the pin in the code.

Again, if you're new at this, it's invaluable to have someone who knows electrical engineery type stuff help you with power so you don't burn out anything (including yourself!). Let me know if you need help! Alternatively, if any of you would like to pay me to run a workshop or something, let me know, I'd love to put something together for adults :) 