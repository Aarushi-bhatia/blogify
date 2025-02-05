import React from "react";
import { MessageCircle, ThumbsUp } from 'lucide-react'

const blogs = [
  {
    Title: "The Future of AI: What’s Next?",
    Subtitle:
      "Exploring the latest advancements and challenges in artificial intelligence.",
    img: "/pic.webp"
  },
  {
    Title: "Machine Learning for Beginners",
    Subtitle: "A simple guide to understanding and implementing ML models.",
    img: "/pic2.webp"
  },
  {
    Title: "Top 10 Coding Challenges Every Developer Should Try",
    Subtitle:
      "Sharpen your problem-solving skills with these must-try challenges.",
    img: "/pic3.jpg"
  },
];
const Blog = () => {
  return (
    <div className="h-screen items-center max-w-3xl mx-auto justify-center">
      <div className="flex-row justify-between">
        {blogs.map((blog, index) => (
          
          <div key={index} className="p-5 flex gap-5 justify-between">
            <div>
            <h1 className="text-white text-4xl font-bold mb-2">{blog.Title}</h1>
            <h2 className="text-white">{blog.Subtitle}</h2>
            {/* <div className="flex text-slate-300">
            <ThumbsUp />
            <MessageCircle />
            </div> */}
            </div>
            <img src={blog.img} alt="" className="w-60 h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
