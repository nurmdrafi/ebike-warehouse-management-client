import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import { useNavigate } from 'react-router';

const Header = () => {
  let navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand onClick={() => navigate('/home')} role="button">Warehouse Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/manage-inventory">Manage Inventory</CustomLink>
            <CustomLink to="/add-items">Add Items</CustomLink>
            <CustomLink to="/my-items">My Items</CustomLink>
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
