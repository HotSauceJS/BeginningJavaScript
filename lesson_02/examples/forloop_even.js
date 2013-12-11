// write a loop that logs all even numbers up to 20
// there are many approaches!

// an integer divided by 2 will have a remainder of 0 if it is even
for (var num = 0; num < 20; num++) {
	if (num % 2 == 0)
		console.log(num);
}

// or you could just increment twice!
for (i = 1; i < 20; i++){
	i++;
	console.log(i);
}

// it's important to remember 
// loops don't always have to use steps of 1
for (b=0; b<=20; b += 2) {
	console.log(b);
}

// notice how all the loops have a different set of numbers?
// the initial number e.g (b = 0) and conditional ( i < 20 )
// are very important!