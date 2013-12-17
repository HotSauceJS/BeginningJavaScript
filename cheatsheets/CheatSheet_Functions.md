# JavaScript Flow Control Statements Cheat Sheet

Function Operator
-----------------

```
name(arg1, arg2)    // () is the operator
	     		    // arguments are optional
```

Functions
---------

```
function(arg1, arg2){   // anonymous function, optional arguments
	[statements];	    // multiple staments
	return value;	    // optionally return a value
}

function name(arg1, arg2){   // named function, optional arguments
	[statements];
	return value;
}

var name = function(arg1, arg2){   // locally named function, optional arguments
	[statements];
	return value;
}
```

Scope
-----

```
var a;							// a is available everywhere
var name = function(x, y){   	// x,y only available in function
	var z;						// z only available in function
	[statements];
	return value;
}
```