import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // ← 실제 필요한 import

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await axios.get("https://dummyjson.com/posts");
      setPosts(res.data.posts);
    }
    fetchPosts();
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
