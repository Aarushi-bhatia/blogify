import React from "react";
import Blog from "./Blog";

const Hero = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="p-4 text-white"><span className="bg-slate-700 p-2 rounded-xl mx-2">All</span>
      <span className="bg-slate-700 p-2 rounded-xl mx-2">Web Development</span>
      <span className="bg-slate-700 p-2 rounded-xl mx-2">Software Engineering</span>
      <span className="bg-slate-700 p-2 rounded-xl mx-2">Machine learning</span>
      <span className="bg-slate-700 p-2 rounded-xl mx-2">Blockchain</span></div>
      
      <Blog />
    </div>
  );
};

export default Hero;
