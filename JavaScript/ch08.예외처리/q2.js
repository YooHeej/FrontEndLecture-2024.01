/* 2. 백준도장 31090 참조
      다음의 사례에 대해서 Good/Bye를 출력하세요.
            2023, 2024, ..., 2040

      단, 조건에 맞는지를 확인해 주는 함수 isDivisible(year)를 만들어서 해결하세요. */


function isDivisible(year) {
let Y1 = year + 1;                                  // 다음 연도
let Yr = year - 2000;                               // 뒷 연도 ÷ 앞의 연도 네 자리 중 뒤의 두 자리 구하기 (2023년부터 시작)

if (Y1 % Yr == 0 )                                  // 나머지 = 0 => 나누어 떨어짐.
    console.log(year + "년 = " + "Good");
else
    console.log(year + "년 = " + "Bye");
}

for (i = 2023; i <=2040; i++) {
    isDivisible(i);
}