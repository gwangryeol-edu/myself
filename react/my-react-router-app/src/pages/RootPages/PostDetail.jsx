// src/pages/RootPages/PostDetail.jsx
// 게시글 상세 페이지 컴포넌트
// 특정 게시글의 자세한 정보를 표시

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PATHS from "../../constants/paths";

export default function PostDetail() {
  // useParams 훅: URL 파라미터에서 값을 가져옴
  // 예: /posts/1 -> params.id = "1"
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        // DummyJSON API에서 특정 게시글 정보 가져오기
        const response = await axios.get(`https://dummyjson.com/posts/${id}`);
        setPost(response.data);
        setError(null);
      } catch (err) {
        console.error("게시글 정보를 불러오는데 실패했습니다:", err);
        setError("게시글 정보를 불러올 수 없습니다.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
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

  if (error || !post) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center py-8">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            {error || "게시글을 찾을 수 없습니다"}
          </h2>
          <Link 
            to={PATHS.POSTS}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            게시글 목록으로 돌아가기
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
          ← 게시글 목록으로 돌아가기
        </Link>
      </div>

      {/* 게시글 정보 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            #{post.id}
          </span>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {post.title}
        </h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed">
            {post.body}
          </p>
        </div>
        
        {/* 태그들 */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">태그</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* 게시글 메타 정보 */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
            <div>
              <span className="font-semibold">작성자:</span> User {post.userId}
            </div>
            <div>
              <span className="font-semibold">조회수:</span> {post.reactions || 0}
            </div>
            <div>
              <span className="font-semibold">상태:</span> 
              <span className="ml-1 text-green-600">게시됨</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}