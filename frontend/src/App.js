import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <Router>
      <div className="bg-black">
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
