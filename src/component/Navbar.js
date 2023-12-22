import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as Link2, useLocation } from "react-router-dom";

import * as Icon from "react-feather";
import { NavbarBrand, NavbarToggler, NavItem, Nav, Collapse } from "reactstrap";
// Import Logo
import logodark from "../assets/images/logo-dark.png";
import logolight from "../assets/images/logo-light.png";

export default function NavbarPage() {
  const [isOpen, setMenu] = useState(true);

  const location = useLocation();

  window.addEventListener("scroll", windowScroll);

  function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("nav-sticky");
    } else {
      navbar.classList.remove("nav-sticky");
    }
  }
  const toggleMenu = () => {
    setMenu(!isOpen);
  };
  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-lg fixed-top sticky">
        <div className="container">
          <NavbarBrand className="navbar-brand" to="/">
            <img src={logodark} className="logo-light-mode logo" alt="" />
            <img src={logolight} className="logo-dark-mode logo" alt="" />
          </NavbarBrand>
          <NavbarToggler className="navbar-toggler" onClick={toggleMenu}>
            <Icon.Menu />
          </NavbarToggler>

          <Collapse
            className={`navbar-collapse ${isOpen === true ? "hidden" : "show"}`}
            id="navbarSupportedContent"
          >
            <Nav
              className="navbar-nav ms-auto mb-2 mb-lg-0"
              id="navbar-navlist"
            >
              <NavItem>
                <Link2
                  activeClass="active"
                  className={
                    location?.pathname === "/" ? "nav-link active" : "nav-link"
                  }
                  to="/"
                >
                  Home
                </Link2>
              </NavItem>
              <NavItem>
                <Link2
                  activeClass="active"
                  // to="about"
                  className={
                    location?.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/about"
                >
                  ABOUT
                </Link2>
              </NavItem>
              {/* <NavItem>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="political"
                  className="nav-link"
                  href="#"
                >
                  POLITICAL CAREER
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="education"
                  className="nav-link"
                  href="#"
                >
                  EDUCATION
                </Link>
              </NavItem> */}
              <NavItem>
                <Link2
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={
                    location?.pathname === "/events"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/events"
                >
                  EVENTS
                </Link2>
              </NavItem>
              <NavItem>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="footer"
                  className="nav-link"
                  href="#"
                >
                  Contact Us
                </Link>
              </NavItem>
            </Nav>

            {/* <ul className="list-inline menu-social mb-0 ps-lg-4 ms-2">
              <li className="list-inline-item">
                <Link2
                  to="/auth-login"
                  className="text-dark fw-semibold text-uppercase small"
                >
                  Login
                </Link2>
              </li>
              <li className="list-inline-item ms-2">
                <Link2
                  to="/auth-signup"
                  className="btn btn-primary text-uppercase"
                >
                  Sign Up
                </Link2>
              </li>
            </ul> */}
          </Collapse>
        </div>
      </nav>
    </>
  );
}
