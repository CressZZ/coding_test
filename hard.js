/**
 * 진법 계산의 기초: 0부터 시작
 */
function change01234(n) {
    return n === 0 ? '' : change01234(parseInt((n) / 5)) + [0, 1, 2, 3, 4][(n) % 5];
}
console.log("\n진법 계산의 기초: 0부터 시작(5진법에서 5는): ", change01234(5));
  
/**
 * 진법 계산의 기초: 1부터 시작
 */
function change124(n) {
    // 3개의 숫자를 쓰고 ('/ 3')
    // 10 진법중 4부터 자리수 체인지  ()
    return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [4, 1, 2][(n) % 3];
}
console.log("\n진법 계산의 기초: 1부터 시작(1,2,4 표현에서 10은): ", change124(10));