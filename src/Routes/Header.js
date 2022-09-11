import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Linker = styled(Link)`
  list-style: none;
  color: black;
  text-decoration: none;
  font-size: 2em;
  font-weight: bolder;
  transition: 0.8s ease-in-out;
  &:hover {
    cursor: pointer;
    color: gold;
  }
`;

const Header = ({ rota, rota2 }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Linker to="/">{rota}</Linker>
          </li>
          <li>
            <Linker to="/dog">{rota2}</Linker>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
