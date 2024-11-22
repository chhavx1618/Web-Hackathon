import React from 'react';
import './std.css';

// Mock student data
const studentData = {
  name: "Charles Robbie",
  profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
  projectViews: 20,
  totalInterviews: 12,
  solvedProblems: 76,
  skills: ["JavaScript", "React", "Node.js", "CSS", "HTML"],
  education: "Moscow State Linguistic University",
  jobHistory: [
    { position: "Front End Developer", company: "ABC Corp", duration: "2021 - Present" },
    { position: "Intern", company: "XYZ Ltd", duration: "2020 - 2021" },
  ],
  codingStats: {
    totalLinesOfCode: 5000,
    problemsSolved: 120,
  },
};

function App() {
  return (
    <div className="dashboard-container">
      <div className="left-section">
        <div className="profile-card">
          <img src={studentData.profilePicture} alt="Profile" className="profile-pic" />
          <h2>{studentData.name}</h2>
          <button>Edit Profile</button>
        </div>
        <div className="skills-card">
          <h3>Skills & Endorsements</h3>
          <ul>
            {studentData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="right-section">
        <div className="stats-card">
          <h3>Project Views</h3>
          <div className="stat">{studentData.projectViews}</div>
        </div>
        <div className="stats-card">
          <h3>Total Interviews</h3>
          <div className="stat">{studentData.totalInterviews}</div>
        </div>
        <div className="stats-card">
          <h3>Solving Rate</h3>
          <div className="stat">{studentData.solvedProblems}%</div>
        </div>

        <div className="education-card">
          <h3>Education</h3>
          <p>{studentData.education}</p>
        </div>

        <div className="job-history-card">
          <h3>Job History</h3>
          {studentData.jobHistory.map((job, index) => (
            <div key={index} className="job">
              <p><strong>{job.position}</strong> at {job.company}</p>
              <p>{job.duration}</p>
            </div>
          ))}
        </div>

        <div className="coding-stats-card">
          <h3>Coding Stats</h3>
          <p>Total Lines of Code: {studentData.codingStats.totalLinesOfCode}</p>
          <p>Problems Solved: {studentData.codingStats.problemsSolved}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
