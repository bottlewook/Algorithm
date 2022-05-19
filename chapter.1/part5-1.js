function solution(arr){         
  let answer = Math.min(...arr) // 전개연산자
  return answer;
}
let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));