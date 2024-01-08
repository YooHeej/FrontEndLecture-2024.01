let h = 0;
let H = 0;
for (i = 0; i <= 23; i++) {
   if(i % 10 == 3)
   h += 60*60*60;

}

let M = 0;
for (j = 0; j <= 59; j++) {
    if(j % 10 == 3)
    M += 60*60;
}

console.log(h);
console.log(M);
console.log(h + M - 10800);
