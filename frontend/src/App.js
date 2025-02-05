import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Hero from "./components/Hero";
import AddBlog from "./components/AddBlog";

function App() {
  return (
    <Router>
      <div className="bg-black">
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Hero />} />
          <Route path="/add-blog" element={<AddBlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
