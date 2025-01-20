import { useBlogPosts } from "@/data/useBlogPosts";
import React from "react";

function ButtonCat({ categories }) {
  const { setCategory, setPage, setPosts, setHasMore, category } =
    useBlogPosts();

  return (
    <div className="hidden md:flex space-x-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => {
            if (category !== cat) {
              setCategory(cat);
              setPage(1);
              setPosts([]);
              setHasMore(true);
            }
          }}
          className={`px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium ${
            category === cat ? `bg-[#DAD6D1]` : `bg-none`
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default ButtonCat;
