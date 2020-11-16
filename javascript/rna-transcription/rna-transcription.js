//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let result = '';
  if (dna === '')
    return result;
  for (var i = 0; i <= dna.length - 1; i++) {
    switch (dna[i].toUpperCase()) {
      case 'G':
        result += 'C';
        break;
      case 'C':
        result += 'G';
        break;
      case 'T':
        result += 'A';
        break;
      case 'A':
        result += 'U';
      default:
        break;
    }
  };
  return result;
};
