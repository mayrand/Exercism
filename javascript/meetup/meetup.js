//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { exception } from "console";

export const meetup = (year, month, descriptor, dayName) => {
  let result;
  let day = -1;
  switch (dayName) {
    case 'Sunday':
      day = 0;
      break;
    case 'Monday':
      day = 1;
      break;
    case 'Tuesday':
      day = 2;
      break;
    case 'Wednesday':
      day = 3;
      break;
    case 'Thursday':
      day = 4;
      break;
    case 'Friday':
      day = 5;
      break;
    case 'Saturday':
      day = 6;
      break;
    default:
      throw 'Unknown day name';
  }

  let first = new Date(year, month - 1, 1).getDay();
  switch (descriptor) {
    case 'first':
      if (day === first)
        result = new Date(year, month - 1, 1);
      else if (day < first)
        result = new Date(year, month - 1, 1 + 7 - (first - day));
      else
        result = new Date(year, month - 1, 1 + (day - first));
      break;
    case 'second':
      if (day === first)
        result = new Date(year, month - 1, 1 + 7);
      else if (day < first)
        result = new Date(year, month - 1, 1 + 14 - (first - day));
      else
        result = new Date(year, month - 1, 1 + 7 + (day - first));
      break;
    case 'third':
      if (day === first)
        result = new Date(year, month - 1, 1 + 14);
      else if (day < first)
        result = new Date(year, month - 1, 1 + 21 - (first - day));
      else
        result = new Date(year, month - 1, 1 + 14 + (day - first));
      break;
    case 'fourth':
      if (day === first)
        result = new Date(year, month - 1, 1 + 21);
      else if (day < first)
        result = new Date(year, month - 1, 1 + 28 - (first - day));
      else
        result = new Date(year, month - 1, 1 + 21 + (day - first));
      break;
    case 'last':
      let last = new Date(year, month, 0).getDay();
      let days = new Date(year, month, 0).getDate();
      if (day === last)
        result = new Date(year, month, 0);
      else if (day < last)
        result = new Date(year, month - 1, days - (last - day));
      else
        result = new Date(year, month - 1, days - 7 + (day - last));
      break;
    case 'teenth':
      let weekDay13 = new Date(year, month - 1, 13).getDay();
      if (day === weekDay13)
        result = new Date(year, month - 1, 13);
      else if (day < weekDay13)
        result = new Date(year, month - 1, 13 + 7 - (weekDay13 - day));
      else
        result = new Date(year, month - 1, 13 + (day - weekDay13));
      break;
    default:
      throw 'Unknown descriptor';
  }
  return result;
}
