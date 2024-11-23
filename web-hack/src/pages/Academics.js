import React from 'react';
import Slider from "react-slick";  // Install react-slick for the sliding banner
import "./Academics.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/image.png";
import banner2 from "../assets/image2.png";
import banner3 from "../assets/image3.png";

const Academic = () => {

  // Slider settings for the sliding banner
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Slider settings for the course carousel (thin and horizontal)
  const courseSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,  // You can adjust this to show more or fewer slides
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
        }
      }
    ]
  };

  return (
    <div className="academic-page">
      
      {/* Sliding Banner */}
      <section id="banner" className="banner">
        <Slider {...settings}>
        <div><img src={banner1} alt="Banner 1" /></div>
        <div><img src={banner2} alt="Banner 2" /></div>
        <div><img src={banner3} alt="Banner 3" /></div>
        </Slider>
      </section>

      {/* Vision, Mission, Goal Section */}
      <section id="vision-mission-goal" className="vision-mission-goal">
        <div className="content">
          <div className="vision">
            <h3>Our Vision</h3>
            <p>To be a global leader in higher education by fostering innovation, creativity, and a passion for knowledge.</p>
          </div>
          <div className="mission">
            <h3>Our Mission</h3>
            <p>We strive to offer a world-class education that empowers students to make a positive impact on society through research, teaching, and collaboration.</p>
          </div>
          <div className="goal">
            <h3>Our Goal</h3>
            <p>To provide a transformative academic experience, nurturing students to become skilled professionals and responsible citizens.</p>
          </div>
        </div>
      </section>

      {/* Courses and Studies Section */}
      <section id="courses-studies" className="courses-studies" style={{ padding: '20px 0' }}>
        <h2>Courses & Studies</h2>
        <p>Our university offers a diverse range of programs, designed to foster critical thinking, problem-solving, and practical application of knowledge. Explore our courses and build a solid foundation for your future career.</p>
        
        {/* Course Carousel */}
        <Slider {...courseSliderSettings}>
          <div className="course">
            <h4>Computer Science</h4>
            <p>Prepare for a dynamic career in computing, from software development to cybersecurity.</p>
          </div>
          <div className="course">
            <h4>Biology</h4>
            <p>Dive into the fascinating world of living organisms, genetics, and environmental studies.</p>
          </div>
          <div className="course">
            <h4>Business Studies</h4>
            <p>Develop your business acumen and leadership skills for success in the global market.</p>
          </div>
          <div className="course">
            <h4>Physics</h4>
            <p>Explore the fundamental principles that govern the universe, from quantum mechanics to astrophysics.</p>
          </div>
          <div className="course">
            <h4>Chemistry</h4>
            <p>Understand the science of matter and its transformations in a variety of fields.</p>
          </div>
        </Slider>
      </section>

      {/* Student Culture Section */}
      <section id="student-culture" className="student-culture">
        <h2>Student Culture</h2>
        <p>Our students engage in a vibrant, dynamic campus life, participating in clubs, organizations, and events that foster personal growth, leadership, and collaboration. Experience the energy and enthusiasm of our student community.</p>
        <div className="culture-images">
          <img src="https://via.placeholder.com/300x200/333333/FFFFFF?text=Culture+1" alt="Culture 1" />
          <img src="https://via.placeholder.com/300x200/333333/FFFFFF?text=Culture+2" alt="Culture 2" />
          <img src="https://via.placeholder.com/300x200/333333/FFFFFF?text=Culture+3" alt="Culture 3" />
        </div>
      </section>

    </div>
  );
};

export default Academic;
