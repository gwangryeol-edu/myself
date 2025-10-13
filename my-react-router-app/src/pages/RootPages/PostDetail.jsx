import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// 주소에 있는 경로 파라미터를 불러오는 훅(hook)
// /posts/:postId -> :postId 부분이 경로 파라미터
import { useParams } from "react-router-dom";


export default function PostDetail() {
  // ✅ URL 경로에서 postId를 추출 (예: /posts/3 → postId = "3")
  const { postId } = useParams();

  // ✅ 게시글 데이터 상태
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ postId가 변경될 때마다 실행
  useEffect(() => {
    // ✅ 게시글 상세 정보 요청 함수
    async function fetchPostDetail() {
      try {
        setLoading(true); // 로딩 시작
        setError(""); // 이전 에러 초기화

        // ✅ DummyJSON의 특정 게시글 조회 API
        // https://dummyjson.com/posts/:id
        const res = await axios.get(`https://dummyjson.com/posts/${postId}`);

        // ✅ 응답 데이터 저장
        setPost(res.data);
      } catch (err) {
        // ✅ 에러 발생 시 메시지 저장
        setError(err.message || "게시글을 불러오지 못했습니다.");
      } finally {
        // ✅ 로딩 종료
        setLoading(false);
      }
    }

    // ✅ 함수 실행
    fetchPostDetail();
  }, [postId]);

  // ✅ 로딩 중일 때
  if (loading) return <p>Loading post details...</p>;

  // ✅ 에러 발생 시
  if (error)
    return <p style={{ color: "crimson" }}>Error: {error}</p>;

  // ✅ 데이터가 없을 때
  if (!post) return <p>게시글을 찾을 수 없습니다.</p>;

  // ✅ 게시글 상세 화면 렌더링
  return (
    <div style={{ padding: "1rem" }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "gray" }}>
        💬 댓글 수: {post.reactions}
      </div>

      {/* ✅ 목록으로 돌아가기 버튼 */}
      <Link
        to="/posts"
        style={{
          display: "inline-block",
          marginTop: "1rem",
          color: "blue",
          textDecoration: "underline",
        }}
      >
        ← 게시글 목록으로 돌아가기
      </Link>
    </div>
  );
}