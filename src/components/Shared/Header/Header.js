import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Warehouse Management System</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/inventory">Inventory</CustomLink>
        <CustomLink to="/myitems">My Items</CustomLink>
        <CustomLink to="/blogs">Blogs</CustomLink>
        <CustomLink to="/login">Log In</CustomLink>
        <CustomLink to="/register">Register</CustomLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Header;
