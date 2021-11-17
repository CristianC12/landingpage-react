import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import './style.css';

const Nav = styled.nav`
  width: 100%;
  height: 9vh;
  padding: 0 20px;
  display: flex;
  position:fixed;
  background-color: #ff3251;
  box-shadow: 4px 2px 10px rgba(0, 0, 0, 0.411);
  justify-content: space-between;
  top:0vw;
  z-index: 100;
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        OktoberFest
        <img src="https://i.imgur.com/nKsbhXk.png"/>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar