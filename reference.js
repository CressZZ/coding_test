/* 1번

function mergeStrings(a, b) {
  // 1.문자를 자른다. 
  var arrayA = a.split('');
  var arrayB = b.split('');

  var maxLength = Math.max(arrayA.length,arrayB.length)
  var arrayNew = []
  // 2. 붙인다
  for(var i = 0; i<maxLength; i++){
    if(arrayA[i]){
      arrayNew.push(arrayA[i]);
    }
    if(arrayB[i]){
      arrayNew.push(arrayB[i]);
    }
  }
  
  var stringNew = arrayNew.join('');

  console.log(stringNew)
  return stringNew
}

mergeStrings("ab" , "zsd" )
"abc" , "stu" ->"a,s,b,t,c,u"

// [a,b,c] [s,t,u]
// [a,b,c,d,e] [s,t,u]
// [a,b,c] [s,t,u,v,w]

*/

/* 2번

function combinate(s){
  // 1. 전처리
  var trim = s.replace(/ /gi, "") // 공백제거
  var toArr = trim.split('').filter((e)=>e!="") // 배열로 만들고
  var reversedSortedArr = toArr.reverse(); //리버스
  var results = [];

  // 2. 배열 만들기
  reversedSortedArr.forEach(function(e,i){
    // 그 전에 거랑 합치고
    var copyResults = results.slice(0);
    copyResults.forEach(function(resultsElement){
      results.push(String(e + resultsElement))
    })
    // 자기자신 넣고
    results.push(e);
  })

  // 3. 후처리, sort해주고 중복 제거 하고
  results = results.sort().filter((e, i, a) => {
    return a.indexOf(e) === i;
  });; 

  return results
}
console.log(combinate("ba"))

*/
/*
 * Complete the 'deleteOdd' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST_NODE.
 * The function accepts INTEGER_SINGLY_LINKED_LIST_NODE listHead as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */



function deleteOdd(listHead) {
  // Write your code here
  console.log(listHead.data)
  var deletedOddlList = listHead.filter((e)=>{
    return e%2 == 0
  })
  console.log(deletedOddlList)
  return deletedOddlList
}

function test(listHead){
  if(listHead.data % 2 == 1){
    if(listHead.next.next){
      listHead.next = listHead.next.next;
      test(listHead.next)
    }
    
  }
}


function deleteOdd(listHead) {
  console.log(listHead.data)
  
  if(listHead.data % 2 == 1){
    if(listHead.next.next){
      listHead.next = listHead.next.next;
    }else{
      listHead.next = false
    }
  }
  if(listHead.next){
    deleteOdd(listHead.next);
  }

  return listHead
}

function deleteOdd(listHead) {
  
  // console.log(typeof(listHead.next))
  if(listHead.data % 2 == 1){
    
    listHead.data = listHead.next.data;
    listHead.next = listHead.next.next;


    deleteOdd(listHead)

  }else{
      if(listHead.next){
          console.log(typeof(listHead.next))
          deleteOdd(listHead.next)
      }
  }

return listHead
}

function deleteOdd(listHead) {
  
  // console.log(typeof(listHead.next))
  if(listHead.data % 2 == 1){
    
    
    listHead.data = listHead.next.data;
    listHead.next = listHead.next.next;


    deleteOdd(listHead)

  }else{
      if(listHead.next){
          deleteOdd(listHead.next)
      }
  }

return listHead
}