import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'; // Adjust the path if necessary
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Resources from './Resources';
import Footer from './Footer.jsx';



// Suggested code may be subject to a license. Learn more: ~LicenseLog:3601156591.
function App() {
  // Suggested code may be subject to a license. Learn more: ~LicenseLog:2112672262.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3099417059.
  return (
    <div className="container-fluid">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      
    </BrowserRouter>
    </div>
  );
;
}


export default App
