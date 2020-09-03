import React from "react";
import { Navbar, Nav } from "react-bootstrap/";
import logo from "../../assets/images/logo_white.png";
import styled from "styled-components";

const Logo = styled.img`
  max-width: 65px;
  @media ${({ theme }) => theme.mediaQueries.above992} {
    max-width: 75px;
  }
`;

const StyledToggle = styled(Navbar.Toggle)`
  & .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
`;

const StyledNav = styled(Nav)`
  & .nav-link {
    font-family: "Bebas Neue", Impact, "Arial Narrow Bold", sans-serif;
    height: 34px;
    line-height: 22px;
  }
`;

const NavLinks = styled(Nav.Link)`
  color: white !important;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
  @media ${({ theme }) => theme.mediaQueries.above992} {
    & + & {
      margin-left: 2rem;
    }
    &.links__cta {
      background: #ffc10e;
      font-weight: 500;
      color: black !important;
      padding-left: 1rem !important;
      padding-right: 1rem !important;
    }
  }
`;

function Header() {
  return (
    <Navbar style={{ background: "black" }} variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <Logo src={logo} />
      </Navbar.Brand>
      <StyledToggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <StyledNav className="ml-auto">
          <NavLinks href="#investor">Investor Sheet</NavLinks>
          <NavLinks href="#sales">Sales Package</NavLinks>
          <NavLinks className="links__cta" href="#register">
            Register Interest
          </NavLinks>
        </StyledNav>
      </Navbar.Collapse>
      <button
        type="button"
        aria-label="menu"
        style={{
          padding: "0.5rem",
          width: "55px",
          marginLeft: "1.5rem",
          background: "none",
          border: "none",
        }}
        className="d-none d-lg-block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 384"
          fill="#FFFFFF"
        >
          <path d="M0 277.333h384V320H0zM0 170.667h384v42.667H0zM0 64h384v42.667H0z" />
        </svg>
      </button>
    </Navbar>
  );
}

export default Header;
