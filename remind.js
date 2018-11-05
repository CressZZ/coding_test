'use static';

/**
 * 나는 할 수 있다. 
 * splice 는 자기 자신을 변경하고 (input, outpu)
 * slice 는 자기 자신을 변경하지 않는다. (추출, begin/end(-1)) -> 딥복사
 */


/**
 * 배열 요소의 출현 빈도 계산
 */
var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
var counts = {};

arr.forEach(function (e) {
    counts[e] = counts[e] ? counts[e]++ : 1;
})
console.log("\n배열 요소의 출현 빈도 계산", counts);


/**
 * 배열요소의 중복 제거 (Filter)
 */
var names2 = ['Mike', 'John', 'Bob', 'Jane', 'Bob', 'John', 'Lee', 'Mason'];
var single2 = names2.filter((item, idx, array) => {
    return array.indexOf(item) === idx;
});
console.log("\n배열요소의 중복 제거 (Filter): ", single2);


/**
 * 배열요소의 중복 제거 (reduce)
 * (accumulator, currentValue, currentIndex, array)
 */
var names = ['Mike', 'John', 'Bob', 'Jane', 'Bob', 'John', 'Lee', 'Mason'];
var single1 = names.reduce((a, current) => {
    if (a.indexOf(current) < 0) {
        a.push(current);
    }
    return a;
}, []);
console.log("\n배열요소의 중복 제거 (reduce): ", single1);


/**
 * 객체 배열에서의 값 합산 (reduce)
 */
var initialValue = 0;
var defaults = [{
        x: 1
    },
    {
        x: 2
    },
    {
        x: 3
    }
]
var sum = defaults.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
}, initialValue)

console.log("\n객체 배열에서의 값 합산 (reduce): ", sum);


/**
 * 배열로 이루어진 배열의 펼치기 (flatten)
 */
var defaults = [
    [0, 1],
    [1, 2, 3],
    [0, 2, 4, 5]
]

// 1. 배열로 이루어진 배열의 펼치기(flatten)
var flattened = defaults.reduce(function (accumulator, currentValue) {
    return accumulator.concat(currentValue);
}, []);
console.log("\n배열로 이루어진 배열의 펼치기(flatten): ", flattened);

// 2. 배열로 이루어진 배열의 펼치기(flatten) -> 중복 제거(filter)
var single = flattened.filter(function (e, i, a) {
    return a.indexOf(e) == i
})
console.log("\n배열로 이루어진 배열의 펼치기(flatten) -> 중복 제거(filter): ", single);

// 3. 배열로 이루어진 배열의 펼치기(flatten) -> 중복 제거(reduce)
var single2 = flattened.reduce(function (a, c) {
    if (a.indexOf(c) == -1) {
        a.push(c)
    }
    return a
}, [])
console.log("\n배열로 이루어진 배열의 펼치기(flatten) -> 중복 제거(reduce)", single2);


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
console.log('\n속성으로 객체 분류하기: ', groupped) // 크롬 콘솔에서 돌리면 제대로 나옴


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
console.log('\n확장 연산자와 초기값을 이용하여 객체로 이루어진 배열에 담긴 배열 연결하기: ', allbooks)


/**
 * sort 기본
 * 정렬한 배열. 원 배열이 정렬되는 것에 유의하세요. 복사본이 만들어지는 것이 아닙니다.
 * 0 초과를 반환하거나, 0 미만을 반환하거나, 0을 반환하거나
 * 
 * compareFunction(a, b)이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
 */

var items = [{
        name: 'Edward',
        value: 21
    },
    {
        name: 'Sharpe',
        value: 37
    },
    {
        name: 'And',
        value: 45
    },
    {
        name: 'The',
        value: -12
    },
    {
        name: 'Magnetic'
    },
    {
        name: 'Zeros',
        value: 37
    }
];

// value 기준으로 정렬
items.sort(function (a, b) {
    if (a.value > b.value) {
        return 1;
    }
    if (a.value < b.value) {
        return -1;
    }
    return 0; // a must be equal to b
});
console.log("\nsort 기본 - value 기준으로 정렬: ", JSON.stringify(items))


// name 기준으로 정렬
items.sort(function (a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase

    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0; // 이름이 같을 경우
});
console.log("\nsort 기본 - name 기준으로 정렬: ", JSON.stringify(items))


/**
 * sort 응용!
 */
var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
    return a - b; // 음수이면 a가 작은거니까 a가 앞에 온다.
}

console.log('\nstringArray:', stringArray.join()); // Blue,Humpback,Beluga
console.log('\nSorted:', stringArray.sort()); // ["Beluga", "Blue", "Humpback"]

console.log('\nnumberArray:', numberArray.join()); // 40,1,5,200
console.log('\nSorted without a compare function:', numberArray.sort()); // [1, 200, 40, 5] -> (1, 2, 4, 5)
console.log('\nSorted with compareNumbers:', numberArray.sort(compareNumbers)); // [1, 5, 40, 200]

console.log('\nnumericStringArray:', numericStringArray.join()); // 80,9,700
console.log('\nSorted without a compare function:', numericStringArray.sort()); // ["700", "80", "9"] -> (3자리, 2자리, 1자리)
console.log('\nSorted with compareNumbers:', numericStringArray.sort(compareNumbers)); //["9", "80", "700"]

console.log('\nmixedNumericArray:', mixedNumericArray.join()); // 80,9,700,40,1,5,200
console.log('\nSorted without a compare function:', mixedNumericArray.sort()); //[1, 200, 40, 5, "700", "80", "9"] -> (Number, String)
console.log('\nSorted with compareNumbers:', mixedNumericArray.sort(compareNumbers)); // [1, 5, "9", 40, "80", 200, "700"]


/**
 * 반올림, 올림, 내림
 */
console.log("\n올림 ceil: ", Math.ceil(Math.PI)) // 소수점 올림, 정수 반환
console.log("\n버림 floor: ", Math.floor(Math.PI)) // 소수점 버림, 정수 반환
console.log("\n반올림 round: ", Math.round(Math.PI)) //  소수점 반올림, 정수 `반환`


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


/**
 * 배열 sort 예제1 
 */
function solution1(numbers) {
    var answer = numbers.map(v => v + '')
        .sort((a, b) => (b + a) * 1 - (a + b) * 1)
        .join('');

    // 맨앞이 0이면 어쨌든 0임. 
    // 맨앞에 0이면 뒤에도 0이어야 하기 때문에 
    return answer[0] === '0' ? '0' : answer;
}
console.log("\n배열 sort 예제1: ", solution1([3, 30, 34, 5, 9]));

/**
 * 배열 sort 예제2
 */
function solution2(numbers) {
    var str = numbers.map(v => String(v))
        .sort((a, b) => {
            if (Number(a + b) < Number(b + a)) return 1; //핵심
            else if (Number(a + b) > Number(b + a)) return -1;
            else {
                return a.length < b.length ? 1 : -1;
            }
        }).join('');

    // 앞에 '0' 제거 하기 
    var idx = 0;
    // '0' 이 나올때까지 
    while (str[idx] === '0') {
        idx++;
    }
    if (idx === str.length) idx = str.length - 1;
    return str.slice(idx);
}

console.log("\n배열 sort 예제2: ", solution2([3, 30, 34, 5, 9, 33]));

/**
 * 배열 sort 예제3
 */
const compFunc = (a, b) => {
    const stra = a.toString();
    const strb = b.toString();
    if (parseInt(stra + strb) > parseInt(strb + stra)) {
        return -1;
    } else {
        return +1;
    }
};

function solution3(numbers) {
    if( numbers.reduce((a, c) => { return a + c; }, 0) === 0 ) { 
        return "0";
    }
    return numbers.sort(compFunc).join("");
}

console.log("\n배열 sort 예제3: ", solution3([3, 30, 34, 5, 9]));

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

console.log('배열 sort 예제4: ', solution4([0001, 00002, 33, 3333, 332, 212]));


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
var fragByLazer = 0;

arrPrepered.forEach(function (e, i, a) {
    if (e == '(') {
        cuts.push(1)
    } else if (e == ')') {
        fragByLazer += cuts.pop(cuts.length - 1)
    }
    if (e == "|") {
        if (cuts.length != 0) {
            cuts = cuts.map(function (e) {
                return e + 1;
            })
        }
    }
})

console.log('\n막대기, 레이저: ', fragByLazer)


/**
 * 레벨2 프린터
 */
function printerCalculate(priorities, location) {
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

console.log('\n레벨2 프린터([1, 2, 3, 3, 4, 9, 2], 4): ',printerCalculate([1, 2, 3, 3, 4, 9, 2], 4))


/**
 * 매우 중요! 경우의 수 (1)
 */
var testArr = [0, 1, 2]

var casesSet = new Set();

function cases(arr1, arr2=[]){
    arr1.forEach((e, i, a)=>{
        var _arr1 = arr1.slice(0)
        var _arr2 = arr2.slice(0)

        // 기존배열 arr1에서 arr2 로 앞에서 부터 하나씩 복사해서 넣기 
        _arr2 = _arr2.concat(_arr1.splice(i, 1)[0]);
        casesSet.add(_arr2)
        cases(_arr1, _arr2)
    })
}

cases([1,2,3])
console.log("\n매우 중요! 경우의 수 (1):", [...casesSet])

/**
 * 매우 중요! 경우의 수 (2)
 */
var set = new Set()

function combi(arr, str, set) {
    // 만약 배열의 크기가 0보다 크면 ([1,2,3])
    if (arr.length > 0) {
        arr.forEach(function (e, i) {
            var tempArr = arr.slice(0);
            var tempStr = tempArr.splice(i, 1)[0] + str; //1

            set.add(tempStr); //1

            combi(tempArr, tempStr, set); //([], 123)
        })
    }
}

combi([1, 1, 3], '', set)
console.log("\n매우 중요! 경우의 수 (2):", [...set].sort())

/**
 * 매우 중요! 경우의 수 (3) - 흰공 검은공
 */
var set2 = new Set()

function combi2(arr, str) {
    // 기존 배열의 크기가 0보다 크면 ([1,2,3]), 쪼개어서 새로운 배열(arr2) 혹은 문자열(str)에 넣는다.  
    if (arr.length > 0) {
        arr.forEach(function (e, i) {
            var tempArr = arr.slice(0);
            var tempStr = tempArr.splice(i, 1)[0] + str; //1
            combi2(tempArr, tempStr); //([3], '12')
        })
    }
    // 기존 배열의 크기가 0가 되었다면 새로운 배열(arr2) 혹은 문자열(str)을 'set'에 추가 한다. 
    if (arr.length == 0) {
        set2.add(Number(str)); 
    }
}

combi2([1, 3, 1, 3], '')
console.log("\n매우 중요! 경우의 수 (3) - 흰공 검은공: ", [...set2].sort())


/**
 * 소수 구하기
 */
function isSoSu(val) {
    if (val <= 1) {

        return false;
    }
    for (var i = 2; i < val; i++) {
        // 주어진 값 'val'이 'val'보다 작은 특정 수보다 작은 수로 나누어 떨어진다면
        // 그 값 'val'은 소수가 아니다. 
        if ((val % i) == 0) {
            return false;
        }
    }
    return true;
}
var sosuVal = 19;
console.log(`\n소수 구하기:  ${sosuVal}는 소수인가요?`, isSoSu(sosuVal))


/**
    문제 설명
    무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.
    예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.
    구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.
    사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

    제한사항
    무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
    각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
    구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
    구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.

    입출력 예
    people	            limit	return
    [70, 50, 80, 50]	100	       3
    [70, 80, 50]	    100 	3
 */
var result = [];

function greed(people, limit, result = []) {
    if (people.length > 0) {
        var current = people.splice(0, 1)[0]
        var tempSum = current;
        var nextIdx = -1;
        result.push([current]);
        for (var i = 0; i < people.length; i++) {
            var curSum = current + people[i]
            if (curSum > tempSum && curSum <= limit) {
                tempSum = curSum;
                nextIdx = i;
            }
            if (curSum == limit) {
                break;
            }
        }
        if (nextIdx >= 0) {
            result[result.length - 1].push(people.splice(nextIdx, 1)[0])
        }
        return greed(people, limit, result)
    } else {
        return result;
    }
}

var testResult = greed([70, 50, 80, 50, 30, 20, 10, 30, 20], 100, result)
console.log("\n구명보트 (1): ", testResult)

/**
    문제 설명
    무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.
    예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.
    구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.
    사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

    제한사항
    무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
    각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
    구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
    구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.

    입출력 예
    people	            limit	return
    [70, 50, 80, 50]	100	       3
    [70, 80, 50]	    100 	3
 */
function solution_greed(people, limit, resultArr=[]) {
    if(people.length > 0){
         // 첫번째꺼 기준으로 뽑고
        var _people = people.slice(0);
        var _tmpPeople1 = _people.splice(0,1)[0];
        var _tmpPeople2 = 0;
        var _tmpPeople2_index;
        var _resultArr = []
        
        _resultArr.push(_tmpPeople1);

        _people.forEach((e, i)=>{ 
            if(_tmpPeople1 + e > (_tmpPeople1 + _tmpPeople2) && _tmpPeople1 + e <= limit){
                _tmpPeople2 = e
                _tmpPeople2_index = i
            }
        })

        if(_tmpPeople2_index != undefined){
            _resultArr.push(_people.splice(_tmpPeople2_index,1)[0]);        
        }
        resultArr.push(_resultArr);
        
        return solution_greed(_people, limit, resultArr);
    }

    return resultArr.length
}

var testResult = solution_greed([70, 50, 80, 50, 30, 20, 10, 30, 20], 100)
console.log("\n구명보트 (2): ", testResult)

/**
 * 알파벳 대문자, 소문자 변환
 */
function solution9(s) {
    var answer = sep(s);
    return answer;
}

function sep(str) {
    var toArrary = str.split(' ');
    // toArrary = toArrary.filter((e)=>e!=='');
    toArrary = toArrary.map((e) => e.split(''));
    toArrary = toArrary.map((arr) => changeLowToUp(arr));
    toArrary = toArrary.map((arr) => arr.join(''));
    return toArrary.join(' ')
}

function changeLowToUp(arr) {
    return arr.map((e, i) => {
        if ((i + 1) % 2 != 0) {
            return e.toUpperCase();
        } else {
            return e
        }
    })
}

console.log("\n알파벳 대문자, 소문자 변환: ", solution9("trsdfasdfy hello s world	"))


/**
 * 빌려주기 (탐욕법?)
 */

function solution10(n, lost, reserve) {
    var status = []
    for (var i = 0; i < n; i++) {
        status.push(1)
    }
    reserve.forEach((e) => {
        status[e - 1] = status[e - 1] + 1
    })
    lost.forEach((e) => {
        status[e - 1] = status[e - 1] - 1
    })


    var answer = borrow(status);
    return answer;
}

function borrow(arr, i = 0) {

    var copyArr = arr.slice(0);
    arr.forEach((e, index) => {

        if (index >= i) {
            if (e == 0) {
                if (copyArr[index - 1] == 2) {
                    copyArr[index - 1] -= 1;
                    copyArr[index] += 1;
                    return borrow(copyArr, index)
                } else if (copyArr[index + 1] == 2) {
                    copyArr[index + 1] -= 1;
                    copyArr[index] += 1;
                    return borrow(copyArr, index)
                }
            }
        }
    })
    return copyArr;
}

console.log("\n빌려주기 (탐욕법?): ", solution10(5, [2, 4], [1, 3, 5]))



/**
 * 트럭
 */
function solution11(bridge_length, weight, truck_weights) {
    var answer = calculate([], truck_weights, bridge_length, weight, 0)

    return answer;
}

function calculate(passing, wait, bridge_length, limit, count = 0) {

    if (wait.length > 0 || passing.length > 0) {
        // 지나건거 빼고
        if (passing.length > 0) {
            passing = passing.filter((e) => {
                return e.count < bridge_length
            })
        }

        if (wait.length > 0) {
            // 지나갈거 넣고
            var tmp = enterTruck(passing, wait, limit)
            passing = tmp[0];
            wait = tmp[1];

        }

        // 카운트 고
        count++
        if (passing.length > 0) {
            passing.map((e) => {
                return e.count += 1;
            })
        }
        // console.log(passing)
        return calculate(passing, wait, bridge_length, limit, count)

    }
    return count

}

function enterTruck(passing, wait, limit) {
    var copyPassing = passing.slice(0);
    var copyWait = wait.slice(0);

    var currentWeight = passing.length > 0 ? passing.reduce((accumulator, b) => accumulator + b.truck, 0) : 0;
    // console.log(currentWeight)

    if (wait[0] + currentWeight <= limit) {
        var willEnterTruck = {
            truck: wait[0]
        };
        willEnterTruck.count = 0
        copyPassing.push(willEnterTruck);
        copyWait.splice(0, 1);
        return [copyPassing, copyWait]
    } else {
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

function enterBall(singleBucketListObj, bucketOrdering, BallOrdering, limit, count = 0) {
    var isOk = false;
    for (var i = 0; i < BallOrdering.length; i++) {
        singleBucketListObj[bucketOrdering[i]]['balls'].push(BallOrdering[i]);
        if (isSameColorByLimit(singleBucketListObj[bucketOrdering[i]]['balls'], limit)) {
            isOk = true;
            return count;
        }
        count += 1
    }
    //  BallOrdering.forEach((e, i)=>{

    //  })
    if (isOk) {
        return count;
    }
    return -1

}

function createSingleBucketListObj(buckets) {
    var singleBucketList = buckets.reduce((a, b) => {
        if (a.indexOf(b) < 0) {
            a.push(b);
        }
        return a
    }, []);


    return singleBucketList.map((e) => {
        return {
            bucketNumber: e,
            balls: []
        }
    });
}

function isSameColorByLimit(arr, targetSameColorNumber) {
    var mapping = arr.reduce((a, b) => {
        if (Object.keys(a).indexOf(String(b)) < 0) {
            a[b] = 1
        } else {
            a[b] += 1;
        }
        return a
    }, {})
    if (Object.values(mapping).filter((e) => e >= targetSameColorNumber).length > 0) {
        return true;
    } else {
        return false;
    }
}

console.log(solution12(3, 2, [1, 2, 0, 1, 1, 0, 0, 1], [0, 3, 0, 2, 0, 3, 0, 0]))

/**
 * 넥슨 문제
 * d(91) = 9 + 1 + 91 = 101
 */
function generate(generator) {
    var test = String(generator).split('').map((e) => Number(e))
    test.splice(0, 0, generator)
    return test.reduce((a, b) => {
        return a + b
    }, 0)
}

function nexon() {
    var i = 1;
    var generators = []
    var tempGen = generate(i)
    while (tempGen < 5000) {
        generators.push(generate(i))
        i++
        tempGen = generate(i);
    }
    var result = 0
    for (i = 1; i < 5000; i++) {
        if (generators.indexOf(i) < 0) {
            result += i
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

function output(arr, fixed) {
    var set = new Set();
    // 우선 경우의 수 로직
    allCase(arr, [], set);
    var arrBySet = [...set].sort()
    // arrBySet = arrBySet.map((e)=>{
    //   return e.split('')
    // })
    // 고정값 찾기

    fixed = preperFixed(fixed)

    arrBySet = arrBySet.filter((e, i) => {
        return isMatch(fixed, e)
    })
    // console.log(arrBySet)
}

function preperFixed(fixed) {
    var tmpArray = []
    fixed.forEach((e, i) => {
        if (String(e).length > 0) {
            tmpArray.push([i, e])
        }
    })
    return tmpArray;
}

function isMatch(standard, currentArr = []) {
    var copyStand = standard.slice('');
    if (standard.length > 0) {
        if (currentArr[standard[0][0]] == standard[0][1]) {
            copyStand.splice(0, 1)
            return isMatch(copyStand, currentArr)
        }
        return false
    } else {
        return true
    }
}

/**
 * 중요2 
 */
function allCase(arr, news, set) {
    if (arr.length > 0) {
        arr.forEach((e, i) => {
            var copyArr = arr.slice('')
            // var newStr = copyArr.splice(i, 1)[0] + str;
            var copyNews = news.slice('')
            copyNews.push(copyArr.splice(i, 1)[0])

            allCase(copyArr, copyNews, set);
        })
    }
    if (arr.length == 0) {
        set.add(news);
    }
}

output([1, 33, 3], ['', 3, ''])

/**
 * greed 
 */
function solution15(citations) {
    citations.sort((a, b) => a - b) // [0,1,1,3,6,7,8,9]
    var hIndex = citations[citations.length - 1]
    hIndex = greedGo(citations, hIndex)
    var answer = hIndex;
    return answer;
}

function greedGo(citations, h) {
    var tmpCitations = citations.filter((e) => e >= h)
    tmpCitations.map((e) => {
        return Number(e)
    })
    if (tmpCitations.length >= h) {
        return h
    } else {
        h -= 1;
        return greedGo(citations, h)
    }
}


console.log("\ngreed : ", solution15([0, 0, 0, 0, 0, '1', 1, 1, 1, 2, 3, 1, 2, 3, 1, 1, 9, 1, 1, 2]))


/**
 * 야놀자 테스트 
 */
function solution(s) {
    var sToArray = s.split(' ');

    sToArray = sToArray.map((e, i) => {
        var tmpStr = e;
        tmpStr = e.toLowerCase();
        if (e.match(/^[a-z]/g)) {
            tmpStr = tmpStr.replace(/^./, tmpStr.match(/^./)[0].toUpperCase())
        }
        return tmpStr;
    })
    // console.log(sToArray)
    var answer = sToArray.join(' ');
    return answer;
}

console.log("\n야놀자 테스트 (1) : ", solution(" 3people  unFollowed me"))

/**
 *  야놀자 테스트 
 */
function solutionx(A) {
    var countHead = 0
    var countTail = 0

    A.forEach(function (e) {
        if (e == 0) {
            countHead++
        } else if (e == 1) {
            countTail++
        }

    })
    return Math.min(countHead, countTail)
}
console.log("\n야놀자 테스트 (2) : ", solutionx([0, 0, 1, 1, 0]))


/**
 * 
 */