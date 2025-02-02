import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';
import Hero from './components/Hero/Hero';
import AddBlog from './components/AddBlog/AddBlog';

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
