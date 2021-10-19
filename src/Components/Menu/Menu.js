import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../../img/logo.png";
import './Menu.css';
// import ScrollAnimation from 'react-animate-on-scroll';

const Menu = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="" width="70"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink to="/home" className="items">
                    <li>Home</li>
                    </NavLink>
                    <NavLink to="/coaches" className="items">
                    <li>Coaches</li>
                    </NavLink>
                    <NavLink to="/recipes" className="items">
                    <li>Diet Recipes</li>
                    </NavLink>
                    <NavLink to="/register" className="items">
                    <li>Register</li>
                    </NavLink>
                    <NavLink to="/login" className="items">
                    <li>Login</li>
                    </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;