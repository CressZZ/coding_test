'use static';

/**
 * splice 는 자기 자신을 변경하고 (input, outpu)
 * slice 는 자기 자신을 변경하지 않는다. (추출, begin/end(-1)) -> 딥복사
 * 
 * 
 */


/**
 * 배열 요소의 출현 빈도 계산
 */

var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
var counts = {};

arr.forEach(function (e) {
  counts[e] = counts[e] ? counts[e]++ : 1;
})

console.log("배열 요소의 출현 빈도 계산");
console.log(counts);





/**
 * 배열요소의 중복 제거 (Filter)
 */
var names2 = ['Mike', 'John', 'Bob', 'Jane', 'Bob', 'John', 'Lee', 'Mason'];
var single2 = names2.filter((item, idx, array) => {
  return array.indexOf(item) === idx;
});
console.log("배열요소의 중복 제거 (Filter)");
console.log(single2);





/**
 * 배열요소의 중복 제거 (reduce)
 */
var names = ['Mike', 'John', 'Bob', 'Jane', 'Bob', 'John', 'Lee', 'Mason'];
var single = names.reduce((a, b) => {
  if (a.indexOf(b) < 0) a.push(b);
  return a;
}, []);
console.log("배열요소의 중복 제거 (reduce)");
console.log(single);





/**
 * 객체 배열에서의 값 합산
 */
var initialValue = 0;
var defaults = [
  { x: 1 },
  { x: 2 },
  { x: 3 }
]
var sum = defaults.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.x;
}, initialValue)
console.log("객체 배열에서의 값 합산");
console.log(sum) // logs 6






/**
 * 배열로 이루어진 배열의 펼치기(flatten)
 */
var defaults = [
  [0, 1],
  [1, 2, 3],
  [0, 2, 4, 5]
]
var flattened = defaults.reduce(function (accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []);

console.log("배열로 이루어진 배열의 펼치기(flatten)");
console.log(flattened);

// 배열로 이루어진 배열의 펼치기(flatten) -> 중복 제거(filter)
var single = flattened.filter(function (e, i, a) {
  return a.indexOf(e) == i
})
console.log("배열로 이루어진 배열의 펼치기(flatten) -> 중복 제거(filter)", single);

// 배열로 이루어진 배열의 펼치기(flatten) -> 중복 제거(reduce)
var single2 = flattened.reduce(function (a, c) {
  if (a.indexOf(c) == -1) {
    a.push(c)
  }
  return a
}, [])
console.log("배열로 이루어진 배열의 펼치기(flatten) -> 중복 제거(reduce)", single2);




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
    var key = current[indexing]
    accObj[key] = accObj[key] ? accObj[key] : [];
    accObj[key].push(current)
    return accObj; // 리턴 꼭 해주기
  }, {})
}

console.log('속성으로 객체 분류하기')
console.log(grouping(people2, 'age'))


/**
 * 확장 연산자와 초기값을 이용하여 객체로 이루어진 배열에 담긴 배열 연결하기
 */

var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];

var allbooks = friends.reduce(function (accumulator, currentValue) {
  // return accumulator.concat(currentValue.books) // -> 이것도 됨
  return [...accumulator, ...currentValue.books];
}, ['Alphabet']);
console.log('확장 연산자와 초기값을 이용하여 객체로 이루어진 배열에 담긴 배열 연결하기')
console.log(allbooks);

/**
 * sort 기본
 * 정렬한 배열. 원 배열이 정렬되는 것에 유의하세요. 복사본이 만들어지는 것이 아닙니다.
 * 0 초과를 반환하거나, 0 미만을 반환하거나, 0을 반환하거나
 */

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 }
];

// value 기준으로 정렬
items.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
console.log(items)

// name 기준으로 정렬
items.sort(function (a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  console.log(nameA - nameB)
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // 이름이 같을 경우
  return 0;
});
console.log(items)

var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

console.log('stringArray:', stringArray.join());
console.log('Sorted:', stringArray.sort());

console.log('numberArray:', numberArray.join());
console.log('Sorted without a compare function:', numberArray.sort());
console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));

console.log('numericStringArray:', numericStringArray.join());
console.log('Sorted without a compare function:', numericStringArray.sort());
console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers));

console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('Sorted without a compare function:', mixedNumericArray.sort());
console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));


/**
 * 반올림, 올림, 내림
 */
console.log(Math.ceil(Math.PI)) // 소수점 올림, 정수 반환
console.log(Math.floor(Math.PI)) // 소수점 버림, 정수 반환
console.log(Math.round(Math.PI)) //  소수점 반올림, 정수 반환

function change124(n) {
  return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(change124(10));



/**
 * 배열 순서 바꾸기 
 */
function moves(arr, from, to) {
  var _arr = JSON.parse(JSON.stringify(arr));
  _arr.splice(to, 0, _arr.splice(from, 1)[0]);
  return _arr
}



/**
 * 배열 모든 케이스 찾기
 */
var testArr = [0, 1, 2]

function searchAllCase(testArr) {
  var tmpArrs = [testArr]
  testArr.forEach(function (e, i, a) {
    var length = testArr.length; //3
    var from = i
    for (var to = 0; to < length; to++) { // to는 2까지; 
      if (from < to) {
        var _tmpArr = moves(testArr, from, to)
        tmpArrs.push(_tmpArr)
      }
    }
  })

  return tmpArrs

}

var AllCases = searchAllCase(testArr)
console.log("searchAllCase: ",AllCases)

/**
 * 배열안의 배열을 string으로 join한 후 스트링으로 변환
 */
function changeToJoin(arrs) {
  var _arrs = JSON.parse(JSON.stringify(arr));
  arrs.forEach(function (arr, i) {
    _arrs.splice(i, 1, Number(arr.join('')))
  })
  return _arrs
}

var changed = changeToJoin(AllCases)
console.log(changed)


/**
 * 배열 sort 예제1 
 */
function solution1(numbers) {
  var answer = numbers.map(v => v + '')
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join('');

  return answer[0] === '0' ? '0' : answer;
}
console.log(solution1([3, 30, 34, 5, 9]));

/**
 * 배열 sort 예제2
 */
function solution2(numbers) {
  var answer = '';
  var str = numbers.map(v => String(v))
    .sort((a, b) => {
      if (Number(a + b) < Number(b + a)) return 1; //핵심
      else if (Number(a + b) > Number(b + a)) return -1;
      else {
        return a.length < b.length ? 1 : -1;
      }
    }).join('');
  var idx = 0;
  while (str[idx] === '0') {
    idx++;
  }
  if (idx === str.length) idx = str.length - 1;
  return str.slice(idx);
}


const compFunc = (a, b) => {
  const stra = a.toString();
  const strb = b.toString();
  if (parseInt(stra + strb) > parseInt(strb + stra)) {
    return -1;
  } else {
    return +1;
  }
};
console.log(solution2([3, 30, 34, 5, 9, 33]));

/**
 * 배열 sort 예제3
 */
function solution3(numbers) {
  if (
    numbers.reduce((a, c) => {
      return a + c;
    }, 0) === 0
  ) {
    return "0";
  }
  return numbers.sort(compFunc).join("");
}
console.log(solution3([3, 30, 34, 5, 9]));

/**
 * 배열 sort 예제4
 */
function solution4(numbers) {

  var strs = numbers.map(e => String(e));
  strs.sort((a, b) => {
    if (Number(a + b) > Number(b + a)) {
      return -1
    } else if (Number(a + b) < Number(b + a)) {
      return 1
    } else {
      return a.length > b.length ? -1 : 1;
    }
  })
  if (strs[0] == '0') {
    return "0"
  }

  return strs.join('');
}


console.log(solution4([0001, 00002, 33, 3333, 332, 212]));


/**
 * 막대기, 레이저
 */

var env = "()(((()())(())()))(())"

function preper(env) {
  return env.replace(/\(\)/g, "|")
}

var prepered = preper(env);
var arrPrepered = prepered.split('');
var cuts = [];
var result = 0;

arrPrepered.forEach(function (e, i, a) {
  if (e == '(') {
    cuts.push(1)
  } else if (e == ')') {
    result += cuts.pop(cuts.length - 1)
  }
  if (e == "|") {
    if (cuts.length != 0) {
      cuts = cuts.map(function (e) {
        return e + 1;
      })
    }
  }
})
console.log(result)




/**
 * test
 */
function solution6(priorities, location) {
  var count = startPrints(priorities, location, 0)
  return count
}

function startPrints(priorities, location, count) {

  var current = priorities.splice(0, 1)[0]

  if (Math.max.apply(null, priorities) <= current) {
    count++;
    // 최대 값일 경우  pop으로 끝
    if (location == 0) {
      return count;
    }
  } else {
    // 최대 값이 아닐경우
    priorities.splice((priorities.length), 0, current)
  }

  // 재귀
  location = location == 0 ? priorities.length - 1 : location - 1
  return startPrints(priorities, location, count)

}

console.log(solution6([1, 2, 3, 3, 4, 9, 2], 4))



/**
 * 개 중요 경우의 수 
 */

var set = new Set()

function combi(arr, str, set) {
  // 만약 배열의 크기가 0보다 크면 ([1,2,3])
  if (arr.length > 0) {
    arr.forEach(function (e, i) {
      var tempArr = arr.slice(0);
      var tempStr = tempArr.splice(i, 1)[0] + str; //1

      set.add(Number(tempStr)); //1

      combi(tempArr, tempStr, set); //([], 123)
    })
  }
}

combi([1, 1, 3], '', set)
console.log([...set].sort())

/**
 * 개 중요 경우의 수 2 (흰공 검공)
 */
var set2 = new Set()

function combi2(arr, str) {
  // 만약 배열의 크기가 0보다 크면 ([1,2,3])
  if (arr.length > 0) {
    arr.forEach(function (e, i) {
      var tempArr = arr.slice(0);
      var tempStr = tempArr.splice(i, 1)[0] + str; //1
      combi2(tempArr, tempStr); //([3], '12')
    })
  }
  if (arr.length == 0) {
    set2.add(Number(str)); //1
  }
}

combi2([1, 3, 1, 3], '')
console.log([...set2].sort())


/**
 * 소수 구하기
 */
function isSoSu(val) {
  if (val <= 1) {
    
    return false;
  }
  for (var i = 2; i < val; i++) {
    if ((val % i) == 0) {
      console.log(i)
      console.log(val / i)
     
      return false;
    }
  }
  return true;
}

console.log(isSoSu(1))


/**
 *  최대 무개와 배 
 */
var result = []
function greed(people, limit, result=[]) {
  if(people.length > 0){
    var current = people.splice(0,1)[0]
    var tempSum = current;
    var nextIdx = -1;
    result.push([current]);
    for(var i =0; i<people.length; i++){
      var curSum =current+people[i]
      if(curSum >tempSum && curSum <= limit){
        tempSum = curSum;
        nextIdx = i;
      }
      if(curSum == limit){
        break;
      }
    }
    if(nextIdx>=0){
      result[result.length - 1].push(people.splice(nextIdx,1)[0])
    }
    return greed(people, limit, result)
  }else{
    return result;
  }
}

var testResult = greed([70, 50, 80, 50,30, 20, 10,30, 20], 100, result)
console.log(testResult)


/**
 * 
 * @param {*} s 
 */
function solution9(s) {
  var answer = sep(s);
  return answer;
}

function sep(str){
  var toArrary = str.split(' ');
  // toArrary = toArrary.filter((e)=>e!=='');
  toArrary = toArrary.map((e)=>e.split(''));
  toArrary = toArrary.map((arr)=>changeLowToUp(arr));
  toArrary = toArrary.map((arr)=>arr.join(''));
  return toArrary.join(' ')
}

function changeLowToUp(arr){
  return arr.map((e,i)=>{
      if((i+1)%2 != 0){
          return e.toUpperCase(); 
      }else{
          return e
      }
  })
}

console.log(solution9("trsdfasdfy hello s world	"))




/**
 * 빌려주기 (탐욕법?)
 */

function solution10(n, lost, reserve) {
  var status = []
  for(var i =0; i<n; i++){
      status.push(1)
  }
  reserve.forEach((e)=>{
      status[e-1] = status[e-1]+1
  })
  lost.forEach((e)=>{
      status[e-1] = status[e-1]-1
  })


  var answer = borrow(status);
  return answer;
}

function borrow(arr, i=0){
  
  var copyArr = arr.slice(0);
  arr.forEach((e,index)=>{

      if(index >= i){
          if(e == 0){
              if(copyArr[index-1] == 2){
                  copyArr[index-1] -= 1;
                  copyArr[index] += 1;
                  return borrow(copyArr, index)
              }else if(copyArr[index+1] ==2){
                  copyArr[index+1] -= 1;
                  copyArr[index] += 1;  
                  return borrow(copyArr, index)
              }
          }
      }  
  })
   return copyArr;
}

console.log(solution10(	5, [2, 4], [1, 3, 5]))



/**
 * 트럭
 */


function solution11(bridge_length, weight, truck_weights) {
  var answer = calculate([],truck_weights,bridge_length, weight,0 )
 
  return answer;
}

function calculate(passing, wait, bridge_length, limit , count=0){
  
  if(wait.length > 0 || passing.length > 0 ){
      // 지나건거 빼고
      if(passing.length > 0){
          passing = passing.filter((e)=>{
              return e.count < bridge_length
          })
      } 
      
      if(wait.length > 0 ){
         // 지나갈거 넣고
        var tmp = enterTruck(passing, wait, limit)
        passing = tmp[0];
        wait = tmp[1];

      }

      // 카운트 고
      count++
      if(passing.length > 0){
        passing.map((e)=>{
            return e.count += 1;
        })
      }
      // console.log(passing)
      return calculate(passing, wait, bridge_length, limit, count)

  }
  return count
  
}

function enterTruck(passing, wait, limit){
  var copyPassing = passing.slice(0);
  var copyWait = wait.slice(0);

  var currentWeight =passing.length > 0 ? passing.reduce((accumulator,b)=> accumulator + b.truck,0) : 0;
  // console.log(currentWeight)

  if(wait[0]+currentWeight <= limit){
      var willEnterTruck = {truck: wait[0]};
      willEnterTruck.count = 0
      copyPassing.push(willEnterTruck);
      copyWait.splice(0,1);
      return[copyPassing, copyWait]
  }else{
      return [copyPassing, copyWait]
  }
}

console.log(solution11(10, 100, []))


/**
 * 
 * 
 * 
 */


function solution12(N, Q, B, C) {
  var singleBucketListObj = createSingleBucketListObj(B);
  return enterBall(singleBucketListObj, B, C, Q)
  
}

function enterBall(singleBucketListObj, bucketOrdering, BallOrdering, limit, count = 0){
  var isOk = false;
  for(var i = 0; i<BallOrdering.length; i++){
    singleBucketListObj[bucketOrdering[i]]['balls'].push(BallOrdering[i]);
    if(isSameColorByLimit(singleBucketListObj[bucketOrdering[i]]['balls'],limit)){
       isOk =true;
       return count;
    }
    count += 1
  }
  //  BallOrdering.forEach((e, i)=>{
      
  //  })
   if(isOk){
      return count;
   }
   return -1
   
}

function createSingleBucketListObj(buckets){
   var singleBucketList = buckets.reduce((a,b)=>{
     if(a.indexOf(b)<0){  
       a.push(b); 
      }
      return a 
    },[]);


   return singleBucketList.map((e)=> {
     return {bucketNumber: e, balls: []}
    });
}

function isSameColorByLimit(arr, targetSameColorNumber){
   var mapping = arr.reduce((a,b)=>{
       if(Object.keys(a).indexOf(String(b)) < 0){
           a[b] = 1
       }else{
           a[b] += 1;
       }
       return a
   },{})
   if(Object.values(mapping).filter((e)=>e>=targetSameColorNumber).length>0){
       return true;
   }else{
       return false;
   }
}

console.log(solution12(3, 2, [1, 2, 0, 1, 1, 0, 0, 1], [0, 3, 0, 2, 0, 3, 0, 0]))


// d(91) = 9 + 1 + 91 = 101

function generate(generator){
  var test =  String(generator).split('').map((e)=>Number(e))
  test.splice(0,0,generator)
  return test.reduce((a,b)=>{return a+b},0)
}
function nexon(){
  var i = 1;
  var generators = []
  var tempGen = generate(i)
  while(tempGen<5000){
    generators.push(generate(i))
    i++
    tempGen = generate(i);
  }
  var result = 0
  for(i=1; i<5000; i++){
    if(generators.indexOf(i) < 0){
      result+=i
    }

  }
  return result
}

console.log(nexon())

// input:
// --0-1-
// ------
// 11--0-
// -1----
// -----0
// -10---

// output:
// 100110
// 001011
// 110100
// 011001
// 101010
// 010101

function output(arr, fixed){
  var set = new Set();
  // 우선 경우의 수 로직
  allCase(arr, [], set);
  var arrBySet = [...set].sort()
  // arrBySet = arrBySet.map((e)=>{
  //   return e.split('')
  // })
  // 고정값 찾기

  fixed = preperFixed(fixed)

  arrBySet = arrBySet.filter((e,i)=>{
    return isMatch(fixed, e)
  })
  console.log(arrBySet)

}

function preperFixed(fixed){
  var tmpArray = []
  fixed.forEach((e,i)=>{
    if(String(e).length>0){
      tmpArray.push([i, e])
    }
  })
  return tmpArray;
}

function isMatch(standard, currentArr=[]){
  var copyStand = standard.slice('');
  if(standard.length > 0){
    if(currentArr[standard[0][0]] == standard[0][1]){
      copyStand.splice(0,1)
      return isMatch(copyStand,currentArr )
    }
    return false
  }else{
    return true
  }
}

/**
 * 중요2 
 */
function allCase(arr, news, set){
  if(arr.length > 0){
    arr.forEach((e, i)=>{
      var copyArr = arr.slice('')
      // var newStr = copyArr.splice(i, 1)[0] + str;
      var copyNews = news.slice('')
      copyNews.push(copyArr.splice(i, 1)[0])
      
      allCase(copyArr, copyNews, set);
    })
  }
  if(arr.length == 0){
    set.add(news);
  }
 }

 output([1,33,3], ['',3,''])

/**
 * 
 * @param {*} greed 
 */
 function solution15(citations) {
  citations.sort((a,b)=>a-b) // [0,1,1,3,6,7,8,9]
  var hIndex = citations[citations.length-1]
  hIndex = greedGo(citations, hIndex)
  var answer = hIndex;
  return answer;
}

function greedGo(citations, h){
  var tmpCitations = citations.filter((e)=>e>=h)
  tmpCitations.map((e)=>{
    return Number(e)
  })
  if(tmpCitations.length >= h){
    return h
  }else{
    h -= 1;
    return greedGo(citations, h)
  }
}


console.log(solution15([0,0,0,0,0,'1',1,1,1,2,3,1,2,3,1,1,9,1,1,2]))



function solution(s) {
  var sToArray = s.split(' ');

  sToArray = sToArray.map((e,i)=>{
      var tmpStr = e;
      tmpStr = e.toLowerCase();
      if(e.match(/^[a-z]/g)){
          tmpStr = tmpStr.replace(/^./,tmpStr.match(/^./)[0].toUpperCase())
      }
      return tmpStr;
  })
  console.log(sToArray)
  var answer = sToArray.join(' ');
  return answer;
}

console.log(solution(" 3people  unFollowed me"))




function solutionx(A) {
  var countHead = 0
  var countTail = 0
  
  A.forEach(function (e) {
    if(e==0){
        countHead++
    }else if(e==1){
        countTail++
    }
 
  })
  console.log(countHead);
  console.log(countTail)
  console.log(Math.min(countHead, countTail))
  // write your code in JavaScript (Node.js 8.9.4)
}


solutionx([0,0,1,1,0])


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    var countHead = 0
    var countTail = 0
  
    A.forEach(function (e) {
        if(e==0){
          countHead++
        }else if(e==1){
         countTail++
        }
    })
  
    return (Math.min(countHead, countTail))
    
    // write your code in JavaScript (Node.js 8.9.4)
  }
  
  console.log(solution([0, 0, 0, 0, 0, 0]))