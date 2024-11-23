import styled from "styled-components";
import backgroundImage from '../assets/image.png'

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem 2rem;
  background-color: #003c68;
  color: white;
  font-size: 1rem;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const HeroWrapper = styled.section`
 background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: blue;
  position: relative;
  background-attachment: scroll;
  background-position: center;

`;

const HeroText = styled.div`
  text-align: center;

  p {
    font-size: 2rem;
    margin: 0.5rem 0;
  }

  p:first-child {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const BoxesWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Four continuous boxes */
  gap: 0; /* Remove gaps to make boxes continuous */
  text-align: center;
  background-color: #f4f4f4;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr; /* Two columns for smaller screens */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Single column for small screens */
  }
`;

const Box = styled.div`
  padding: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    font-weight: 300;
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .cta {
    display: flex;
    align-items: center;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: auto;

    svg {
      margin-left: 0.5rem;
    }
  }

  &:hover {
    transform: scale(1.05);
  }

  &:nth-child(1) {
    background-color: #00509e;
  }

  &:nth-child(2) {
    background-color: #0077b6;
  }

  &:nth-child(3) {
    background-color: #0096c7;
  }

  &:nth-child(4) {
    background-color: #00b4d8;
  }
`;

// Main Component
const HeroSection = () => {
  return (
    <>

      {/* Hero Section */}
      <HeroWrapper>
        <HeroText>
          <p>Welcome to IIITV</p>
          <p>Your journey starts here.</p>
        </HeroText>
      </HeroWrapper>

      {/* Four Boxes Section */}
      <BoxesWrapper>
        <Box id="future-students">
          <div className="icon">🐾</div>
          <h3>Future Students</h3>
          <p>Bates’ unique personality rests on the bedrock values of academic excellence, inclusivity, and social responsibility.</p>
          <div className="cta">
            Learn More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.5 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.793 8.5H2a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </Box>
        <Box id="academic-programs">
          <div className="icon">💡</div>
          <h3>Academic Programs</h3>
          <p>A Bates education fosters intellectual inquiry and reflection, personal growth, and a commitment to the world beyond oneself.</p>
          <div className="cta">
            Learn More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.5 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.793 8.5H2a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </Box>
        <Box id="calendars">
          <div className="icon">📢</div>
          <h3>Calendars & Key Dates</h3>
          <p>Explore key academic dates, campus visits, public events, class schedules, alumni activities, arts, athletics, and more.</p>
          <div className="cta">
            Learn More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.5 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.793 8.5H2a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </Box>
        <Box id="virtual-tours">
          <div className="icon">📍</div>
          <h3>Virtual Campus Tours</h3>
          <p>Take a virtual tour, learn about admission and financial aid, and speak with current students.</p>
          <div className="cta">
            Learn More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.5 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.793 8.5H2a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </Box>
      </BoxesWrapper>
    </>
  );
};

export default HeroSection;
