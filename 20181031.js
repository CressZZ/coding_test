/*
문제
L과 R이 주어진다. 이때, L보다 크거나 같고, R보다 작거나 같은 자연수 중에 8이 가장 적게 들어있는 수에 들어있는 8의 개수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 L과 R이 주어진다. L은 2,000,000,000보다 작거나 같은 자연수이고, R은 L보다 크거나 같고, 2,000,000,000보다 작거나 같은 자연수이다.

출력
첫째 줄에 L보다 크거나 같고, R보다 작거나 같은 자연수 중에 8이 가장 적게 들어있는 수에 들어있는 8의 개수를 구하는 프로그램을 작성하시오.

예제 입력 
8808 8880

예제 출력 1 
2
*/

function solution(a, b){
    var arrayA = a.split('');
    var arrayB = b.split('');
    if(arrayA.length != arrayB.length){
        return 0;
    }else{
        var sum = 0 
        arrayB.forEach((e, i)=>{
            if(e == arrayA[i]){
                sum += 1
            }else{
                return false;
            }
        })
        return sum;
    }

}

console.log(solution('880800888', '8880'))



/**
 * 속성으로 객체 분류하기
 */
var people2 = [{
    name: 'Alice',
    age: 21
  },
  {
    name: 'Max',
    age: 20
  },
  {
    name: 'Jane',
    age: 20
  }
];

function grouping(arr, indexing) {
  return arr.reduce(function (accObj, current) {
    var _current = JSON.parse(JSON.stringify(current))
    var key = current[indexing]
    accObj[key] = accObj[key] ? accObj[key] : [];
    accObj[key].push(_current)
    return accObj; // 리턴 꼭 해주기
  }, {})
}

var groupped = grouping(people2, 'age')
console.log('속성으로 객체 분류하기: ', groupped)