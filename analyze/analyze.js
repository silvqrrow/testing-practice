export const analyzeArray = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  const sum = arr.reduce((a, b) => a + b, 0);
  const avg = sum / length || 0;

  let arrObj = {
    average: avg,
    min: min,
    max: max,
    length: length,
  };

  return arrObj;
};
