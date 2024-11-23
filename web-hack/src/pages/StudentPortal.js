import React, { useState, useEffect } from 'react';
import { auth, db, setDoc, doc, getDoc } from './Firebase'; // Import necessary Firestore functions
import './std.css';

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
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(studentData);
  const [editData, setEditData] = useState({
    name: profile.name,
    education: profile.education,
    skills: profile.skills.join(', '),
  });

  const user = auth.currentUser; // Get the current authenticated user

  useEffect(() => {
    if (user) {
      // Fetch user data from Firestore when the component mounts
      const fetchUserData = async () => {
        const userDoc = await getDoc(doc(db, "users", user.uid)); // Get the user data from Firestore
        if (userDoc.exists()) {
          setProfile(userDoc.data());
        }
      };
      fetchUserData();
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const handleEditProfile = async (e) => {
    e.preventDefault();
    const updatedSkills = editData.skills.split(',').map(skill => skill.trim());

    setProfile({
      ...profile,
      name: editData.name,
      education: editData.education,
      skills: updatedSkills,
    });

    await setDoc(doc(db, "users", user.uid), { // Save updated data to Firestore
      ...profile,
      name: editData.name,
      education: editData.education,
      skills: updatedSkills,
    });

    setIsEditing(false); // Close the modal after saving
  };

  return (
    <div className="dashboard-container">
      {/* Profile Section */}
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

      {/* Right Section */}
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
                <label>Skills (comma-separated):</label>
                <input
                  type="text"
                  name="skills"
                  value={editData.skills}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit">Save Changes</button>
            </form>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentPortal;
