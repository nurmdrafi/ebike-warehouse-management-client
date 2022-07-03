import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import logo from "../../../../src/images/electric-bike-logo.png";

const Header = () => {
  let navigate = useNavigate();
  const [user] = useAuthState(auth);
  return (
    <Navbar bg="light" expand="lg">
      <Container style={{ minHeight: "50px" }}>
        <Navbar.Brand onClick={() => navigate("/home")} role="button">
          <div>
            <img src={logo} alt="ebike warehouse" style={{ width: "80px" }} />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <CustomLink to="/">Home</CustomLink>
            {user && (
              <span className="d-block d-lg-flex">
                <CustomLink to="/manage-inventory">Manage Items</CustomLink>
                <CustomLink to="/add-items">Add Item</CustomLink>
                <CustomLink to="/my-items">My Items</CustomLink>
              </span>
            )}
            <CustomLink to="/contact">Contact</CustomLink>
            {user ? (
              <button
                className="btn btn-outline-danger"
                onClick={() => signOut(auth)}
              >
                Log Out
              </button>
            ) : (
              <div className="d-flex">
                <CustomLink to="/login">Log In</CustomLink>
                <CustomLink to="/register">Register</CustomLink>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
