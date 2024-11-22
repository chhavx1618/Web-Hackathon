import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #003b49;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© 2024 Indian Institute of Information Technology, Vadodara</p>
      <p>All Rights Reserved</p>
    </FooterWrapper>
  );
};

export default Footer;
