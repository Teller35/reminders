import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import Auth from "../../utils/auth";

const MyNavbar = () => {
  function loginNav() {
    if (Auth.loggedIn()) {
      return (
        <>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/" onClick={() => Auth.logout()}>
            Logout
          </Nav.Link>
        </>
      );
    } else {
      return (
        <>
          <Nav.Link href="/login">Log-In</Nav.Link>
          <Nav.Link href="/signup">Sign-Up</Nav.Link>
        </>
      );
    }
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="fs-1">Reminders</Navbar.Brand>
          <Nav className="justify-content-end">{loginNav()}</Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default MyNavbar;
