import React, { useState } from "react";
import { FaCalendarAlt, FaRegFileAlt, FaRegMoneyBillAlt, FaSchool } from "react-icons/fa";

const Notices = () => {
  // State to manage the search input and filtered rows
  const [searchText, setSearchText] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [selectedNotice, setSelectedNotice] = useState(null);

  // Handle input change for search
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  // Handle filter change
  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  // Handle modal open
  const handleModalOpen = (notice) => {
    setSelectedNotice(notice);
  };

  // Handle modal close
  const handleModalClose = () => {
    setSelectedNotice(null);
  };

  // Function to filter the rows based on the search input and type filter
  const filterRows = () => {
    return [
      { date: "22/09/10", type: "academics", notice: "CSE time table" },
      { date: "22/09/2018", type: "Financial", notice: "SBI fee link" },
      {
        date: "23/08/2018",
        type: "Schlorship",
        notice: (
          <a href="http://www.gbpec.edu.in/docs/NoticeAndUpdates/disable.pdf">
            Post-matric Scholarship for Students with Disabilities
          </a>
        ),
      },
      {
        date: "24/08/2018",
        type: "Schlorship",
        notice: (
          <a href="http://www.gbpec.edu.in/docs/NoticeAndUpdates/MoMA_MCM_2018-20.pdf">
            Notice-MERIT CUM MEANS BASED SCHOLARSHIP
          </a>
        ),
      },
      // Add more rows here as needed
    ]
      .filter((row) => {
        // Convert `notice` to string for comparison if it's not a string
        const noticeText =
          typeof row.notice === "string" ? row.notice : row.notice?.props?.children || "";

        return (
          row.date.toLowerCase().includes(searchText.toLowerCase()) ||
          row.type.toLowerCase().includes(searchText.toLowerCase()) ||
          noticeText.toLowerCase().includes(searchText.toLowerCase())
        );
      })
      .filter((row) => filterType === "All" || row.type.toLowerCase() === filterType.toLowerCase());
  };

  return (
    <div className="notices-container">
      <div className="theme-title">
        <h2>Notices</h2>
        <p>
          This page is dedicated to notices related to new announcements. Here you
          will find all updates related to our college.
        </p>
        <hr />

        {/* Table Search Input */}
        <div className="search-container">
          <input
            id="TableInput"
            type="text"
            placeholder="Search notices..."
            value={searchText}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        {/* Filter by Type */}
        <div className="filter-container">
          <select value={filterType} onChange={handleFilterChange} className="filter-select">
            <option value="All">All Types</option>
            <option value="academics">Academics</option>
            <option value="financial">Financial</option>
            <option value="schlorship">Scholarship</option>
          </select>
        </div>

        {/* Table with Notices */}
        <div className="notices-table">
          {filterRows().map((row, index) => (
            <div
              key={index}
              className="notice-card"
              onClick={() => handleModalOpen(row.notice)}
            >
              <div className="notice-header">
                <span className="notice-date">
                  <FaCalendarAlt /> {row.date}
                </span>
                <span className={`notice-type ${row.type.toLowerCase()}`}>
                  {row.type === "academics" && <FaSchool />}
                  {row.type === "Financial" && <FaRegMoneyBillAlt />}
                  {row.type === "Schlorship" && <FaRegFileAlt />}
                  {row.type}
                </span>
              </div>
              <div className="notice-content">
                {row.notice}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Notice Detail */}
      {selectedNotice && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content">
            <button className="close-btn" onClick={handleModalClose}>X</button>
            <h3>Notice Details</h3>
            <div>{selectedNotice}</div>
          </div>
        </div>
      )}

      {/* Add CSS for table and responsiveness */}
      <style>
        {`
          .notices-container {
            font-family: 'Arial', sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            position: relative;
          }

          .theme-title h2 {
            font-size: 2.5rem;
            margin-bottom: 15px;
            color: #3d3d3d;
          }

          .theme-title p {
            font-size: 1.2rem;
            color: #555;
            margin-bottom: 20px;
          }

          .search-container {
            text-align: center;
            margin-bottom: 20px;
          }

          .search-input {
            padding: 10px 15px;
            width: 100%;
            max-width: 500px;
            font-size: 1rem;
            border-radius: 25px;
            border: 2px solid #ddd;
            transition: border 0.3s ease;
          }

          .search-input:focus {
            outline: none;
            border-color: #0056b3;
            box-shadow: 0 0 5px rgba(0, 86, 179, 0.5);
          }

          .filter-container {
            text-align: center;
            margin-bottom: 20px;
          }

          .filter-select {
            padding: 10px;
            width: 150px;
            font-size: 1rem;
            border-radius: 25px;
            border: 2px solid #ddd;
            background-color: #fff;
          }

          .notices-table {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .notice-card {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .notice-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
          }

          .notice-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
          }

          .notice-date {
            font-weight: bold;
            color: #555;
          }

          .notice-type {
            font-weight: bold;
            display: flex;
            align-items: center;
            color: #333;
          }

          .notice-type.academics {
            color: #ff7f50;
          }

          .notice-type.financial {
            color: #28a745;
          }

          .notice-type.schlorship {
            color: #ffc107;
          }

          .notice-content {
            font-size: 1rem;
            color: #666;
          }

          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .modal-content {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            width: 80%;
            max-width: 600px;
            position: relative;
            text-align: center;
            animation: fadeIn 0.3s ease-in;
          }

          .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 20px;
            background: none;
            border: none;
            cursor: pointer;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: scale(0.95);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Notices;
