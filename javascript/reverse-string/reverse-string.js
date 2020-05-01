//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (input) => {
    if (input === '')
      return '';
    else
      return reverseString(input.substr(1)) + input.charAt(0); 
};
