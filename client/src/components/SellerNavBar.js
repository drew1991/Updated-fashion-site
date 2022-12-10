

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import Button from "@mui/material/Button";
import { Button } from "../styles";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Wrapper style={{background:'red'}} >
      <Logo>
        <Link to="/"><span style={{color:'#fff0c2'}}>Group one</span></Link>
      </Logo>
      <Nav>
        <button as={Link} to="/item-form" className="button-89">
          Add New Item
        </button>
        <button variant="outline" onClick={handleLogoutClick} className="button-89">
          Logout
        </button>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: 'Tapestry', cursive;
  font-weight: lighter;
  font-size: 4rem;
  color: royalBlue;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
