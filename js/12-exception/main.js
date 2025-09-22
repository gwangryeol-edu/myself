// 예외 처리를 위한 예시 코드

// 1. 정상적인 JSON 데이터
const jsonString = '{"name": "Alice", "age": 30}';

// 2. 오류를 유발하는 잘못된 JSON 데이터 (age 값 뒤에 쉼표가 추가됨)
const invalidJsonString = '{"name": "Bob", "age": 40,}';

function parseJson(json) {
  try {
    // 이 블록 안의 코드를 실행합니다.
    console.log(`--- 파싱 시도: ${json} ---`);
    const user = JSON.parse(json);
    console.log("✅ 파싱 성공!");
    console.log(`이름: ${user.name}, 나이: ${user.age}`);
  } catch (error) {
    // try 블록에서 오류가 발생하면 이 블록이 실행됩니다.
    console.error("❌ 파싱 실패!");
    // `error` 객체에는 오류에 대한 상세 정보가 담겨 있습니다.
    console.error(`오류 메시지: ${error.message}`);
  } finally {
    // 오류 발생 여부와 상관없이 항상 실행됩니다.
    // return에 의해서 함수가 종료가 되어도 실행이 된다.
    console.log("--- 파싱 시도 완료 --- \n");
  }
}

// 정상적인 데이터로 함수 실행
parseJson(jsonString);

// 잘못된 데이터로 함수 실행
parseJson(invalidJsonString);

console.log("프로그램이 중단되지 않고 계속 실행됩니다.");
