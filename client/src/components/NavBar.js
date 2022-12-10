import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
// import Button from "@mui/material/Button";
import { Button } from "../styles";


function NavBar({ user, setUser, setItemToEdit }) {
  console.log(window.location.pathname)
  const history = useHistory();
  
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/")
      }
    });
  }

  function handleNewItemClick() {
    setItemToEdit({})
    history.push("/itemform")
  }

  return (
    <Wrapper>
      <Logo>
        <Link to="/" exact>Group One</Link>
      </Logo>
      <Nav>



{/* {if (!user) {
          <Button as={Link} to="/login" exact>Login</Button>
        } else if (user && user.seller) { 
          <Button as={Link} to="/item-form">
            Add New Item
          </Button>
          <Button variant="outline" onClick={handleLogoutClick}>
          Logout
          </Button>
        } else {
          <Button variant="outline" onClick={handleLogoutClick}>
            Logout
          </Button>
        }} */}

        {/* {!user ? <Button as={Link} to="/login" exact>
          Login
        </Button> :
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>} */}

        {/* {(user && user.seller && window.location.pathname === "/sellerpage") ?
        <Button as={Link} to="/itemform" exact>New Item</Button> : 
        (user && user.seller) ? 
        <Button as={Link} to="/sellerpage">Seller Account</Button>
        : null
        }
        {!user ? 
        <Button as={Link} to="/login" exact>Login</Button> 
        :  
        <Button variant="outline" onClick={handleLogoutClick}>Logout</Button>
        } */}
        {!user ? 
        <Button as={Link} to="/login" exact>Login</Button> 
        :
        (user && user.seller) ?
        <>
        {/* <Button as={Link} to="/itemform" exact>New Item</Button> */}
        <Button onClick={handleNewItemClick}>Add New Item</Button>
        <button className="button-89" as={Link} to="/sellerpage">my Account</button>
          <Button variant="outline" onClick={handleLogoutClick}>
          Logout
          </Button>
        </>
        :  
        <Button variant="outline" onClick={handleLogoutClick}>Logout</Button>
        }
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-bottom: 2px solid black
`;

const Logo = styled.h1`
  font-family: 'Tapestry', cursive;
  font-weight: lighter;
  font-size: 4rem;
  color: #fff0c2;
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
