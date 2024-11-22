import React from 'react';

const Project = () => {
  return (
    <>
      <header className="theme-main-header">
        <div className="container">
          <a href="index.html" className="logo float-left tran4s">
            <img
              src="http://www.gbpec.edu.in/assets/images/logo_new.png"
              alt="Logo"
            />
          </a>

          <nav className="navbar float-right theme-main-menu">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                Menu
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="index.html">HOME</a></li>
                <li><a href="about.html">ABOUT</a></li>
                <li><a href="notice.html">NOTICES</a></li>
                <li><a href="agenda/index.html">EVENTS</a></li>
                <li className="active"><a href="projects.html">PROJECTS</a></li>
                <li className="dropdown-holder">
                  <a href="#">STUDENTS CORNER</a>
                  <ul className="sub-menu">
                    <li><a href="campus.html" className="tran3s">Campus</a></li>
                    <li><a href="gallery.html" className="tran3s">Activities</a></li>
                    <li><a href="socities.html" className="tran3s">Socities</a></li>
                  </ul>
                </li>
                <li><a href="placements.html">PLACEMENTS</a></li>
                <li className="dropdown-holder">
                  <a href="academics.html">ACADEMICS</a>
                  <ul className="sub-menu">
                    <li><a href="CSEteachers.html" className="tran3s">CSE Faculty</a></li>
                    <li><a href="#" className="tran3s">ECE Faculty</a></li>
                    <li><a href="#" className="tran3s">MAE Faculty</a></li>
                  </ul>
                </li>
                <li><a href="contact.html">CONTACT</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <section className="inner-page-banner">
        <div className="opacity">
          <div className="container">
            <h2>G B PANT ENGINEERING COLLEGE</h2>
            <ul>
              <li><a href="index.html">ABOUT US</a></li>
              <li>:affiliated by IPU</li>
            </ul>
          </div>
        </div>
      </section>

      <div id="project-section">
        <div className="container">
          <div className="theme-title">
            <h2>OUR AWESOME PROJECTS</h2>
            <p>
              Every year lots of project are developed but don,t get chance to publish on their college platform.
              Here This page is totally dedicated to that students' projects.
            </p>
            <p>Few of them are shown below \|/</p>
          </div>

          <div className="project-menu">
            <ul>
              <li className="filter active tran3s" data-filter="all">All</li>
              <li className="filter tran3s" data-filter=".web">Web Design</li>
              <li className="filter tran3s" data-filter=".photo">Art Society</li>
              <li className="filter tran3s" data-filter=".webd">Web Development</li>
              <li className="filter tran3s" data-filter=".om">Machine Learning</li>
              <li className="filter tran3s" data-filter=".dmedia">Hybrid Development</li>
              <li className="filter tran3s" data-filter=".support">Android Development</li>
            </ul>
          </div>

          <div className="project-gallery clear-fix">
            <div className="mix grid-item photo om dmedia">
              <div className="single-img">
                <img
                  style={{ height: '260px', width: '360px' }}
                  src="images/project/homepage.jpg"
                  alt="Image"
                />
                <div className="opacity">
                  <div className="border-shape">
                    <div>
                      <h6>
                        <a href="https://vishal2612200.github.io/Homepage/">Homepage</a>
                      </h6>
                      <ul>
                        <li>Source Code /</li>
                        <li>For output click on Homepage</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mix grid-item web webd dmedia support">
              <div className="single-img">
                <img
                  style={{ height: '260px', width: '360px' }}
                  src="images/project/imageeditor.gif"
                  alt="Image"
                />
                <div className="opacity">
                  <div className="border-shape">
                    <div>
                      <h6>
                        <a href="https://vishal2612200.github.io/Image-editor/">Image Editor</a>
                      </h6>
                      <ul>
                        <li>Source Code/</li>
                        <li>for output click on Homepage</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Repeat similar structure for other projects */}

          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
