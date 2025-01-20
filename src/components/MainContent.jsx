import BlogCard from "./ui/BlogCard";
import { InputSearch } from "./ui/InputSearch";
import { useBlogPosts } from "@/data/useBlogPosts";
import ClipLoader from "react-spinners/ClipLoader";

export function MainContent() {
  const {
    posts,
    search,
    input,
    hasMore,
    loading,
    page,
    category,
    setCategory,
    setInput,
    setPage,
    setHasMore,
    setPosts,
  } = useBlogPosts();

  console.log(`This is category`,category)
  return (
    <section className="main mt-5">
      <InputSearch
        setCategory={setCategory}
        category={category}
        setInput={setInput}
        input={input}
        search={search}
        setHasMore={setHasMore}
        setPosts={setPosts}
        setPage={setPage}
      />
      <main className="container flex flex-col mb-10">
        <div className="content p-4 flex flex-col gap-12 md:grid md:grid-cols-2 md:max-w-[1200px] mb-5">
          {posts &&
            posts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                image={post.image}
                author={post.author}
                date={post.date}
                description={post.description}
                category={post.category}
                id={post.id}
              />
            ))}
        </div>
        {hasMore && (
          <button onClick={() => setPage(page + 1)}>
            {loading ? (
              <div className="flex flex-col gap-2">
                <div>
                  <ClipLoader />
                </div>
                ...Loading
              </div>
            ) : (
              <p className="view-more text-center font-semibold underline mt-0 ">
                View more
              </p>
            )}
          </button>
        )}
      </main>
    </section>
  );
}
