import axios from "axios";
import React, { useState } from "react";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState(null);

  const handleImageChange = (e) => {
    setImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Retrieve token

    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("content", content);
    formData.append("img", img);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Blog created:", res.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className="h-screen max-w-3xl mx-auto items-center justify-center">
      <h1 className="text-white">Add Blog</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          className="w-full my-2 p-2 rounded bg-gray-700"
        />
        <input
          type="text"
          name="subtitle"
          placeholder="SubTitle"
          onChange={(e) => setSubtitle(e.target.value)}
          value={subtitle}
          required
          className="w-full my-2 p-2 rounded bg-gray-700"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
          className="w-full my-2 p-2 rounded cursor-pointer bg-gray-700"
        />
        <textarea
          name="content"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full p-2 my-2 rounded bg-gray-700 h-40"
        ></textarea>
        <button
          type="submit"
          className="w-full my-2 bg-white text-black p-2 rounded"
        >Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
