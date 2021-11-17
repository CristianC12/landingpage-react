import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #cc2e45;
    position: fixed;
    z-index: 500;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
        <li className="navItem"><a href="#">Home</a></li>
        <li className="navItem"><a href="#galeria">galeria</a></li>
        <li className="navItem"><a href="#sobre">sobre</a></li>
        <li className="navItem"><a href="#local">local</a></li>
        <li className="navItem"><a href="#contato">contato</a></li>
        <li className="navItem"><a href="#equipe">Equipe</a></li>
    </Ul>
  );
};

export default RightNav;
