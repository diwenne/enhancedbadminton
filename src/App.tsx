import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Coaches from './pages/Coaches';
import CourtRentals from './pages/CourtRentals';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Training from './pages/Training.tsx';


function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/rentals" element={<CourtRentals />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Training Page Route */}
          <Route path="/training" element={<Training />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
