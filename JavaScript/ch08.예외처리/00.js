const today = new Date(). toISOString();
// 2024-01-08T02:09:49.378Z
// 날짜 추출: 2024-01-08
console.log(today.substring(0,10));
console.log(today.substring(0, today.indexOf('T')));
console.log(today.split('T')[0]);

function isPalindrome(s) {
    return s == s.split('').reverse().join('');
}

let maxPal = 0, max1 = 0, max2 = 0;
for (let i = 100; i <= 999; i++) {
    for (let k = i; k <= 999; k++) {
        let mul = i * k;
        if (isPalindrome(String(mul))) {
            if (mul > maxPal) {
                maxPal = mul; max1 = i; max2 = k;
            }
        }
    }
}
console.log(`${max1} X ${max2} = ${maxPal}`);