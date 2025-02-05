import React from "react";
import { NotebookPen, Search } from "lucide-react";

const Navbar = () => {
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
          <li>
            <img
              src="/default_avatar.png"
              alt="default-img"
              className="w-8 h-auto"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
