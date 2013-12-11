# JavaScript Flow Control Statements Cheat Sheet

Conditional Execution
---------------------

```
if (expression)  // if expression is true
  statement;     // execute statement

if (expression)  // if expression is true
  statement;     // execute statement
else             // otherwise
  statement;     // execute statement

if (expression)      // if expression is true
  statement;         // execute statement
else if (expression) // otherwise if expression is true
  statement;         // execute statement
```

```
switch (expression) {  // evaluate expression
   case label_1:       // if case
      statements;	   // execute statements
      break;
   case label_2:
      statements;
      break;
   ...
   default:			   // if no other case
      statements;	   // execute statements
      break;
}
```

Loops
-----	

```
while (condition)   // check if condition is true
   statements;      // loop over statement
```

```
do
   statement;        // loop over statement
while (condition);   // check if condition is true
```

```
for (initialize; condition; iterate;)
   statement;
```

```
break	   // exit loop
continue   // start next loop
```

Blocks
------
```
{
	statements;	   // group multiple statements
}
```