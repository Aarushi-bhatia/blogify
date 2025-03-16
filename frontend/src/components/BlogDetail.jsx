import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setBlog(res.data);
      } catch (error) {
        console.log("Error fetching blog");
      }
    };
    fetchBlog();
  }, [id]);

  if(!blog) return <div className="text-white">Loading...</div>
  return (
    <div className="max-w-3xl mx-auto p-5">
      
        <h1 className="text-white text-4xl font-bold">{blog.title}</h1>
        <h2 className="text-white text-xl mb-3">{blog.subtitle}</h2>
        <img src={blog.img} alt={blog.title} className="w-full rounded-lg mb-4 " />
        <p className="text-white text-lg">{blog.content}</p>
     
    </div>
  );
};

export default BlogDetail;
