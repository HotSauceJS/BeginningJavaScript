// blocks let us group multiple statements into one

// use them with ifs 
if ( 1+1 == 2 ) {
	console.log('1 + 1 ==', 1+1)
    console.log('all is right with the world');
}

// use them with ifs, else, and else if
if ( 1+1 == 3 ) {
    console.log('this would be interesting');
} else {
	console.log('1 + 1 != 3')
	console.log('this is just not true');
}

// blocks are also helpful with loops!

var num = 0;
while ( num < 10) {
	console.log('num is', num);
	console.log('double num is', num * 2);
	num++;
}

