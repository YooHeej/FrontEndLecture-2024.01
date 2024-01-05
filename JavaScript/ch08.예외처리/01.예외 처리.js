// 에러가 발생하면 프로그램 실행이 중지가 된다.

// error.error.error();

try {
    error.error.error();                    // 에러가 발생할 지도 모르는 코드를  try - catch 블록 안에 작성한다.
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}


console.log('여기가 끝입니다.');
