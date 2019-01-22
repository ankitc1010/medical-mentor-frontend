import React, { Component, Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import NProgress from "nprogress";
import Router from "next/router";

import User from "./User";
import Registration from "./RegistrationPopUp";

import SmallButton from "./styles/Button";
import Input from "./styles/Input";
import SignOut from "./Signout";

import logo from "./img/logo.png";

const NavWrapper = styled.div`
  > div:first-child {
    max-width: 120rem;
    margin: 0 auto;
  }
  font-family: "Rockwell";
  .nav {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav > .nav-header {
    display: inline;
  }

  .nav > .nav-header > .nav-title {
    display: inline-block;
    font-size: 22px;
    padding: 10px 10px 10px 10px;
    > img {
      height: 6rem;
    }
  }

  .nav > .nav-btn {
    display: none;
  }

  .nav > .nav-links {
    display: inline;
    float: right;
    font-size: 18px;
  }

  .nav > .nav-links > a {
    display: inline-block;
    padding: 13px 10px 13px 10px;
    text-decoration: none;
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: 400 !important;
  }

  .nav > .nav-links > a:hover {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.secondary};
  }

  .nav > #nav-check {
    display: none;
  }

  @media (max-width: 600px) {
    .nav > .nav-btn {
      display: inline-block;
      position: absolute;
      right: 0px;
      top: 0px;
    }
    .nav > .nav-header > .nav-title > img {
      height: 3rem;
      cursor: pointer;
    }
    .nav > .nav-btn > label {
      display: inline-block;
      width: 50px;
      height: 50px;
      padding: 13px;
      background-color: ${props => props.theme.primary};
      color: ${props => props.theme.secondary};
    }
    .nav > .nav-btn > label:hover {
      background-color: ${props => props.theme.primary};
    }
    .nav > .nav-btn > label > span {
      display: block;
      width: 25px;
      height: 10px;
      border-top: 2px solid ${props => props.theme.secondary};
    }
    .nav > .nav-links {
      position: absolute;
      display: block;
      width: 100%;
      background-color: ${props => props.theme.black};
      height: 0px;
      transition: all 0.3s ease-in;
      overflow-y: hidden;
      top: 50px;
      left: 0px;
      z-index: 5;
    }
    .nav > .nav-links > a {
      display: block;
      width: 100%;
      color: white;
    }
    .nav > #nav-check:not(:checked) + .nav-links {
      height: 0px;
    }
    .nav > #nav-check:checked + .nav-links {
      height: calc(100vh - 50px);
      overflow-y: auto;
    }
  }
`;

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

class Header extends Component {
  state = {
    open: false
  };
  handleToggle = () => {
    const { open } = this.state;
    this.setState({
      open: !open
    });
  };

  componentWillMount() {
    if (process.env.NODE_ENV !== "development") {
      if (location.protocol !== "https:") {
        location.protocol = "https:";
      }
    }
  }
  render() {
    const { open } = this.state;
    return (
      <NavWrapper>
        <Head>
          <script src="https://www.google.com/recaptcha/api.js" />
        </Head>
        <div>
          <div className="nav">
            <div className="nav-header">
              <div className="nav-title">
                <Link href="/" prefetch>
                  <img src={logo} />
                </Link>
              </div>
            </div>
            <div className="nav-btn" onClick={this.handleToggle}>
              <label htmlFor="nav-check">
                <span />
                <span />
                <span />
              </label>
            </div>
            <input type="checkbox" id="nav-check" checked={open} />
            <div className="nav-links">
              <Link href="/medical" prefetch>
                <a onClick={this.handleToggle}>Medical Mentor</a>
              </Link>
              <Link href="/engineering" prefetch>
                <a onClick={this.handleToggle}>Engineering Mentor</a>
              </Link>

              <Link href="/about" prefetch>
                <a onClick={this.handleToggle}>About Us</a>
              </Link>
              <Link href="/contact" prefetch>
                <a onClick={this.handleToggle}>Contact Us</a>
              </Link>
              <User>
                {me =>
                  me.data.me ? (
                    <Fragment>
                      <SignOut />
                      <Link href="/me" prefetch>
                        <SmallButton onClick={this.handleToggle}>
                          Profile
                        </SmallButton>
                      </Link>
                    </Fragment>
                  ) : (
                    <a onClick={() => (location.hash = "signin-popup")}>
                      <SmallButton>Register/Sign In</SmallButton>
                    </a>
                  )
                }
              </User>
            </div>
          </div>
        </div>
        <Registration />
      </NavWrapper>
    );
  }
}

export default Header;
