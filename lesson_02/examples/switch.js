// A switch statement is an alternative to an if statement.

var dayOfWeek = 1;

switch(dayOfWeek){
  case 0:
    console.log('Monday');
    break;
  case 1:
    console.log('Tuesday');
  	break;
  case 2:
  	console.log('Wednesday');
  	break;
  case 3:
  	console.log('Thursday');
  	break;
  default:
    console.log('I dont know that date');
    break;
}

// Switch statements can match strings as well as numbers

var nameOfDay = 'Friday'

switch(nameOfDay){
	case 'Monday':
	  console.log('Horrible!');
	  break;
  case 'Tuesday':
	  console.log('Meh');
	  break;
	case 'Friday':
	  console.log('Yeah!');
	  break;
	default:
	  console.log("I don't know that day");
}

// Cases can serve multiple matches by just listing them together.

var nameOfDay = 'Wednesday'

switch(nameOfDay){
  case 'Monday':
    console.log('Horrible!');
    break;
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
    console.log('Meh');
    break;
  case 'Friday':
    console.log('Yeah!');
    break;
  default:
    console.log("I don't know that day");
}

// Actually, a case won't stop till it hits the break!

var nameOfDay = 'Tuesday'

switch(nameOfDay){
  case 'Monday':
    console.log('Horrible!');
    break;
  case 'Tuesday':
    console.log('So..');
  case 'Wednesday':
  case 'Thursday':
    console.log('Meh');
    break;
  case 'Friday':
    console.log('Yeah!');
    break;
  default:
    console.log("I don't know that day");
}