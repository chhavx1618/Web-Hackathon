import React, { useEffect } from 'react';
import './Placement.css'; // Add this CSS for styles
import SunitaImage from '../image/sunita.png';
import image2 from '../image/2.png';
import image3 from '../image/3.png';

const Placement = () => {
  const teamMembers = [
    {
      name: 'Sunita Tiwari',
      position: 'T&P Head',
      description: 'Recommender Systems, Location Based Services, Data Mining',
      image: SunitaImage,
      socialLinks: {
        facebook: '#',
        twitter: '#',
        google: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Holly Vincenzini',
      position: 'Media Partner',
      description: 'On the other hand, We denounce ut with righteous indignation and dislike men who are so beguiled and demoralized.',
      image: image2,
      socialLinks: {
        facebook: '#',
        twitter: '#',
        pinterest: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Ramirez Minita',
      position: 'Graphic Design',
      description: 'On the other hand, We denounce ut with righteous indignation and dislike men who are so beguiled and demoralized.',
      image: image3,
      socialLinks: {
        facebook: '#',
        twitter: '#',
        pinterest: '#',
        linkedin: '#'
      }
    }
  ];

  useEffect(() => {
    // Adding a fade-in effect for team members when the component mounts
    const teamCards = document.querySelectorAll('.team-member');
    teamCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('fade-in');
      }, index * 300); // Delay the appearance for each card
    });
  }, []);

  return (
    <>
      <div id="team-section">
        <div className="container">
          <div className="theme-title">
            <h2>Meet our Team</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
            </p>
          </div>

          <div className="team-member-wrapper">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <div className="team-img">
                  <img
                    className="team-image"
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="team-overlay">
                    <h4>{member.name}</h4>
                    <span>{member.position}</span>
                    <p>{member.description}</p>
                  </div>
                </div>
                <div className="member-info">
                  <h6>{member.name}</h6>
                  <p>{member.position}</p>
                  <ul>
                    {Object.entries(member.socialLinks).map(([key, link]) => (
                      link && (
                        <li key={key}>
                          <a href={link} className="social-icon">
                            <i className={`fa fa-${key}`} aria-hidden="true"></i>
                          </a>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="skill-section">
        <div className="container">
          <div className="skills-container">
            {['2017', '2018', 'CSE 2018', 'ECE 2018', 'MAE 2018'].map((year, index) => (
              <div key={index} className="skill-bar">
                <div className="skill-text">
                  <span>{year}</span>
                </div>
                <div className="progress-bar" style={{ width: `${[50, 80, 82, 76, 70][index]}%` }}>
                  <span className="progress-text">{`${[50, 80, 82, 76, 70][index]}%`}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Placement;
