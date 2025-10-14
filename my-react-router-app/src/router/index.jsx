// src/router/index.jsx
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/RootPages/Home";
import PostList from "../pages/RootPages/PostList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts", element: <PostList /> },
    ],
  },
]);

export default router;
