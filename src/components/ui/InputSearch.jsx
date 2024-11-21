import { useEffect } from "react";
import { useBlogPosts } from "@/data/useBlogPosts";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

export function InputSearch({
  setCategory,
  setInput,
  input,
  search,
  setHasMore,
  setPosts,
  setPage,
  category
}) {
  // const { category,posts} = useBlogPosts(); ใช้ โค๊ดนี้แล้ว bg ปุ่มไม่เปลี่ยนสี
  // console.log(`This is from post`,posts)
  // useEffect(() => {
  //   console.log(`Category changed to ${category}`);
  // }, [category]);
  const options = [
    { value: "Highlight", label: "Highlight" },
    { value: "Cat", label: "Cat" },
    { value: "Inspiration", label: "Inspiration" },
    { value: "General", label: "General" },
  ];
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const navigate = useNavigate();

  const handleCategory = (option) => {
    setCategory(option.value);
    setHasMore(true);
    setPosts([]);
    setPage(1);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleSearchClick = (postId) => {
    navigate(`/post/${postId}`);
    setInput("");
  };

  return (
    <section className="latest-articles">
      <h3 className="header px-4 pb-4 font-semibold text-2xl">
        Latest articles
      </h3>
      <div className="md:flex">
        <div className="article-tabbar w-full h-[80px] justify-between items-center bg-[#EFEEEB] rounded-xl px-10 hidden md:flex">
          <div className="hidden md:flex space-x-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  console.log(`Changing category from ${category} to ${cat}`);
                  setCategory(cat);
                  setPage(1);
                  setPosts([]);
                  setHasMore(true);
                }}
                className={`px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium ${
                  category === cat ? "bg-[#DAD6D1]" : "bg-none"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <form className="flex flex-col gap-4 p-4 bg-secondary md:w-3/6">
          <label htmlFor="searchInput" className="relative">
            <input
              className="p-3 w-full rounded-xl border border-third placeholder-fourth placeholder-opacity-95 placeholder:font-medium"
              type="text"
              id="serach"
              name="serach"
              placeholder="Search"
              onChange={handleSearch}
              value={input}
            />
            <Search
              className="absolute left-[19.4rem] top-4 md:left-[330px]"
              color="#7b7874"
              size={20}
            />
            {input && search.length > 0 && (
              <div className="absolute z-10 w-full mt-2 bg-background rounded-sm shadow-lg p-1">
                <ul>
                  {search.map((post, index) => (
                    <li
                      key={index}
                      onClick={() => handleSearchClick(post.id)}
                      className="text-start px-4 py-2 block w-full text-sm text-foreground hover:bg-[#EFEEEB] hover:text-muted-foreground hover:rounded-sm cursor-pointer"
                    >
                      {post.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </label>
          <label
            htmlFor="categoryDropdown"
            className="flex flex-col gap-1 text-fourth font-medium relative md:hidden"
          >
            Category
            <Select options={options} onChange={handleCategory} />
          </label>
        </form>
      </div>
    </section>
  );
}
