import React, { useState } from 'react';
import './AdmissionApp.css'; // CSS for styling

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    program: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send the form data to a server)
    console.log('Application Submitted', formData);
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      dob: '',
      program: '',
      message: '',
    });
  };

  return (
    <div className="admission-form-container">
      <div className="admission-form-content">
        <h2>Admission Application</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email ID"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Program Choice</label>
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
            >
              <option value="">Select Program</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Business Studies">Business Studies</option>
              <option value="Biology">Biology</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Arts and Design">Arts and Design</option>
              <option value="Digital Technology">Digital Technology</option>
            </select>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Write any additional information..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="btn send-btn">
              Submit Application
            </button>
            <button type="button" className="btn clear-btn" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
