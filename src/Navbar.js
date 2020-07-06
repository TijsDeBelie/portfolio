import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  width: 100%;
`;

const NavigationItem = styled(Link)`
  display: flex;
  flex-grow: 1;
  padding: 15px;
  justify-content: center;
  text-decoration: none;
  background: grey;
`;

function Navbar(props) {
  return (
    <NavigationList className="navigation">
      <NavigationItem to="/" className="item">
        Projects
      </NavigationItem>
      <NavigationItem to="/articles" className="item">
        Articles
      </NavigationItem>
      <NavigationItem to="/about" className="item">
        About
      </NavigationItem>
    </NavigationList>
  );
}

export default Navbar;
