//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (args) => {
  let output = "";
  for (let index = 0; index < args.length && index <= 1; index++) {
    output += colorCode(args[index]).toString();
  }
  return parseInt(output);
};

const colorCode = (name) => COLORS.indexOf(name);

const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];