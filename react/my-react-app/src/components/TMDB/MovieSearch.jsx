import React, { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";

export default function ProductContainer() {
  const [products, setProducts] = useState([]);

  // 👉 여기서 데이터 가져오기 및 정렬 기능을 구현하면 됨
  useEffect(() => {
    // fetch / axios 요청 로직 작성 예정
    async function fetchData() {
      try {
        const res = await axios("https://dummyjson.com/products");
        setProducts(res.data.products); // 상태 업데이트
      } catch (err) {
        console.error("데이터 가져오기 실패:", err);
      }
    }
    // 2. 정의한 함수를 즉시 실행
    fetchData();
  }, []); // []: 컴포넌트 첫 렌더링 시 한 번만 실행

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* 정렬 버튼 영역 */}
      <div className="flex gap-2 mb-6">
        {/* 오름차순 Ascending  */}
        <button className="bg-blue-500 text-white px-3 py-1 rounded">
          ID ↑
        </button>
        {/* descending */}
        <button className="bg-blue-500 text-white px-3 py-1 rounded">
          ID ↓
        </button>
        {/* highprice */}
        <button className="bg-green-500 text-white px-3 py-1 rounded">
          가격 ↑
        </button>
        {/* lowprice*/}
        <button className="bg-green-500 text-white px-3 py-1 rounded">
          가격 ↓
        </button>
        {/* highRating */}
        <button className="bg-yellow-500 text-white px-3 py-1 rounded">
          평점 ↑
        </button>
        {/* lowRating */}
        <button className="bg-yellow-500 text-white px-3 py-1 rounded">
          평점 ↓
        </button>
      </div>

      {/* 상품 목록 출력 */}
      <div className="space-y-4">
        {Array.isArray(products) &&
          products.map((p) => <Product key={p.id} product={p} />)}
      </div>
    </div>
  );
}
