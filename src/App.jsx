import './App.css';
import Welcome from './components/welcome';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div>
        {/* <Welcome /> */}
        <HomePage />
        <Navbar />
      </div>
    </>
  );
}

export default App;
