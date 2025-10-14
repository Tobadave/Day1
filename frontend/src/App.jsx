import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landingpage from './pages/Landingpage';
import About from './pages/About';
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
