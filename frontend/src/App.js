import './styles.css'
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <>
    <div className="bg-black">
      <Navbar />
      <SignUp />
    </div>
    </>
  );
}

export default App;
