import React, { useState } from "react";

const Notices = () => {
  // State to manage the search input and filtered rows
  const [searchText, setSearchText] = useState("");

  // Handle input change for search
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  // Function to filter the rows based on the search input
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
        ) 
      },
      { 
        date: "24/08/2018", 
        type: "Schlorship", 
        notice: (
          <a href="http://www.gbpec.edu.in/docs/NoticeAndUpdates/MoMA_MCM_2018-20.pdf">
            Notice-MERIT CUM MEANS BASED SCHOLARSHIP
          </a>
        )
      },
      // Add more rows here as needed
    ].filter(row =>
      row.date.toLowerCase().includes(searchText.toLowerCase()) ||
      row.type.toLowerCase().includes(searchText.toLowerCase()) ||
      row.notice.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  return (
    <div>
      {/* Theme Header */}
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
                <li className="active"><a href="#">NOTICES</a></li>
                <li><a href="agenda/index.html">EVENTS</a>
                  <ul className="sub-menu">
                    <li><a href="events.html" className="tran3s">old</a></li>
                  </ul>
                </li>
                <li><a href="projects.html">PROJECTS</a></li>
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

      {/* Inner page banner */}
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

      <div className="theme-title">
        <h2>Notices</h2>
        <p>
          This page is dedicated to notices related to new announcements. Here you
          will find all updates related to our college.
        </p>
        <hr />

        {/* Table Search Input */}
        <h2>
          <input
            id="TableInput"
            type="text"
            placeholder="Search in table.."
            value={searchText}
            onChange={handleSearchChange}
          />
        </h2>

        {/* Table with Notices */}
        <table className="responsivetable">
          <thead>
            <tr>
              <th>DATE</th>
              <th>TYPE</th>
              <th>NOTICES</th>
            </tr>
          </thead>
          <tbody>
            {filterRows().map((row, index) => (
              <tr key={index}>
                <td><strong>{row.date}</strong></td>
                <td className={row.type.toLowerCase()}>{row.type}</td>
                <td>{row.notice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add CSS for table and responsiveness */}
      <style>
        {`
          .responsivetable {
            width: 100%;
            border-collapse: collapse;
          }

          .responsivetable th,
          .responsivetable td {
            padding: 10px;
            text-align: left;
            border: 1px solid #ddd;
          }

          @media (max-width: 600px) {
            .responsivetable {
              overflow-x: scroll;
              position: relative;
              margin-left: -53%;
              transform: scale(0.50);
            }
          }

          @media (min-width: 600px) and (max-width: 850px) {
            .responsivetable {
              overflow-x: scroll;
              position: relative;
              margin-left: 40%;
              transform: scale(0.80);
            }
          }

          #TableInput {
            padding: 10px;
            margin-bottom: 20px;
            width: 100%;
            max-width: 400px;
            font-size: 16px;
          }

          .theme-title h2 {
            font-size: 2rem;
            margin-bottom: 10px;
          }

          .theme-title p {
            font-size: 1rem;
            color: #555;
          }
        `}
      </style>
    </div>
  );
};

export default Notices;
