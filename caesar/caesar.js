export const caesarCipher = (str, shiftFactor) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let currentCharCode = str.charCodeAt(i);
    let newCharCode;

    if (currentCharCode >= 65 && currentCharCode <= 90) {
      // Uppercase letters
      newCharCode = ((currentCharCode - 65 + shiftFactor) % 26) + 65;
    } else if (currentCharCode >= 97 && currentCharCode <= 122) {
      // Lowercase letters
      newCharCode = ((currentCharCode - 97 + shiftFactor) % 26) + 97;
    } else {
      // Non-alphabet
      newCharCode = currentCharCode;
    }

    result += String.fromCharCode(newCharCode);
  }

  return result;
};
