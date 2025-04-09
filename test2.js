function solution(l1, l2) {
  // Your code starts here.
  let convertL1, convertL2;
  const arrayResult = [];
  l1.forEach((itemL1) => {
    convertL1 = parseInt(itemL1);
    l2.forEach((itemL2) => {
      convertL2 = parseInt(itemL2)
    })
    arrayResult.push(convertL1+convertL2);
  })
  return arrayResult;
}

exports.solution = solution;
