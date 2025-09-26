import axios from "axios";

async function putProduct() {
  //axios 설정 객체 config
  const config = {
    url: "https://dummyjson.com/products/1",
    method: "put",
    headers: { "Content-Type": "application/json" },
    data: {
      title: "아이폰 100",
    },
  };

  // 응답 데이터 저장
  const response = await axios(config);

  console.log(response.data);
}
putProduct();
