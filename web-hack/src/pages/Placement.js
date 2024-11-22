import React from 'react';
//import './Placement.css'; // Make sure to add your CSS here or in a separate file.
import './Placement.css'; // Make sure to add your

const Placement = () => {
  const teamMembers = [
    {
      name: 'Sunita Tiwari',
      position: 'T&P Head',
      description: 'Recommender Systems, Location Based Services, Data Mining',
      image: 'images/team/Sunita_Tiwari_CSE.jpg',
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
      image: 'images/team/2.jpg',
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
      image: 'images/team/3.jpg',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        pinterest: '#',
        linkedin: '#'
      }
    }
  ];

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

        <div className="clear-fix team-member-wrapper">
          {teamMembers.map((member, index) => (
            <div className="float-left" key={index}>
              <div className="single-team-member">
                <div className="img">
                  <img
                    style={{ height: '300px', width: '360px' }}
                    src={member.image}
                    alt="Team Member"
                  />
                  <div className="opacity tran4s">
                    <h4>{member.name}</h4>
                    <span>{member.position}</span>
                    <p>{member.description}</p>
                  </div>
                </div>
                <div className="member-name">
                  <h6>{member.name}</h6>
                  <p>{member.position}</p>
                  <ul>
                    <li>
                      <a href={member.socialLinks.facebook} className="tran3s round-border">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href={member.socialLinks.twitter} className="tran3s round-border">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    {member.socialLinks.google && (
                      <li>
                        <a href={member.socialLinks.google} className="tran3s round-border">
                          <i className="fa fa-google" aria-hidden="true"></i>
                        </a>
                      </li>
                    )}
                    {member.socialLinks.pinterest && (
                      <li>
                        <a href={member.socialLinks.pinterest} className="tran3s round-border">
                          <i className="fa fa-pinterest" aria-hidden="true"></i>
                        </a>
                      </li>
                    )}
                    <li>
                      <a href={member.socialLinks.linkedin} className="tran3s round-border">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div id="skill-section">
    <div className="container">
      <div className="clear-fix">
        <div className="col-lg-6 col-md-12 col-sm-6 col-xs-12">
          <div className="img">
            <img src="images/home/2.jpg" alt="Image" />
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="skills-progress skills">
            <div className="habilidades_contenedor">
              <div className="codeconSkills">
                {['2017', '2018', 'CSE 2018', 'ECE 2018', 'MAE 2018'].map((year, index) => (
                  <div key={index} className="codeconSkillbar">
                    <div className="skill-text">
                      <span className="codeconSkillArea">{year}</span>
                    </div>
                    <div className="skillBar" data-percent="50%">
                      <span className="PercentText">{index === 0 ? '50%' : index === 1 ? '80%' : index === 2 ? '82%' : index === 3 ? '76%' : '70%'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default Placement;
