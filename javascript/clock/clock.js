//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { Console } from "console";

export class Clock {

  constructor(hour = 0, minute = 0) {
    let hoursInMinutes = minute > 59 ? minute / 60 : 0;
    hour += Math.floor(hoursInMinutes);
    this.hour = hour > 23 ? hour % 24 : hour;
    this.minute = hoursInMinutes > 0 ? minute % 60 : minute;
  }

  toString() {
    let h = this.hour.toString().length > 1 ? this.hour : '0' + this.hour;
    let m = this.minute.toString().length > 1 ? this.minute : '0' + this.minute;
    let result = h + ':' + m;
    return result;
  }

  plus() {
    throw new Error('Remove this statement and implement this function');
  }

  minus() {
    throw new Error('Remove this statement and implement this function');
  }

  equals() {
    throw new Error('Remove this statement and implement this function');
  }
}
