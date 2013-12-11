// log out the day name, days start 0,1,2,3,4,5,6

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

var nameOfDay = 'Friday'

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