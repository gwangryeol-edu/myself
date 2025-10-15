// src/pages/DummyPages/ProductDetail.jsx
// 상품 상세 페이지 컴포넌트
// 특정 상품의 자세한 정보를 표시

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PATHS from "../../constants/paths";

export default function ProductDetail() {
  // useParams 훅: URL 파라미터에서 값을 가져옴
  // 예: /products/1 -> params.id = "1"
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        // DummyJSON API에서 특정 상품 정보 가져오기
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
        setError(null);
      } catch (err) {
        console.error("상품 정보를 불러오는데 실패했습니다:", err);
        setError("상품 정보를 불러올 수 없습니다.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center py-8">
          <div className="text-lg text-gray-600">로딩 중...</div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center py-8">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            {error || "상품을 찾을 수 없습니다"}
          </h2>
          <Link 
            to={PATHS.POSTS}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            상품 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* 뒤로가기 버튼 */}
      <div className="mb-6">
        <Link 
          to={PATHS.POSTS}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← 상품 목록으로 돌아가기
        </Link>
      </div>

      {/* 상품 정보 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          {/* 상품 이미지 */}
          <div className="md:w-1/2">
            <img 
              src={product.thumbnail} 
              alt={product.title}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          
          {/* 상품 정보 */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            
            <div className="space-y-4">
              <div>
                <span className="text-2xl font-semibold text-green-600">
                  ${product.price}
                </span>
                <span className="text-lg text-gray-500 ml-2">
                  ({product.discountPercentage}% 할인)
                </span>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">설명</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-1">브랜드</h3>
                  <p className="text-gray-600">{product.brand}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-1">카테고리</h3>
                  <p className="text-gray-600">{product.category}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-1">평점</h3>
                  <p className="text-gray-600">{product.rating}/5</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-1">재고</h3>
                  <p className="text-gray-600">{product.stock}개</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
