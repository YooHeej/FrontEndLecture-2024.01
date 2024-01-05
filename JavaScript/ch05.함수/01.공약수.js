// 함수 사용의 필요성 //

/* 약수
let num = 12;
for (let i = 1; i <= num; i++) {
    if (num % i == 0)
        console.log(i);
} */

// 두 수의 공약수 구하기
/* let num1 = 24, num2 = 60;
let commonDivisors = [];
for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i == 0 && num2 % i == 0)
        commonDivisors.push(i);
}
console.log(`${num1}, ${num2}의 공약수는 ${commonDivisors}`); */


function getDivisors(num) {
    
    let divisors = []; 
    for (let i = 1; i <= num; i++) {
        if (num % i == 0)
        divisors.push(i);
    }
    return divisors;
}

let divisors1 = getDivisors(12);
let divisors2 = getDivisors(30);
console.log(divisors1);
console.log(divisors2);