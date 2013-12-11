// for loops take the form
// for(start; check; action)


// This loop counts from 0 to 9
for(var num = 0; num < 10; num++)
	console.log(num);

// This loop counts from 10 to 1
for(var num = 10; num > 0; num--)
	console.log(num);

// If you want to loop more than one statement
// use blocks like this {}
for(var num = 10; num > 0; num--){
	var doubleNum = num * 2;
	console.log(doubleNum);
}

// You can put whatever you like inside blocks
for(var num = 0; num < 10; num++){
	if (num % 2 == 0)
		var doubleNum = num * 2;
	else 
		var doubleNum = -num * 2;
	console.log(doubleNum);
}