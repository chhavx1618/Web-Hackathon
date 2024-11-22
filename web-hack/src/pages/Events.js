import React from "react";
import "./../App.css"; // Import your CSS styles

const Header = () => (
  <header className="theme-main-header">
    <div className="container">
      <a href="/" className="logo float-left tran4s">
        <img src="http://www.gbpec.edu.in/assets/images/logo_new.png" alt="Logo" />
      </a>
      <nav className="navbar float-right theme-main-menu">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          Menu
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="#service-section">NOTICES</a></li>
            <li className="dropdown-holder active"><a href="/events">EVENTS</a></li>
            <li><a href="/projects">PROJECTS</a></li>
            <li>
              <a href="#students-corner">STUDENTS CORNER</a>
              <ul className="sub-menu">
                <li><a href="#campus" className="tran3s">Campus</a></li>
                <li><a href="#activities" className="tran3s">Activities</a></li>
                <li><a href="#societies" className="tran3s">Societies</a></li>
              </ul>
            </li>
            <li><a href="/placements">PLACEMENTS</a></li>
            <li><a href="#academics">ACADEMICS</a></li>
            <li>
              <a href="#blog-section">BLOG</a>
              <ul className="sub-menu">
                <li><a href="#gbpec" className="tran3s">GBPEC</a></li>
              </ul>
            </li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

const Banner = () => (
  <section className="inner-page-banner">
    <div className="opacity">
      <div className="container">
        <h2>G B PANT ENGINEERING COLLEGE</h2>
        <ul>
          <li><a href="/">ABOUT US</a></li>
          <li>: affiliated by IPU</li>
        </ul>
      </div>
    </div>
  </section>
);

const Event = () => (
  <section className="section-event">
    <div className="wrap-slick2">
      <div className="slick2">
        <EventItem
          title="Wines during specific nights"
          time="08:00 PM Tuesday - 21 November 2018"
          description="Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia"
          backgroundImage="images/bg-event-01.jpg"
        />
        <EventItem
          title="Special Event"
          time="08:00 PM Tuesday - 21 November 2018"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
          backgroundImage="images/bg-event-02.jpg"
        />
      </div>
    </div>
  </section>
);

const EventItem = ({ title, time, description, backgroundImage }) => (
  <div className="item-slick2" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="wrap-content-slide2 p-t-115 p-b-208">
      <div className="container">
        <div className="title-event t-center m-b-52">
          <span className="tit2 p-l-15 p-r-15">Upcoming</span>
          <h3 className="tit6 t-center p-l-15 p-r-15 p-t-3">Events</h3>
        </div>
        <div className="blo2 flex-w flex-str flex-col-c-m-lg">
          <a href="#" className="wrap-pic-blo2" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="time-event size10 txt6 effect1">
              <span className="txt-effect1 flex-c-m t-center">{time}</span>
            </div>
          </a>
          <div className="wrap-text-blo2 flex-col-c-m p-l-40 p-r-40 p-t-45 p-b-30">
            <h4 className="tit7 t-center m-b-10">{title}</h4>
            <p className="t-center">{description}</p>
            <a href="#" className="txt4 m-t-40">
              View Details
              <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const App = () => (
  <div className="main-page-wrapper">
    <Header />
    <Banner />
    <Event />
    {/* Other components go here */}
  </div>
);

export default App;
