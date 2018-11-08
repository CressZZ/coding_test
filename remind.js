/**
 * 폭탄 던지기 게임을 하려고 합니다. 1부터 N의 번호를 가진 사람들이 원형 탁자에 시계방향으로 앉아있습니다. 처음에는 1번 사람이 폭탄을 가지고 있습니다. 1번 사람은 폭탄을 다른 사람에게 던집니다. 폭탄을 받은 사람은 다른 사람에게 다시 폭탄을 던집니다. 폭탄을 던지는 방식은 폭탄을 받은 사람이 폭탄을 받은 횟수가 짝수 번이면 현재 자신을 기준으로 오른쪽으로 K 번째 있는 사람에게 폭탄을 던지고, 홀수 번이면 현재 자신을 기준으로 왼쪽으로 K 번째 있는 사람에게 폭탄을 던집니다. 단, 폭탄을 받은 사람이 폭탄을 M 번 받았으면 폭탄이 터지고 게임이 종료됩니다. 
매개변수로 N, M, K가 주어질 때, 게임이 종료될 때까지 폭탄이 몇 번 던져지는지를 return 하도록 solution 함수를 완성해 주세요.

제한사항
N : 2 이상 2000 이하의 자연수
M : 2000 이하의 자연수
K : N-1 이하의 자연수
입출력 예
N	M	K	answer
3	3	2	6
입출력 예 설명
입출력 예 #1
처음에는 1번 사람이 폭탄을 가지고 있습니다.

1번 사람은 폭탄을 한번 받았기 때문에 홀수 번이므로 현재 자신을 기준으로 왼쪽으로 2번째인 3번 사람에게 폭탄을 던집니다.
3번 사람은 폭탄을 한번 받았기 때문에 홀수 번이므로 현재 자신을 기준으로 왼쪽으로 2번째인 2번 사람에게 폭탄을 던집니다.
2번 사람은 폭탄을 한번 받았기 때문에 홀수 번이므로 현재 자신을 기준으로 왼쪽으로 2번째인 1번 사람에게 폭탄을 던집니다.
1번 사람은 폭탄을 두번 받았기 때문에 홀수 번이므로 현재 자신을 기준으로 오른쪽으로 2번째인 2번 사람에게 폭탄을 던집니다.
2번 사람은 폭탄을 두번 받았기 때문에 홀수 번이므로 현재 자신을 기준으로 오른쪽으로 2번째인 3번 사람에게 폭탄을 던집니다.
3번 사람은 폭탄을 두번 받았기 때문에 홀수 번이므로 현재 자신을 기준으로 오른쪽으로 2번째인 1번 사람에게 폭탄을 던집니다.
1번 사람은 폭탄을 세번 받았기 때문에 게임이 종료됩니다.
이때, 게임이 종료될 때까지 폭탄을 6번 던졌으므로 6을 return 하면 됩니다.
 */
/*
function solution(n,m,k){
    var arr = setArr(n) // [1,2,3];
    var counts = throwBomb(arr, m, k)

    return counts

}

//  arr[nowIndex] = nowIndex+1
function throwBomb(arr, m, k, nowIndex=0, count=0){
    arr[nowIndex] = (arr[nowIndex] + 1);

    if(arr[nowIndex] - (nowIndex + 1) != m ){
        var nextIndex = ((arr[nowIndex] - (nowIndex+1)) % 2) == 0 ?  ((nowIndex + k) % m) : Math.abs(((nowIndex - k) % m));
        count+=1;
        return throwBomb(arr, m, k, nextIndex, count)
    }else{
        return count
    }
}


function setArr(n){
    var _tmpArr = []
    for(var i =1; i<=n; i++){
        _tmpArr.push(i)
    }
    return _tmpArr;
}


console.log(solution(3000, 200, 100))
*/

function solution(monsters, bullets) {
    var flatedMonsters = monsters.map((e)=>{
        return flat(e)
    })
    var flatedMonstersStr = flatedMonsters.map((e)=>{
        return e.join('')
    })

    var flatedBullets = bullets.map((e)=>{
        return flat(e)
    })
    var flatedBulletsStr = flatedBullets.map((e)=>{
        return e.join('')
    })

    var count = 0;

    flatedBulletsStr.forEach((bullet)=>{
        var index = flatedMonstersStr.indexOf(bullet)
        if(index > -1){
            flatedMonstersStr.splice(index,1)
            count += 1;
        }
    })

    count = count == 0 ? -1 : count

    return count;
}

function flat(arr){
    var x = arr[0];
    var y = arr[1];
    if(Math.abs(x) == Math.abs(y)){
        return [(x/Math.abs(x)),(y/Math.abs(y))]
    }
    if(x==0 || y==0){
        var newX = x/Math.abs(x) || 0;
        var newY = y/Math.abs(y) || 0;
        return [newX,newY]
    }

    if(x%2==0 && y%2==0){
        var newArr = [(x/2),(y/2)]
        return flat(newArr)
    }else if(x%y==0 && y!=1){
        var newArr = [(x/y),(y/y)]
        return flat(newArr)
    }else if(y%x==0 && x!=1){  
        var newArr = [(x/x),(y/x)]
        return flat(newArr)
    }else{
        return (arr)
    }
}   

var tmpMonsters =[[4, 6], [-8, 6], [-20, -10], [-10, -5], [4, -6], [6, -8]]
var tmpBullets = [[2, 3], [-4, 3], [-30, -15], [-2, -1], [2, -3], [12, -16]];

console.log(solution(tmpMonsters, tmpBullets))