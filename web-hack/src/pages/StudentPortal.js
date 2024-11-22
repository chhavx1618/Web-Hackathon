import React, { useState } from 'react';
import './std.css';

// Updated student data
const studentData = {
  name: "John Doe",
  profilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
  grades: 20,
  solvedProblems: 76,
  skills: ["JavaScript", "React", "Node.js", "CSS", "HTML"],
  education: "Moscow State Linguistic University",
  courses: [
    { sem1: "IT, MA, HS, EC", duration: "August-December 2023" },
    { sem2: "Data Structures, Digital Design, Linear Algebra", duration: "Jan-May 2024" },
  ],
  projects: [
    {
      title: "Smart Home Automation",
      description: "A smart home automation system to control lights, temperature, and security using IoT sensors and a mobile app.",
      techStack: ["IoT", "Node.js", "MQTT", "React"],
    },
    {
      title: "Machine Learning-based Stock Price Prediction",
      description: "A machine learning project that predicts stock prices using historical data and machine learning algorithms like Linear Regression.",
      techStack: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
    },
  ],
  codingStats: {
    totalLinesOfCode: 5000,
    problemsSolved: 120,
  }
};

function StudentPortal() {
  // States for editing profile
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(studentData);
  
  // State to handle form inputs
  const [editData, setEditData] = useState({
    name: profile.name,
    education: profile.education,
    skills: profile.skills.join(', '),
  });

  // Handle input change for the edit form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  // Save changes to profile
  const handleEditProfile = (e) => {
    e.preventDefault();
    const updatedSkills = editData.skills.split(',').map(skill => skill.trim());

    setProfile({
      ...profile,
      name: editData.name,
      education: editData.education,
      skills: updatedSkills,
    });

    setIsEditing(false); // Close the modal after saving
  };

  return (
    <div className="dashboard-container">
      <div className="left-section">
        <div className="profile-card">
          <img src={profile.profilePicture} alt="Profile" className="profile-pic" />
          <h2>{profile.name}</h2>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
        <div className="skills-card">
          <h3>Skills & Endorsements</h3>
          <ul>
            {profile.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="right-section">
        <div className="education-card">
          <h3>Education</h3>
          <p>{profile.education}</p>
        </div>

        <div className="courses-card">
          <h3>Courses</h3>
          <ul>
            {profile.courses.map((course, index) => (
              <li key={index}>
                <p><strong>{course.sem1}</strong> (Duration: {course.duration})</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="projects-card">
          <h3>Projects</h3>
          {profile.projects.map((project, index) => (
            <div key={index} className="project">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
            </div>
          ))}
        </div>

        <div className="coding-stats-card">
          <h3>Coding Stats</h3>
          <p>Total Lines of Code: {profile.codingStats.totalLinesOfCode}</p>
          <p>Problems Solved: {profile.codingStats.problemsSolved}</p>
        </div>
      </div>

      {/* Modal for Editing Profile */}
      {isEditing && (
        <div className="edit-modal">
          <div className="modal-content">
            <h3>Edit Profile</h3>
            <form onSubmit={handleEditProfile}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Education:</label>
                <input
                  type="text"
                  name="education"
                  value={editData.education}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Skills:</label>
                <input
                  type="text"
                  name="skills"
                  value={editData.skills}
                  onChange={handleInputChange}
                />
                <small>(Comma-separated values)</small>
              </div>
              <div className="form-actions">
                <button type="submit">Save Changes</button>
                <button type="button" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentPortal;
