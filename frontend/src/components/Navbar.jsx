import React, { useState } from "react";
import { NotebookPen, Search, User } from "lucide-react";
import axios from "axios";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleForm = () => setIsSignup(!isSignup);

  const handleChange =(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(isSignup?"Signing Up..": "Logging In...", formData);
    try {
      const url = isSignup ? "http://localhost:5000/api/users/register" : "http://localhost:5000/api/users/login";
      const data = await axios.post(url, formData);
      localStorage.setItem("token", data.data.token);
      toggleModal();
      console.log("Success", data)
    } catch (error) {
      console.log("Error", error.response?.data?.message || error.message);
    }
  }

  return (
    <div className="sticky top-0 p-8 pt-6 lg:pt-4 font-semibold text-sm leading-6 flex items-center justify-between gap-3 text-white">
      <div className="flex gap-6 items-center ">
        <h1 className="text-2xl font-bold font-serif">Blogify</h1>
        <div className="bg-transparent hover:bg-slate-700 p-2 rounded-xl mx-2 flex gap-2">
          <Search />
          <input className="bg-transparent" placeholder="Search"></input>
        </div>
      </div>
      <div className="flex items-center text-slate-300">
        <ul className="flex items-center gap-x-8">
          <li className="flex gap-1">
            <NotebookPen className="text-white" />
            <a href="/add-blog" className="text-white">
              Add Blog
            </a>
          </li>
          <li onClick={toggleModal} className="cursor-pointer flex gap-1 items-center">
            {/* <img
              src="/default_avatar.png"
              alt="default-img"
              className="w-8 h-auto"
            /> */}
            <User className="text-white" />
            <span>Login / Signup</span>
          </li>
        </ul>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-6 rounded-lg w-96 relative">
            <button className="absolute top-2 right-2 text-white" onClick={toggleModal}>✕</button>
            <h2 className="text-xl font-bold text-white mb-4">{isSignup? "Signup" : "Login"}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {isSignup && (
                <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="p-2 rounded bg-gray-800 text-white"
                required
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 rounded bg-gray-800 text-white"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 rounded bg-gray-800 text-white"
              required
            />
            <button type="submit" className="bg-blue-600 p-2 rounded text-white">
              {isSignup ? "Sign Up" : "Login"}
            </button>
            </form>
            <p className="text-white text-sm mt-4 cursor-pointer" onClick={toggleForm}>{isSignup ? "Already have an account? Login" : "New here? Signup"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
