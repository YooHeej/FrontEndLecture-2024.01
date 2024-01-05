/* 1. 만 나이를 계산하세요.
      
    생년, 월, 일을 변수로 설정해서 풀어보세요.*/

let today = new Date();                                     // 현재 날짜
let birthday = new Date(1994, 0, 5);                        // 生 - 연, 월, 일

let age = today.getFullYear() - birthday.getFullYear();     // 현재 연도 - 생일 연도 => 나이 큰 틀 잡기 (기존 우리나라 나이)

let M = today.getMonth() - birthday.getMonth();             // 현재 월 - 생일 월 => '만' 나이에 영향

let td = today.getDate()                                    // 현재 날짜 => '만' 나이에 영향
let bd = birthday.getDate()                                 // 생일 날짜 => '만' 나이에 영향

if (M < 0 )                                                 // 'M' 이 음수일 경우 => 생일이 지나지 않았기에 기존 우리나라 나이 - 1살
    age--;
else if (M === 0 && td < bd)                                // 'M' 이 0이라도(현재 '월' = 생일 '월') 날짜가 지나지 않았기에 기존 우리나라 나이 - 1살
    age--;
console.log(`올해 만 나이는 ${age} 입니다.`);