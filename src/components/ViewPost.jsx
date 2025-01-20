import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { formatDate } from "./ui/BlogCard";
import { LikeComment } from "./ui/LikeComment";

export function ViewPost() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [likes, setLikes] = useState(0);

  const params = useParams();

  const fetchViewPosts = async () => {
    try {
      const response = await axios.get(
        `https://blog-post-project-api.vercel.app/posts/${params.postId}`
      );
      setTitle(response.data.title);
      setImage(response.data.image);
      setCategory(response.data.category);
      setDescription(response.data.description);
      setAuthor(response.data.author);
      setDate(response.data.date);
      setContent(response.data.content);
      setLikes(response.data.likes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchViewPosts();
  }, []);

  return (
    <section className="content flex justify-center h-full bg-[#f9f8f6]">
      <main className="container flex flex-col  md:gap-12 gap-6">
        <img className="w-full md:rounded-2xl" src={image} alt={title} />
        <div className="main-content flex flex-col justify-center items-center md:items-start md:flex-row md:gap-20 gap-5 p-4">
          <div className="left-content flex flex-col text-start md:gap-12 gap-6">
            <div className="left-content-header flex flex-col gap-4">
              <div className="flex gap-4">
                <span className="category bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2 ">
                  {category}
                </span>
                <span className="date">{formatDate(date)}</span>
              </div>
              <h2 className="title md:text-4xl text-2xl font-semibold">
                {title}
              </h2>
            </div>
            <div className="left-content-descript">
              <p className="description">{description}</p>
              <div className="markdown flex flex-col">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
            <div className="like-copy hidden md:block bg-[#EFEEEB] w-full md:h-[80px] rounded-xl md:my-5">
            <LikeComment likes={likes} />
          </div>
          </div>
          <div className="right-content bg-[#EFEEEB] max-h-[400px] p-6 md:max-w-[305px] rounded-xl">
            <div className="right-content-header">
              <div className="head flex gap-2 max-w-[257px] max-h-[48px]">
                <img
                  className="w-11 h-11 rounded-full mr-2"
                  src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
                  alt="Tomson P."
                />
                <div className="text-start">
                  <p className="author">Author</p>
                  <p className="author text-lg font-semibold">{author}</p>
                </div>
              </div>
              <div className="line">
                <br />
              </div>
              <div className="text-author text-start">
                I am a pet enthusiast and freelance writer who specializes in
                animal behavior and care. With a deep love for cats, I enjoy
                sharing insights on feline companionship and wellness.
                <br />
                <br />
                When i’m not writing, I spends time volunteering at my local
                animal shelter, helping cats find loving homes.
              </div>
            </div>
          </div>
          
        </div>
        <div className="md:hidden like-copy bg-[#EFEEEB] w-full md:h-[80px] h-[152px] rounded-xl my-5">
            <LikeComment likes={likes} />
          </div>
      </main>
    </section>
  );
}
