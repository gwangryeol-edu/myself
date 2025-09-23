import axios from "axios";

// 도메인 주소
const BASE_URL = "https://dummyjson.com";
// axios
/* 
fetch('https://dummyjson.com/test')
.then(res => res.json())
.then(data => console.log(data));
*/

// async 화살표 함수
const testRoute = async () => {
  const data = await axios.get(`${BASE_URL}/test`);
  console.log(data["data"]);
  /* { status: 'ok', method: 'GET' } */
};
// testRoute();

async function getAllProducts() {
  const responses = await axios.get(`${BASE_URL}/products`);
  console.log(responses["data"]);
}
// getAllProducts();

async function getProductByID(n) {
  const res = await axios.get(`${BASE_URL}/products/${n}`);
  console.log(res["data"]);
}
// getProductByID(1);
// getProductByID(2);
// getProductByID(10);

async function searchProducts(search) {
  // js 내장 객체 URLSearchParams는 URL 에 쿼리스트링을 손쉽게 만들 수 있게 해줌 q:searxh->q=값 형태
  const queryParams = new URLSearchParams({ q: search });
  // await axios.get("URL")은 지정된 URL로 GET 요청을 보내고, 서버에서 온 응답을 res에 담음
  const res = await axios.get(`${BASE_URL}/products/search?${queryParams}`);
  console.log(res["data"]);
}
// searchProducts("phone");

async function getAllProducts_2() {
  const res = await axios.get(`${BASE_URL}/products`);
  const data = res["data"];
  // 객체의 속성들을 [key:value]형태의 배열로 변환
  // data 객체의 모든 속성을 배열 형태로 출력하는 것
  console.log(Object.entries(data));
  return res;
}
// getAllProducts_2();

async function getProductsData() {
  const res = await axios.get(`${BASE_URL}/products`);

  const products = res.data.products;
  console.log(products);
}

// getProductsData();

async function getProductTotalCount() {
  //axios.get()로 API를 호출하면 res라는 **응답 객체(response object)**가 반환
  const res = await axios.get(`${BASE_URL}/products`);
  // res 객체 안에는 여러 속성이 있는데, 그중 서버에서 보낸 실제 데이터가 res.data 또는 res["data"]에 들어 있음
  // 응답 객체 안에서 실제 데이터만 꺼내서 data 변수에 저장하는 역할
  const data = res["data"];
  console.log(data["total"]);
}

// getProductTotalCount();

async function getProductProperty(propertyName) {
  // products api호출 서버 응답이 기달렸다가(await) res에 저장
  // res는 응답 객체 → 실제 데이터는 res.data 안에 있음
  const res = await axios.get(`${BASE_URL}/products`);
  // 응답 객체에서 실제 JSON 데이터만 꺼내서 data에 저장
  const data = res["data"];
  // •	data["products"] → 상품 배열
  // •	.map() → 배열의 각 요소를 새로운 값으로 변환
  // •	(product) => { product[propertyName]; } → 각 상품에서 propertyName 속성 값을 가져오려고 시도
  const value = data["products"].map((product) => {
    product[propertyName];
  });
  // res → data → products → map → value 흐름
  console.log(value);
}
// getProductProperty("title");

async function getProductPropertie(propertyNames) {
  const res = await axios.get(`${BASE_URL}/products`);
  const data = res["data"];
  const extractedData = data["products"].map((product) => {
    // result = {} → 각 상품에서 추출한 속성들을 담을 객체
    const result = {};

    //propertyNames → 우리가 추출하고 싶은 속성 이름들의 배열
    //.forEach() → 배열을 순회하면서 각 요소마다 콜백 함수 실행
    //콜백 함수 매개변수 prop → 배열 요소 하나씩 들어옴
    propertyNames.forEach((prop) => {
      result[prop] = product[prop];
    });

    return result;
  });
  console.log(extractedData);
}
// getProductPropertie(["title", "price", "description"]);

async function getFilteredProducts(propertyName, value) {
  const res = await axios.get(`${BASE_URL}/products`);
  const data = res["data"];
  const filteredProducts = data["products"].filter(
    (product) => product[propertyName] < value
  );
  console.log(filteredProducts);
}

getFilteredProducts("price", 10);