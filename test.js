// 1. 알파벳을 입력받아 계산하는 프로그램 작성
// a는 1 이라하고 z는 26 입니다. 단, 대소문자 모두 인식해야 합니다.

// 예) abcd를 입력 받으면 결과는 10 입니다.

// 출처: http://imjuni.tistory.com/419 [Foolish coder Jooni]

/*
function test(alpha){
    var arrayAlpha = alpha.split('');
    arrayAlpha = arrayAlpha.map(function(e){
        return e.toLowerCase();
    })
    arrayAlpha = arrayAlpha.map(function(e){
        return (e.charCodeAt(0)-96);
    })
    var reduced = arrayAlpha.reduce(function(a,b){
        return a+b;
    })
    console.log(reduced);
    return reduced
}

test("abCd")
*/

// 2. 특정 문자열 계산하는 프로그램 작성
// 영문자를 입력받아 문자열중 bab은 1점, baby는 -2점으로 계산한다.
// 기본점수는 50점이며 babbab(또는 babab, 또는 babybaby),일경우 한 번만 계산되며 babbaby일 경우 baby만 계산한다.
// (bab과 baby가 하나의 단어처럼 조합된 경우 baby만 처리)

// 예) bab is baby  => 50 + 1 - 2  => 결과 : 49
//     babbab is baby  => 50 + 1 - 2  => 결과 : 49
//     babbabbaby is babybababy  => 50 -2 - 2  => 결과 : 46


// 출처: http://imjuni.tistory.com/419 [Foolish coder Jooni]
/*
function test(string){
    var addScore = 0;
    var toArrary = string.split(' ');
    toArrary.forEach(function(e){
        if(/baby/g.test(e)){
            addScore += -2;
        }else if(/bab/g.test(e)){
            addScore += 1;
        }
    })
    var score = 50 + addScore;
    return score;
}

console.log(test('bab is baby'))
*/

// 3. 팀구성하기 프로그램 작성
// 서로 싫어하지 않는 선수로 2팀을 구성한다.


// 1. 전체 선수 인원 입력
// 2. 싫어하는 선수가 있는 선수는 싫어하는 선수수와 선수 번호를 차례대로 입력한다.
// 3. 선수는 최대 100명까지 가능하다.

// 예)
//      (입력)
//      5           => 설명 : 총 선수수
//      1 1 2       => 설명 : 1번선수는 1명을 싫어하고 싫어하는 선수는 2번이다.
//      2 1 3       => 설명 : 2번선수는 1명을 싫어하고 싫어하는 선수는 3번이다.
//      3 0 0       => 설명 : 3번선수는 싫어하는 선수가 없다.
//      4 2 2 3     => 설명 : 4번선수는 2명을 싫어하고 싫어하는 선수는 2,3번이다.
//      5 1 4       => 설명 : 5번선수는 1명을 싫어하고 싫어하는 선수는 4번이다.
     
//      위와 같이 입력(설명은 단지 입력에 대한 설명이고 숫자만을 입력한다)하면 결과는
     
//      A팀 : 1,5
//      B팀 : 2

// 출처: http://imjuni.tistory.com/419 [Foolish coder Jooni]

var teamA = [];
var teamB = [];

var total;
var members =[]

function input(arg){
    var arrayArg = arg.split(' ');
    arrayArg = arrayArg.map(function(e){return Number(e)})
    if(arrayArg.length == 1){
        total = arrayArg[0];
    }else{
        if(arrayArg.slice(1,2)>0){

            members[arrayArg[0]-1] = arrayArg.slice(2)
        }else{
            members[arrayArg[0]-1] = []
        }
    }
}

function result(){
    tempTeam = []
    members.forEach(function(member,memberIdx){
       
        for(let i=1; i<total+1; i++){
            if(member.indexOf(i) == -1 && member.indexOf(i)!=i){
                member.push(i)
            }else{
                member.splice(member.indexOf(i),1)
            }
        }
  
    })

     members.forEach(function(member,memberIdx){
        member.forEach(function(likePersonIdxPluseOne){
            if(likePersonIdxPluseOne>memberIdx){
                if(members[likePersonIdxPluseOne - 1].indexOf(memberIdx) > -1){
                    tempTeam.push([memberIdx+1, likePersonIdxPluseOne])
                }
            }
        })
    })

    console.log(tempTeam);
}


input('5');
input('1 1 2');
input('2 1 3');
input('3 0 0');
input('4 2 2 3');
input('5 1 4');

result();


