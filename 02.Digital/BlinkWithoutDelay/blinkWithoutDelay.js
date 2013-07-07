/* Blink without Delay
 
 Turns on and off a light emitting diode(LED) connected to a digital  
 pin, without using the delay() function.  This means that other code
 can run at the same time without being interrupted by the LED code.
 
 The circuit:
 * LED attached from pin 13 to ground.
 * Note: on most Arduinos, there is already an LED on the board
 that's attached to pin 13, so no hardware is needed for this example.
 
 
 created 2005
 by David A. Mellis
 modified 8 Feb 2010
 by Paul Stoffregen
 ported to Johnny-Five 2 July 2013
 by Bob Holt
 
 This example code is in the public domain.

 
 http://www.arduino.cc/en/Tutorial/BlinkWithoutDelay
 */

// Note: JavaScript timers are asynchronous
// This implementation is the same as 01.Basics/Blink/blink.js
var five = require( 'johnny-five' );

// The board's pins will not be accessible until
// the board has reported that it is ready
five.Board().on( 'ready', function() {

  // Pin 13 has an LED connected on most Arduino boards.
  // give it a name:
  var led = 13;

  // Set initial value to off
	var val = 0;

	// Set led pin to OUTPUT mode
	this.pinMode( led, 1 );

	// the loop routine runs over and over again forever to "flash/blink/strobe" an led
	this.loop( 1000, function() {

		this.digitalWrite( led, (val = val ? 0 : 1) );

	});

});