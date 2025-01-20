import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export const useBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("Highlight");
  const [input, setInput] = useState("");
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = (async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        category === "Highlight"
          ? `https://blog-post-project-api.vercel.app/posts?&page=${page}&keyword=${input}`
          : `https://blog-post-project-api.vercel.app/posts?&page=${page}&category=${category}&keyword=${input}`
      );
      setLoading(false);
      setSearch(response.data.posts);
      console.log(response)
      if (page === 1) {
        setPosts([...response.data.posts]);
      } else {
        setPosts((postPrev) => {
          const updatedPosts = [...postPrev, ...response.data.posts];
          return updatedPosts;
        });
      }
      if (response.data.currentPage >= response.data.totalPages) {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  });

  useEffect(() => {
    console.log(`before`, category)
    fetchPosts();
    console.log(`after`, category)
  }, [category, input, page]);

  return {
    posts,
    page,
    search,
    input,
    hasMore,
    loading,
    category,
    setCategory,
    setInput,
    setPage,
    setHasMore,
    setPosts,
  };
};
