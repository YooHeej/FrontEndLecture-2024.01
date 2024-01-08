/* 3. 어레이를 매개변수로 받아서 합의 제곱과 제곱의 합의 차이를 구하는 함수를 만들고,
    
      [24, 67, 45, 97, 43]
    
      의 결과를 출력하세요. */

function sppsm(S) {
    let sum = 0;                                                //  sum = 매개 변수 합계
    let sum2 = 0;                                               //  sum2 = 매개 변수 합계의 제곱
    let tum = 0;                                                //  tum = 매개 변수 제곱의 합
    
    for (i = 0; i < S.length; i++)
        sum += S[i];
        sum2 = sum * sum;
    
    for (i = 0; i < S.length; i++)
        tum += S[i] * S[i];
    return sum2 - tum;
}
    
    let ex = [24, 67, 45, 97, 43]
    
    console.log(`합의 제곱 - 제곱의 합 = ${sppsm(ex)}`);