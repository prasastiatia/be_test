function solution(n, busPrices) {
  // Your code starts here.
  const sortArray = busPrices.sort(function(a,b){
    return a-b;
  })
  return Math.min(...sortArray);
}

exports.solution = solution;
