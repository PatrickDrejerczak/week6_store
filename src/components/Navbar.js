import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.svg';
import ButtonContainer from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavbarWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-primary">
        <Link to="/">
          <img src={logo} height="64px" length="64px" alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/samsung" className="nav-link">
              Samsung
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/google" className="nav-link">
              Google
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/htc" className="nav-link">
              HTC
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/apple" className="nav-link">
              Apple
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <i className="fas fa-cart-plus" />
            My Cart
          </ButtonContainer>
        </Link>
      </NavbarWrapper>
    );
  }
}

const NavbarWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
