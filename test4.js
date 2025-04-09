function solution(n, arr) {
  // Your code starts here.
  const counts = {}
  arr.forEach((item) => {
    counts[item] = (counts[item] || 0 ) + 1
  })
  return counts;
}

exports.solution = solution;
