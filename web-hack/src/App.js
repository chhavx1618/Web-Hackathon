import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import StudentPortal from './pages/StudentPortal';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
//import Admission from './pages/Admission';
//import Undergraduate from './pages/Undergraduate';
//import Graduate from './pages/Graduate';
//import International from './pages/International';
import Academics from './pages/Academics';
//import Departments from './pages/Departments';
import Courses from './pages/Courses';
//import Majors from './pages/Majors';
//import News from './pages/News';
//import Resources from './pages/Resources';
//import Alumni from './pages/Alumni';
import Projects from './pages/Projects';
import Notices from './pages/Notices';
import Placement from './pages/Placement';
import Curriculum from './pages/Curriculum';
import ContactForm from './pages/ContactForm';
import AdmissionApp from './pages/AdmissionApp';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Notices" element={<Notices />} />
        <Route path="/StudentPortal" element={<StudentPortal />} />
        <Route path="/Placement" element={<Placement />} />
        <Route path="/Curriculum" element={<Curriculum />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />

        {/* <Route path="/admission" element={<Admission />} />
        <Route path="/undergraduate" element={<Undergraduate />} />
        <Route path="/graduate" element={<Graduate />} />
        <Route path="/international" element={<International />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/departments" element={<Departments />} /> */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/AdmissionApp" element={<AdmissionApp />} />
        <Route path="/Academics" element={<Academics />} />
        {/* <Route path="/majors" element={<Majors />} />
        <Route path="/news" element={<News />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/alumni" element={<Alumni />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
