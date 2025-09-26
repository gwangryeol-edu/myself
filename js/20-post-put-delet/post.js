import axios from "axios";

async function addProduct() {
  //요청 주소
  const URL = "https://dummyjson.com/products/add";

  // 요청 방법(목적)
  const METHOD = "post";

  // 요청 본문(body)
  const body = {
    title: "갤럭시 s99",
    category: "스마트폰",
  };
  // 요청 헤더(header)
  // 헤더(header): 요청의 부가 정보
  const header = {
    // content-Type: 요청 본문의 데이터 형식
    // application/json : json 확장자 데이터
    "Content-Type": "application/json",
  };

  //axios 요청 설정 파일
  const config = {
    url: URL,
    method: METHOD,
    headers: header,
    data: body,
  };
  const response = await axios(config);

  //데이터 객체 추출
  const data = response["data"];

  console.log(data);
}
