import Link from "next/link";
import styled from "styled-components";
import NProgress from "nprogress";
import Router from "next/router";

import SmallButton from "./styles/Button";
import Input from "./styles/Input";

import logo from "./img/logo.png";

const NavWrapper = styled.div`
  > div {
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

const Header = () => (
  <NavWrapper>
    <div>
      <div className="nav">
        <div className="nav-header">
          <div className="nav-title">
            <img src={logo} />
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span />
            <span />
            <span />
          </label>
        </div>
        <input type="checkbox" id="nav-check" />
        <div className="nav-links">
          <a href="//github.io/jo_geek" target="_blank">
            Programs
          </a>
          <a href="http://stackoverflow.com/users/4084003/" target="_blank">
            Career Library
          </a>
          <a
            href="https://in.linkedin.com/in/jonesvinothjoseph"
            target="_blank"
          >
            Success Story
          </a>
          <a href="https://codepen.io/jo_Geek/" target="_blank">
            Blog
          </a>
          <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">
            Pricing
          </a>
          <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">
            Login
          </a>
          <a>
            <Input type="text" />
            <SmallButton>Start Now for Free</SmallButton>
          </a>
        </div>
      </div>
    </div>
  </NavWrapper>
);

export default Header;
