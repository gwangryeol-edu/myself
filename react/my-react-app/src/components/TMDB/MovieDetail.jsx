import axios from "axios";
import React, { useEffect, useState } from "react";

const BASE_URL = `https://api.themoviedb.org/3/`;
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

export default function MovieDetail() {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const config = {
        method: "GET",
        url: `${BASE_URL}/movie/2`,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          language: "ko-KR",
          page: 1,
        },
      };

      const res = await axios(config);
      console.log(res.data);
      // 콜솔로 res 받은거 찍어보고 출력된거 보고
      setDetail(res.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>인기 영화 목록</h1>
      <p>{detail.title}</p>
    </div>
  );
}
