export const gigasecond = (date) => {
  let gigasecondInMiliseconds = 1e12;
  return new Date(gigasecondInMiliseconds + date.getTime());
};
