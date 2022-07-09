import React, { useState } from 'react'
import { Lang } from './Lang'
import { MenuButton } from './MenuButton';
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  @media only screen and (max-width: 624px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: white;
    position: fixed;
    top: 10vh;
    right: ${props => (props.open ? "0" : "-100%")};
    left: ${props => (props.open ? "0" : "unset")};
    width: 100%;
    height: 90vh;
    transition: right 0.3s linear;
    z-index: 2;
    top: 0;
    justify-content: center;
    height: auto;
    border-radius: 10px;
    margin: 90px auto;
    width: 90%;
    justify-content: center;

    a {
      margin: 12px 0;
      color: black;
    }
    
  }

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    justify-content: space-between;
    display: flex;
    column-gap: 15px;
    font-family: 'RobotoRegular';
    position: unset;
    height: unset;
    
  }
`;

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='head__functions'>
        <Lang />
        <MenuButton open={open} handleClick={handleClick} />
        <NavbarWrapper open={open} className='head__navbar'>
            <a className='head__link' href='#'>Home</a>
            <a className='head__link' href='#'>About</a>
            <a className='head__link' href='#'>Destinations</a>
            <a className='head__link' href='#'>Contact</a>
        </NavbarWrapper>
        
    </div>
  )
}
