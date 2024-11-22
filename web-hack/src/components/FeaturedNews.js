import React from 'react';
import styled from 'styled-components';

const FeaturedWrapper = styled.section`
  padding: 40px;
  background-color: #f5f5f5;
  text-align: center;
`;

const NewsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const NewsItems = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const NewsItem = styled.div`
  width: 30%;
  background: white;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const FeaturedNews = () => {
  return (
    <FeaturedWrapper>
      <NewsTitle>Featured News</NewsTitle>
      <NewsItems>
        <NewsItem>
          <h3>New Research at Bates</h3>
          <p>Read about the latest research happening at Bates College.</p>
        </NewsItem>
        <NewsItem>
          <h3>Admission Open</h3>
          <p>Applications are open for the upcoming academic year!</p>
        </NewsItem>
        <NewsItem>
          <h3>Sports Highlights</h3>
          <p>Check out the latest sports accomplishments at Bates.</p>
        </NewsItem>
      </NewsItems>
    </FeaturedWrapper>
  );
};

export default FeaturedNews;
