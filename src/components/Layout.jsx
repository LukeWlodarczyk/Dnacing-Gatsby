import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import "../styles/global.css"

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  background-color: #c9e4ff;
  padding: 0;
  margin: 0;
  padding: 10px;
`;

const NavItem = styled(Link)`
  text-decoration: none;  
  margin: 0 30px;
  color: #0582ff;
  &:hover {
    color: #ff07c9;
  }
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Nav>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/instructors'>Instructors</NavItem>
      </Nav>
      {children}
    </Container>
  )
}

export default Layout;