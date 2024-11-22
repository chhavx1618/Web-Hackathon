import React from 'react';
//import './main_style.css'; // Import your CSS file
import logo from '../assets/logo.png'; // Update the path to your assets
import favicon from '../image/favicon.ico';
import campus1 from '../image/cm1.jfif';
import campus2 from '../image/cm2.jfif';
import campus3 from '../image/cm3.jfif';
import canteen from '../image/canteen.jfif';
import auditorium from '../image/auditorium.jfif';
import hostel from '../image/hostel.jfif';

const Courses = () => {
  const showMenu = () => {
    const navLinks = document.getElementById('navLinks');
    navLinks.style.right = '0';
  };

  const hideMenu = () => {
    const navLinks = document.getElementById('navLinks');
    navLinks.style.right = '-200px';
  };

  return (
    <div>
      {/* Head Metadata */}
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta
          name="description"
          content="The Gokul Global University at Sidhpur provides one of the earliest forms of technical studies, which has been vital in setting up the standard of brilliance."
        />
        <meta name="keywords" content="Gokul Global University, College" />
        <meta name="author" content="Jaydipsinh Solanki" />
        <title>Gokul Global University</title>
        <link rel="shortcut icon" href={favicon} type="image/svg+xml" />
      </head>

      {/* Header Section */}
      <section className="header">
        <nav>
          <a href="index.html">
            <img src={logo} id="logo-img" alt="Logo" />
          </a>
          <div className="nav-links" id="navLinks">
            <span className="icon" onClick={hideMenu}>
              &#10005;
            </span>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="Admission_page.html">Admission</a>
              </li>
              <li>
                <a href="#course_call">Course</a>
              </li>
              <li>
                <a href="fees_page.html">Fees</a>
              </li>
              <li>
                <a href="Contact_page.html">Contact</a>
              </li>
            </ul>
          </div>
          <span className="icon" onClick={showMenu}>
            &#9776;
          </span>
        </nav>
        <div className="text-box">
          <h1>Gokul BCA College</h1>
          <p>
            The Gokul Global University at Sidhpur provides one of the earliest
            forms of technical studies,
            <br />
            which has been vital in setting up the standard of brilliance.
          </p>
          <a href="Admission_page.html" className="hero-btn">
            Admission Open
          </a>
        </div>
      </section>

      {/* Courses Section */}
      <section className="course" id="course_call">
        <h1>Courses We Offer</h1>
        <p>
          We offer three of the best computer science courses for students at
          Gokul Global University.
        </p>
        <div className="row">
          <div className="course-col">
            <h2>BCA</h2>
            <p>
              The BCA course is a full-time three-year (six semesters)
              Bachelor’s Degree in Computer Application. The degree helps
              students set up a sound academic base for an advanced career in
              Computer Applications.
            </p>
          </div>
          <div className="course-col">
            <h2>BSC-IT</h2>
            <p>
              BSc (Bachelor of Science) in IT is primarily about storing,
              processing, securing, and managing information. This degree
              focuses on subjects such as software, databases, and networking.
            </p>
          </div>
          <div className="course-col">
            <h2>BSC CA & IT</h2>
            <p>
              The Bachelor of Science in (CS & IT) is an undergraduate degree
              course in computer applications for a duration of 3 years. The
              field relates to the design, development, and use of computer
              applications.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section className="campus">
        <h1>Our Campus</h1>
        <div className="row">
          <div className="campus-col">
            <img src={campus1} alt="Environment" />
            <div className="layer">
              <h3>Environment</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src={campus2} alt="Community" />
            <div className="layer">
              <h3>Community</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src={campus3} alt="Education" />
            <div className="layer">
              <h3>Education</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities">
        <h1>Our Facilities</h1>
        <p>Facilities provided for students by Gokul Global University</p>
        <div className="row">
          <div className="facilities-col">
            <img src={canteen} alt="Canteen" />
            <h3>Canteen</h3>
            <p>
              The objective of the canteen and meal service is to protect by
              reducing the risk of foodborne illness, with proper sanitary
              conditions.
            </p>
          </div>
          <div className="facilities-col">
            <img src={auditorium} alt="Auditorium" />
            <h3>Auditorium</h3>
            <p>
              The college is having a huge indoor auditorium with a
              professionally-deployed acoustic system and a seating capacity of
              about 200 people.
            </p>
          </div>
          <div className="facilities-col">
            <img src={hostel} alt="Hostel" />
            <h3>Hostel</h3>
            <p>
              The hostel consists of a separate mess, administrative office, and
              warden quarter in addition to well-furnished rooms.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="footer">
        <h4>About Us</h4>
        <p>
          The Gokul Global University at Sidhpur provides one of the earliest
          forms of technical studies, which has been vital in setting up the
          standard of brilliance.
        </p>
        <p id="copyright">Made By &#10084; Jaydipsinh Solanki</p>
      </section>
    </div>
  );
};

export default Courses;
