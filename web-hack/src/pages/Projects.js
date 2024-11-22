import React, { useState } from 'react';
import './project.css';

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const projects = [
    {
      id: 1,
      name: 'Homepage',
      description: 'A responsive homepage created using HTML, CSS, and JavaScript.',
      category: 'web',
      link: 'https://vishal2612200.github.io/Homepage/',
      sourceCode: 'https://github.com/vishal2612200/Homepage',
    },
    {
      id: 2,
      name: 'Image Editor',
      description: 'An image editor built using JavaScript that allows users to edit images.',
      category: 'webd',
      link: 'https://vishal2612200.github.io/Image-editor/',
      sourceCode: 'https://github.com/vishal2612200/Image-editor',
    },
    {
      id: 3,
      name: 'Machine Learning Model',
      description: 'A simple machine learning model that predicts housing prices using scikit-learn.',
      category: 'om',
      link: 'https://github.com/vishal2612200/ML-Model',
      sourceCode: 'https://github.com/vishal2612200/ML-Model',
    },
    {
      id: 4,
      name: 'Hybrid Mobile App',
      description: 'A cross-platform hybrid mobile app built using React Native.',
      category: 'dmedia',
      link: 'https://github.com/vishal2612200/Hybrid-App',
      sourceCode: 'https://github.com/vishal2612200/Hybrid-App',
    },
    {
      id: 5,
      name: 'Android Notes App',
      description: 'An Android app for managing and organizing personal notes.',
      category: 'support',
      link: 'https://github.com/vishal2612200/Android-Notes-App',
      sourceCode: 'https://github.com/vishal2612200/Android-Notes-App',
    },
  ];

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <section className="inner-page-banner">
        <div className="opacity">
          <div className="container">
            <h2>G B PANT ENGINEERING COLLEGE</h2>
            <ul>
              <li><a href="index.html">ABOUT US</a></li>
              <li>: affiliated by IPU</li>
            </ul>
          </div>
        </div>
      </section>

      <div id="project-section">
        <div className="container">
          <div className="theme-title">
            <h2>OUR AWESOME PROJECTS</h2>
            <p>
              Every year, lots of projects are developed, but many don't get the chance to be published on the college platform.
              This page is totally dedicated to those students' projects.
            </p>
            <p>Explore a few of them below \|/</p>
          </div>

          <div className="project-menu">
            <ul>
              <li
                className={`filter tran3s ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => handleFilter('all')}
              >
                All
              </li>
              <li
                className={`filter tran3s ${selectedCategory === 'web' ? 'active' : ''}`}
                onClick={() => handleFilter('web')}
              >
                Web Design
              </li>
              <li
                className={`filter tran3s ${selectedCategory === 'photo' ? 'active' : ''}`}
                onClick={() => handleFilter('photo')}
              >
                Art Society
              </li>
              <li
                className={`filter tran3s ${selectedCategory === 'webd' ? 'active' : ''}`}
                onClick={() => handleFilter('webd')}
              >
                Web Development
              </li>
              <li
                className={`filter tran3s ${selectedCategory === 'om' ? 'active' : ''}`}
                onClick={() => handleFilter('om')}
              >
                Machine Learning
              </li>
              <li
                className={`filter tran3s ${selectedCategory === 'dmedia' ? 'active' : ''}`}
                onClick={() => handleFilter('dmedia')}
              >
                Hybrid Development
              </li>
              <li
                className={`filter tran3s ${selectedCategory === 'support' ? 'active' : ''}`}
                onClick={() => handleFilter('support')}
              >
                Android Development
              </li>
            </ul>
          </div>

          <div className="project-gallery clear-fix">
            {filteredProjects.map((project) => (
              <div key={project.id} className={`mix grid-item ${project.category}`}>
                <div className="single-img">
                  <div className="project-placeholder">
                    <h5>{project.name}</h5>
                    <p>{project.description}</p>
                  </div>
                  <div className="opacity">
                    <div className="border-shape">
                      <div>
                        <ul>
                          <li>
                            <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                              Source Code
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
