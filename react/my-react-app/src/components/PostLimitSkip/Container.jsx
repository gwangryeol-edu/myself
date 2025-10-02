import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

export default function Container() {
  const [posts, setPosts] = useState([]); // 상품 목록 상태
  const [skip, setSkip] = useState(0); // 상품 시작 인덱스 상태
  const [total, setTotal] = useState(0);
  const LIMIT = 5; // 한 페이지에 표시할 상품 수

  useEffect(() => {
    async function fetchPosts() {
      // 적절한 요청 URL을 작성한다
      const response = await axios.get(
        `https://dummyjson.com/posts?limit=${LIMIT}&skip=${skip}`
      );
      setPosts(response["data"]["posts"]);
      setTotal(response["data"]["total"]);
    }

    fetchPosts(); // 의존성 배열 useEffect가 감시하는 데이터
  }, [skip]);

  // 적절한 함수를 작성한다

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex gap-2 mb-6">
        <button
          className="bg-gray-500 text-white px-3 py-1 cursor-pointer"
          // 비활성화 버튼: 마지막 페이지가 되었을 떄
          onClick={() => setSkip(0)}
        >
          처음으로
        </button>
        <button
          className="bg-blue-500 text-white px-3 py-1 cursor-pointer"
          // 4.	Math.max(skip - LIMIT, 0)
          // → 두 값 중 더 큰 값을 반환하는 자바스크립트 내장 함수.
          // 만약 계산 결과가 음수라면 0을 반환
          onClick={() => setSkip(Math.max(skip - LIMIT, 0))}
        >
          이전
        </button>
        <button
          className="bg-blue-500 text-white px-3 py-1 cursor-pointer"
          onClick={() => setSkip(skip + LIMIT)}
        >
          다음
        </button>
        <button
          className="bg-gray-500 text-white px-3 py-1 cursor-pointer"
          onClick={() => setSkip(Math.floor((total - 1) / LIMIT) * LIMIT)}
        >
          마지막으로
        </button>
      </div>
      <div className="space-y-4">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
