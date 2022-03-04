export

function getRandom (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export
const checkLine = (row, maxLength) => row.length<maxLength;
