import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PATHS from "../constant/path"; // ✅ 추가

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // useSearchParams 훅 불러오기
  // useSearchParams 훅 : 쿼리 파라미터 관리
  const [searchParams, setSearchParams] = useSearchParams();

  // 상태(State)로 API 요청 주소를 관리하는것과
  // 쿼리파라미터로 API 요청 주소를 관리하는것의 차이는 무엇인가?

  // searchParams: 쿼리 파라미터 값을 가진 객체
  // setSearchParams: 쿼리 파라미터 값을 변경하는 함수

  // useEffect 의존성 배열의 역할
  // useEffect 콜백 함수를 언제 실행할것이냐를 결정
  // 의존성 배열이 빈 배열이면 컴포넌트가 첫 렌더링될 때 콜백 함수 실행
  // 의존성 배열에 데이터가 있으면 해당 데이터가 변경될 때 콜백 함수 실행
  useEffect(() => {
    // searchParams.get(쿼리_파라미터_키)
    // 쿼리 파라미터(searchParams)에서 key가 order인 값을 불러오기
    const order = searchParams.get("order") ?? "asc"; // Nullish 연산자를 통해 기본값을 지정
    const sortBy = searchParams.get("sortBy") ?? "id";

    const fetchPosts = async () => {
      setLoading(true);

      const config = {
        // axios 요청 쿼리 파라미터 설정
        params: {
          sortBy: sortBy,
          order: order,
        },
      };

      // ✅ 상수 경로 적용 (기존 URL 제거)
      const res = await axios(`https://dummyjson.com${PATHS.ROOT.POSTS}`, config);
      setPosts(res.data.posts);
      setLoading(false);
    };

    fetchPosts();
  }, [searchParams]);
  // 의존성 배열에 searchParams를 넣어서
  // 쿼리 파라미터가 변경되면 useEffect 콜백 함수를 실행한다
  // 쿼리 파라미터가 변경된다 -> setSearchParams() 실행

  function handleSortChange(sortBy, order) {
    // 주소(URL)의 쿼리 파라미터(sortBy, order) 설정
    setSearchParams({ sortBy: sortBy, order: order });
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">게시글 목록</h1>
      
      <div className="flex gap-2 mb-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={() => {
            // title을 기준(sortBy)으로 asc(오름차순) 순서(order)
            handleSortChange("title", "asc");
          }}
        >
          제목 오름차순
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={() => {
            // title을 기준(sortBy)으로 desc(내림차순) 순서(order)
            handleSortChange("title", "desc");
          }}
        >
          제목 내림차순
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          onClick={() => {
            // id를 기준(sortBy)으로 asc(오름차순) 순서(order)
            handleSortChange("id", "asc");
          }}
        >
          ID 오름차순
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          onClick={() => {
            // id를 기준(sortBy)으로 desc(내림차순) 순서(order)
            handleSortChange("id", "desc");
          }}
        >
          ID 내림차순
        </button>
      </div>
      
      {loading ? (
        <div className="text-center py-8">
          <div className="text-lg text-gray-600">로딩 중...</div>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                  #{post.id}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {post.body?.substring(0, 100)}...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}