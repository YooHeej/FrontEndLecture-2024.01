/* 1. 만 나이를 계산하세요.
      생년, 월, 일을 변수로 설정해서 풀어보세요.변수로

   2. 백준도장 31090 참조
      다음의 사례에 대해서 Good/Bye를 출력하세요.
            2023, 2024, ..., 2040

      단, 조건에 맞는지를 확인해 주는 함수 isDivisible(year)를 만들어서 해결하세요.Bye를

   3. 어레이를 매개변수로 받아서 합의 제곱과 제곱의 합의 차이를 구하는 함수를 만들고,
        [24, 67, 45, 97, 43]
      의 결과를 출력하세요.
       */

// 1 //
let today = new Date();
let birthday = new Date(1994, 0, 5);
let age = today.getFullYear() - birthday.getFullYear();
let M = today.getMonth() - birthday.getMonth();
if (M < 0 )
    age--;
   else if (M === 0 && today.getDate() < birthday.getDate())
    age--;
console.log(`올해 만 나이는 ${age} 입니다.`);

// 2 //

function isDivisible(year) {
    let Y1 = year + 1;
    let Yr = year - 2000;
    
    if (Y1 % Yr == 0 )
        console.log(year + "년 = " + "Good");
        else
            console.log(year + "년 = " + "Bye");
    }
    
    for (i = 2023; i <=2040; i++) {
        isDivisible(i);
    }



// 3 //

function sspm(S) {
    let sum = 0;
    let sum5 = 0;
    let tum = 0;
    for (i = 0; i < S.length; i++)
        sum += S[i];
        sum5 = sum * sum;
    
    for (i = 0; i < S.length; i++)
        tum += S[i] * S[i];
    return sum5 - tum;
}

let ex = [24, 67, 45, 97, 43]

console.log(sspm(ex));

