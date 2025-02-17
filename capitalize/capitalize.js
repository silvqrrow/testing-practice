export const capitalize = (s) => {
  const firstCharacter = s.slice(0, 1).toUpperCase();
  const restOfString = s.slice(1);
  return firstCharacter + restOfString;
};
