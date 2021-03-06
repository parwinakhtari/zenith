import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";
import NavWrapper from "./Cart/NavWrapper";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm px-sm-5">
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Zenith
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}
