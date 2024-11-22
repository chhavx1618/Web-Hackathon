import React from 'react';
import './project.css'

const Project = () => {
  return (
    <>

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
                  src="./homepage.png"
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
