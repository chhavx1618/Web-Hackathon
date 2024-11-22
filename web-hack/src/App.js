import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
//import Admission from './pages/Admission';
//import Undergraduate from './pages/Undergraduate';
//import Graduate from './pages/Graduate';
//import International from './pages/International';
//import Academics from './pages/Academics';
//import Departments from './pages/Departments';
import Courses from './pages/Courses';
//import Majors from './pages/Majors';
//import News from './pages/News';
//import Resources from './pages/Resources';
//import Alumni from './pages/Alumni';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/admission" element={<Admission />} />
        <Route path="/undergraduate" element={<Undergraduate />} />
        <Route path="/graduate" element={<Graduate />} />
        <Route path="/international" element={<International />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/departments" element={<Departments />} /> */}
        <Route path="/courses" element={<Courses />} />
        {/* <Route path="/majors" element={<Majors />} />
        <Route path="/news" element={<News />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/alumni" element={<Alumni />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
