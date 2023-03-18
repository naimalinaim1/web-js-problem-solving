// first problem
const mindGame = (num) => {
  num *= 3;
  num += 10;
  num /= 2;
  num -= 5;
  return num;
};
// console.log(mindGame(5))
// console.log(mindGame(50))
// console.log(mindGame(33))
// second problem
const evenOdd = (str) => {
  return str.length % 2 === 0 ? "even" : "odd";
};
// console.log(evenOdd('pHero'))
// console.log(evenOdd('pHero '))

// third problem
const isLGSeven = (num) => {
  num -= 7;
  return num < 7 ? num : (num + 7) * 2;
};
// console.log(isLGSeven(6))
// console.log(isLGSeven(-15))
// console.log(isLGSeven(15))

// fourth problem
const findingBadData = (numbers) => {
  let badData = 0;
  numbers.forEach((num) => {
    num < 0 && badData++;
  });
  return badData;
};
// console.log(findingBadData([1, 2, 5]))
// console.log(findingBadData([2, -5, -7, -13]))
// console.log(findingBadData([-4, -9, -5, -33, -55]))
// fifth problem
const gemsToDiamond = (gems1, gems2, gems3) => {
  gems1 *= 21;
  gems2 *= 32;
  gems3 *= 43;
  const total = gems1 + gems2 + gems3;
  return total >= 2000 ? total - 2000 : total;
};

// console.log(gemsToDiamond(1, 1, 1));
// console.log(gemsToDiamond(20, 200, 50))
// console.log(gemsToDiamond(100, 5, 1))