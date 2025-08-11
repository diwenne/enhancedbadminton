import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Coaches from './pages/Coaches';
import CourtRentals from './pages/CourtRentals';
import Contact from './pages/Contact';

// Import the new training pages
import GroupLessons from './pages/training/GroupLessons';
import PrivateCoaching from './pages/training/PrivateCoaching';
import Programs from './pages/training/Programs';
import Training from './pages/Training.tsx';


function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/rentals" element={<CourtRentals />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Main Training Page Route */}
          <Route path="/training" element={<Training />} />

          {/* New Nested Training Routes */}
          <Route path="/training/groups" element={<GroupLessons />} />
          <Route path="/training/privates" element={<PrivateCoaching />} />
          <Route path="/training/programs" element={<Programs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
