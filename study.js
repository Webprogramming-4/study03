// 1. 변수 선언
let a = 10; // let: 값을 변경할 수 있음
a = 20; // OK

const userName = "Alice"; // const: 값을 변경할 수 없음
// userName = "Bob"; // -> 에러 발생

// 2. 자료형
let myName = "양지우";    // string (문자열)
let myAge = 21;         // number (숫자)
let isDeveloper = true; // boolean (참/거짓)

// 3. if (조건문)
let temperature = 15;

if (temperature > 25) {
  console.log("날씨가 덥습니다.");
} else if (temperature > 10) {
  console.log("날씨가 쾌적합니다."); // 이 코드가 실행됨
} else {
  console.log("날씨가 춥습니다.");
}

// 4. for (반복문) - 0, 1, 2, 3, 4 (총 5번) 출력
for (let i = 0; i < 5; i++) {
  console.log("현재 i의 값: " + i);
}

// 5. while (반복문) - 0, 1, 2, 3, 4 (총 5번) 출력
let count = 0;
while (count < 5) {
  console.log("현재 count의 값: " + count);
  count++; // count 값을 1 증가 (이 코드가 없으면 무한 반복됨)
}

