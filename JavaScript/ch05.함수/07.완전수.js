// 완전수 구하기

// 자기 자신을 제외한 약수의 합 구하는 함수
function sumOfDivisors(num) {
    let divSum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0)
            divSum += i;
        }
         return divSum;

}



// 2에서 부터 10000 사이의 완전수 구하기

// (함수 사용)
for (let i = 2; i <= 10000; i++) {
    if (i == sumOfDivisors(i))
    console.log(i);
}




// (함수 미사용)
for (let i = 2; i <= 10000; i++) {
    let divSum = 0;
    for (let k = 1; k < i; k++) {               // 1에서 부터 자기 자신 전 까지
            if (i % k == 0)                     // 약수의 합 구하기
                    divSum += k;
    }
    if (i == divSum)                    // 자기 자신을 제외한 약수의 합과 자기 자신이 같으면
       console.log(i);
}