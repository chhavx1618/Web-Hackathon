import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link
import logo from '../assets/logo.png';

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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/notices">Notices</Link>
        <Link to="/Login ">Login</Link>
        {/* <Link to="/Placement">Placement</Link>
        <DropdownMenu>
          <Link to="/admission">Admission</Link>
          <DropdownContent>
            <Link to="/undergraduate">Undergraduate</Link>
            <Link to="/graduate">Graduate</Link>
            <Link to="/international">International</Link>
          </DropdownContent>
        </DropdownMenu> */}
        <DropdownMenu>
          <Link to="/Academics">Academics</Link>
          <DropdownContent>
            <Link to="/curriculum">Curriculum</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/AdmissionApp">Application Form</Link>
          </DropdownContent>
        </DropdownMenu>
        <Link to="/ContactForm">Contact</Link>
        <Link to="/StudentPortal">Student Portal</Link>
        <Link to="/Gallery">Gallery</Link>
      </NavLinks>
    </NavbarWrapper>
  );
};

export default Navbar;
