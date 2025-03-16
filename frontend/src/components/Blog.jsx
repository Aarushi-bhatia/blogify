import React, { useEffect, useState } from "react";
import { MessageCircle, ThumbsUp } from 'lucide-react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchBlogs = async () =>{
      try {
        const res = await axios.get("http://localhost:5000/api/posts");
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, [])
  
  return (
    <div className="h-screen items-center max-w-3xl mx-auto justify-center">
      <div className="flex-row justify-between">
        {blogs.map((blog) => (
          
          <div key={blog._id} className="p-5 flex gap-5 justify-between cursor-pointer"
          onClick={()=>navigate(`/blog/${blog._id}`)} >

            <div>
            <h1 className="text-white text-4xl font-bold mb-2">{blog.title}</h1>
            <h2 className="text-white">{blog.subtitle}</h2>
            
            </div>
            <img src={blog.img} alt={blog.title} className="w-60 h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
