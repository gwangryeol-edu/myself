import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
// 무엇을 할거냐?
// 컴포넌트가 첫 렌더링 될 때 dummyJSON으로 데이터를 요청(axios)->useEffect
export default function RequestData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // axios 를 사용해서 DummyJSON product데이터를 요청
    async function getProducts() {
      const res = await axios("https://dummyjson.com/products");
      const data = res.data;
      console.log(data);
      setProducts(data.products);
    }
    getProducts();
  }, []); //  빈 의존성 배열: 컴포넌트가 첫 렌더릴될 때만 콜백함수가 실행

  return (
    // product: 배열
    //map: 바놉ㄱ 메서드
    // product: 반복되는 배ㅕ열의 원소 배열
    <div>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}
