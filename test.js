/*let a = 2;
let b = 5;
console.log(a+b);
for(let i=0; i<9; i++){
    console.log(i);
}
console.log("하나")


let gugudan = function(dan){
    function printdan(a){
        console.log(a)
    }
    for(i=1; i<=9, ++){
        printdan(`${i}*${dan}=${i*dan}`)
    }
}*/


/*function printDan(dan){
    for(i=1; i<=9; i++){
        console.log(`${i}*${dan}=${i*dan}`)
        
}
}
let printGugudan = function(){
    for (k=2;k<=9;k++){
        printDan(k)
        console.log('\n')
    }
}
printGugudan();
*/
/*
1. 팩토리얼 함수를 구현한다
2. 인자로 하나의 숫자를 받는다.
2. 그 인자를 1씩 감소시키면서 계속 곱한다
3. 1이 될 때까지
4. 다 곱한 수를 반환한다
예: 5가 인자로 들어오면 출력은 5*4*3*2*1 = 120 */

function factorial(num){
    let result = 0;
    
    if (num ==1){
        return 1
    } 

    while (num >1){
        result = num * factorial(num-1)
    }

    return result 
}
debugger;
console.log(factorial(5));

