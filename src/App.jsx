import './App.css';
import Navbar from './componenets/Navbar';
import Into from './componenets/Into';
import Footer from './componenets/footer';
import Portfolio from './componenets/Portfolio';
import Services from './componenets/Services';
import Aboutme from './componenets/Aboutme';
import ContactForm from './componenets/ContactForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useRef } from 'react';

function App() {
  const contactFormRef = useRef(null);
  return (
    <>
      <Router>
        <Navbar contactFormRef={contactFormRef} />
        <Into />
        <Aboutme />
        <Services />
        <Portfolio />
        
        <div ref={contactFormRef}>
          <Routes>
            <Route path="/" element={<ContactForm />} />
          </Routes>
        </div>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
