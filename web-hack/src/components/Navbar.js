import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import backgroundImage from '../assets/image.png';  // Your logo

// Styled Components

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #003b49;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 50px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  position: relative;

  a {
    color: white;
    font-size: 16px;
    padding: 8px 12px;
    text-decoration: none;
    transition: background 0.3s ease;
  }

  a:hover {
    background-color: #005f73;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: #003b49;
    width: 200px;
    padding: 10px;
  }
`;

const DropdownMenu = styled.div`
  position: relative;
  
  &:hover > div {
    display: block;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #003b49;
  min-width: 160px;
  z-index: 1;

  a {
    padding: 12px 16px;
    display: block;
    font-size: 14px;
    text-decoration: none;
  }

  a:hover {
    background-color: #005f73;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    background-color: white;
    width: 30px;
    height: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Navbar Component

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <NavbarWrapper>
      <Logo src={logo} alt="IIITV" />
      <HamburgerIcon onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </HamburgerIcon>
      <NavLinks open={open}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <DropdownMenu>
          <a href="/admission">Admission</a>
          <DropdownContent>
            <a href="/undergraduate">Undergraduate</a>
            <a href="/graduate">Graduate</a>
            <a href="/international">International</a>
          </DropdownContent>
        </DropdownMenu>
        <DropdownMenu>
          <a href="/academics">Academics</a>
          <DropdownContent>
            <a href="/departments">Departments</a>
            <a href="/courses">Courses</a>
            <a href="/majors">Majors</a>
          </DropdownContent>
        </DropdownMenu>
        <a href="/news">News</a>
        <a href="/resources">Resources</a>
        <a href="/alumni">Alumni</a>
      </NavLinks>
    </NavbarWrapper>
  );
};

export default Navbar;
