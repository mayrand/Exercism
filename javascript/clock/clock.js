//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { Console } from "console";

export class Clock {

  constructor(hour = 0, minute = 0) {
    let hoursInMinutes = Math.abs(minute) > 59 ? minute / 60 : 0;
    hour = hoursInMinutes > 0 ? Math.floor(hoursInMinutes) + hour : Math.ceil(hoursInMinutes) + hour;
    this.hour = Math.abs(hour) > 23 ? hour % 24 : hour;
    if (this.hour < 0) this.hour = 24 + this.hour;
    this.minute = minute % 60;
    if (this.minute < 0) {
      this.minute = 60 + this.minute;
      this.hour--;
    }
  }

  toString() {
    let h = this.hour.toString().length > 1 ? this.hour : '0' + this.hour;
    let m = this.minute.toString().length > 1 ? this.minute : '0' + this.minute;
    let result = h + ':' + m;
    return result;
  }

  plus(minutes) {
    let hoursInMinutes = minutes > 59 ? Math.floor(minutes / 60) : 0;
    let minutesToAdd = minutes % 60;
    if (this.minute + minutesToAdd > 59) {
      this.hour++;
      this.minute -= 60 - minutesToAdd;
    } else {
      this.minute += minutesToAdd;
    }
    this.hour += hoursInMinutes;
    this.hour %= 24;
    return this;
  }

  minus(minutes) {
    let hoursInMinutes = minutes > 59 ? Math.floor(minutes / 60) : 0;
    let minutesToAdd = minutes % 60;
    if (this.minute - minutesToAdd < 0) {
      this.hour--;
      this.minute = 60 - (minutesToAdd - this.minute);
    } else {
      this.minute -= minutesToAdd;
    }
    this.hour -= hoursInMinutes;
    this.hour %= 24;
    if (this.hour < 0)
      this.hour = 24 + this.hour;
    return this;
  }

  equals(clock) {
    return (this.hour === clock.hour && this.minute === clock.minute);
  }
}
