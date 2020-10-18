import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import logo from "../../../images/logos/logo.png";

const NavMenu = () => {
	return (
		<Navbar bg="light-" expand="lg" className="px-0">
			<Navbar.Brand href="#home">
				<img src={logo} alt="logo.png" style={{ maxWidth: "150px" }} />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Link to="/" className="nav-link">
						Home
					</Link>
					<Link to="/" className="nav-link">
						Our Portfolio
					</Link>
					<Link to="/" className="nav-link">
						Our Team
					</Link>
					<Link to="/dashboard" className="nav-link">
						Dashboard
					</Link>
					<Link to="login" className="btn btn-dark">
						Login
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavMenu;
