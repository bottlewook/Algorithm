function solution(a, b, c) {
  let answer = 'YES', max;
  let sum = a + b + c;
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (max < c) {
    max = c;
  }
  if ((sum - max) <= max) {
    answer = 'NO'
  } 
  return answer;
  }
console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));