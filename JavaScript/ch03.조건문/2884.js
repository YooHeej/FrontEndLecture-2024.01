function solution(h, m) {
    let answer, hour = 0, minute = 0;
    if (m - 45 < 0) { //m이 음수일때,
      minute = 60 + (m - 45) //음수일때 m의 값에 60을 더해준다.
      hour = h - 1

      if (hour === -1) { //오후 12시는 24시고 0:00으로 표시한다고 했으니, 
        //hour이 만약에 -1보다 작으면 hour은 23으로 초기값세팅해준다.
        hour = 23;
      }
    } else {
      minute = m - 45;
    }
    answer = hour + ':' + minute
    return answer;
}

console.log(solution(10, 10))
console.log(solution(0, 30))
console.log(solution(23, 40))



