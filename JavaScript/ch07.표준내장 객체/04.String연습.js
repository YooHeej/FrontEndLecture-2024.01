// 연습 문제
// 1. 1에서 1000 사이에 0은 몇 번, 1은 몇 번, ..., 9는 몇 번 사용되었는가?
let numStr = '';
for (let i = 1; i <= 1000; i++) {
    numStr += i;
}
/* console.log(numStr); */

// 1이 몇 번 사용되었나?

console.log(numStr.replace(/[^1]/g, '').length);

for (let i = 0; i <= 9; i++) {
let pattern = new RegExp('[^' + i + ']', 'g');
count = numStr.replace(pattern, '').length;
console.log(`${i}: ${count}`);
}

// count 배열을 만들어 일일이 체크
let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < numStr.length; i++) {
    let num = Number(numStr[i]);
    countArr[num]++;
}
console.log(countArr);

// 2. 디지털 시계, 00:00 ~ 23:59
// 하루 동안 3이 표시되는 시간은 몇 초인가?

let H = 0;
for (i = 0; i <= 23; i++) {
   if(i % 10 ==3)
   H += 60*60 - 60*3;
}

let M = 0;
for (j = 0; j <= 59; j++) {
    if(j % 10 == 3)
    M += 60;
}

console.log(H + M);


// 3. 두 개의 세 자리수를 곱해서 나온 결과가 palindrome일때
// 가장 큰 palindrome 수와 어떤 수를 곱해서 나온 결과인가?

let num = 100;
for (num = 100; num < 1000; num++) {

}

function isPalindrome(num) {
    let reverseNum = num.split('').reverse().join('');
    return num = reverseNum;
}




// 4. C:/Workspace/WebProject/03.JavaScript/ch07.표준내장객체/04.String연습.js
// 에서 파일명(04.String연습.js)만 출력하세요.

let file = `C:/Workspace/WebProject/03.JavaScript/ch07.표준내장객체/04.String연습.js`;
let file2 = file.split('/');
console.log(file2.slice(5,6));

file2.reverse();
console.log(file2.slice(0,1));
