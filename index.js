var moment = require('moment');
var current_time = moment().format();
var current_date_time = moment().format('MMMM Do YYYY, h:mm:ss a');
//var new_year = moment([2017, 1, 1]);
//var today = moment.calendar();
//moment.relativeTimeThreshold('d', 365);
//moment.relativeTimeThreshold('s', 80,000);
var day_of_year = moment().dayOfYear();
  function ordinal(number) {
    switch (number) {
      case 1:
      case 21:
        return number + 'st';
        break;
      case 2:
      case 22:
        return number + 'nd';
        break;
      case 3:
      case 23:
        return number + 'rd';
        break;
      default:
        return number + 'th';
    }
  }
  moment.relativeTimeThreshold('s', 100,000);
  seconds_of_day = moment().startOf('day').fromNow();

  daylight_savings = moment().isDST();
  if (daylight_savings === true) {
    daylight_savings = "It is during Daylight Savings Time."
  }
  else {
    daylight_savings = "It is not during Daylight Savings Time."
  }

  leap_year = moment().isLeapYear();
  if (leap_year === true) {
    leap_year = "It is a leap year."
  }
  else {
    leap_year = "It is not a leap year."
  }
//moment().startOf('year').fromNow();


// Output should be:
// It is Tuesday, July 18th 2017, 3:07:48 pm.
// It is the 199th day of the year.
// It is 54468 seconds into the day.
// It is during Daylight Savings Time.
// It is not a leap year.

console.log(`It is ` + current_date_time + '.');
console.log('it is the ' + ordinal(day_of_year) + " day of the year.");
console.log("It is " + seconds_of_day + " into the day.");
console.log(daylight_savings);
console.log(leap_year);

//console.log('New year is ' + new_year);
//console.log(`Today is ` + today);
//console.log(`It is `current_date_time);
