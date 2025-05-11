import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon} from '@fortawesome/free-solid-svg-icons'

function BasicNavbar({ scrollToSection, refs }) {
  const [scroll, setScroll] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Navbar expand="lg" className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scroll ? "bg-blend-lighten shadow-md" : "bg-blend-lighten"}`} style={{ position: "fixed", top: 0, left: 0 }}>
      <Container className="gap-4">
        <Navbar.Brand as={Link} to="/" className="font-semibold font-Courgette mt-2"><span className="text-4xl bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-300 text-transparent bg-clip-text">SoftSell   .</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-4 text-blue-300">
            <Nav.Link onClick={() => scrollToSection(refs.heroRef)}><span className="text-indigo-300 font-semibold text-xl">Home</span></Nav.Link>
            <Nav.Link onClick={() => scrollToSection(refs.ProcessRef)}><span className="text-indigo-300 font-semibold text-xl">Product</span></Nav.Link>
            <Nav.Link onClick={() => scrollToSection(refs.contactRef)}><span className="text-indigo-300 font-semibold text-xl">ContactUs</span></Nav.Link>
            
          </Nav>
          <button onClick={toggleDarkMode} variant="outline-primary" className="ml-4 text-2xl text-blue-300 bg-transparent border-0">
            {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;