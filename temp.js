
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
console.log("searchAllCase: ", AllCases)

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

