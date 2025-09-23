// axios 불러오기
import axios from "axios";

// (비동기)async/await
async function connectTest() {
  // axios.get(url): 데이터 요청에 대한 응답 데이터를 반환(생성)
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
// 데이터 직접 확인
console.log(response.data); 

// 데이터 키 테이블 형태로 보기
console.table(response.data); // 배열이면 테이블 형식으로 표시됨

// 응답 객체의 키만 보고 싶다면
console.table(Object.keys(response));
}
connectTest();
