let sum = 0;
while (sum <= 21) {
    let dice = Math.ceil(Math.random()*6);
    console.log(dice);
    sum += dice;                        
}
console.log(sum);

// 위의 방법보다 아래가 더 많이 사용됨.
sum = 0;
while (true) {
    let dice = Math.ceil(Math.random()*6);
    console.log(dice);
    sum += dice;
    if (sum > 21)
        break;
}
console.log(sum);


// breark는 loop의 한 단계만 벗어날 수 있음.
for (let i=0; i < 5; i++) {
    for(let k=0; k < 5; k++) {
        if (k == 2)
            break;
    }
    console.log('point A');
}
console.log('point B');