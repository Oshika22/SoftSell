import { useState } from 'react'
import { useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BasicNavbar from './components/Navbar'
import { Process } from './components/Process'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Review from './components/Review'
import { ContactUs } from './components/ContactUs'
import { Footer } from './components/Footer'
function MainContent() {
  const [count, setCount] = useState(0)
  const location = useLocation();
  const heroRef = useRef(null);
  const processRef = useRef(null);
  const featureRef = useRef(null);
  const reviewRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
  {/* routing of section */}
    <BasicNavbar scrollToSection={scrollToSection} refs={{ heroRef, processRef, featureRef, reviewRef, contactRef, footerRef }} />
    <div className='bg-slate-100 dark:bg-slate-950'>
          {location.pathname === '/' && (
        <div className='flex flex-col gap-10'>
          <div ref={heroRef}>
            <Hero/>
          </div>
          <div ref={processRef}>
            <Process />
          </div>
          <Feature />
          <div ref={reviewRef}>
            <Review />
          </div>
          <div ref={contactRef}>
            <ContactUs />
          </div>
        </div>
      )}
      <Footer />
    </div>

    </>
    
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<MainContent />} />
      </Routes>
    </Router>
  );
}
export default App
