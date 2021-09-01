import React from "react";
import { Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Navbar = () => {
  function loginNav() {
    if (!Auth.loggedIn()) {
      return (
        <>
          <Nav.Item>
            <Nav.Link to="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/profile">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/" onClick={() => Auth.logout()}>
              Logout
            </Nav.Link>
          </Nav.Item>
        </>
      );
    } else {
      return (
        <>
          <Nav.Item>
            <Nav.Link to="/login">LogIn</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/signup">SignUp</Nav.Link>
          </Nav.Item>
        </>
      );
    }
  }

  return (
    <header>
      <h1>Reminders</h1>
      <Nav className="justify-content-end">{loginNav()}</Nav>
    </header>
  );
};

export default Navbar;
