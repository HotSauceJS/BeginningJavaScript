// a loop is a way of repeating code

var num = 0;
// this statement tells the next one to repeat 
// that is, till num < 5 is no longer true!
while ( num < 5)
	console.log(num++);


// when the condition is false, the loop stops
// if the condition is always fals, the loop never starts
while (false)
	console.log('This will never run!');

// if you want to check at the bottom
// use a do-while loop
var num = 0;
do
  console.log(num++);
while( num < 5)

// be carfule though
// now a false loop will run at least once!
do
  console.log('This will run once, but never loop!');
while( false );