// input a number || calculate number and return result
const mindGame = (num) => {
  if (isNaN(num) || typeof num === "string") {
    return "ERR: please input only number";
  }
  num *= 3;
  num += 10;
  num /= 2;
  num -= 5;
  return num;
};

// input a string || string length is even return 'even' else return 'odd'
const evenOdd = (str) => {
  if (typeof str !== "string") {
    return "ERR: please input only string";
  }
  return str.length % 2 === 0 ? "even" : "odd";
};

// input a number || calculate number and return
const isLGSeven = (num) => {
  if (typeof num !== "number") {
    return "ERR: please input only number";
  }
  num -= 7;
  return num < 7 ? num : (num + 7) * 2;
};

// input an array || return count all negative number
const findingBadData = (numbers) => {
  if (!Array.isArray(numbers)) {
    return "ERR: please input only array";
  }
  let badData = 0;
  numbers.forEach((num) => {
    num < 0 && badData++;
  });
  return badData;
};

// input third number || calculate gems to diamond and return
const gemsToDiamond = (gems1, gems2, gems3) => {
  const getType = gems1 + gems2 + gems3;
  if (typeof getType !== "number" || isNaN(getType) || getType < 0) {
    return "ERR: please input only positive number";
  }
  gems1 *= 21;
  gems2 *= 32;
  gems3 *= 43;
  const total = gems1 + gems2 + gems3;
  return total >= 2000 ? total - 2000 : total;
};
