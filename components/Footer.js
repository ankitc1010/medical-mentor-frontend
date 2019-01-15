import React, { Component } from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

import whiteLogo from "./img/logo_white.png";
import stars from "./img/stars.png";

const Dialog = styled.div`
  font-family: "Futura";
  display: inline-block;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  padding: 8rem 6rem;
  border-radius: 2rem;
  font-size: 1.5rem;
  line-height: 1.5;
  transform: rotate(1deg);
  margin: 7rem 0rem;
  margin-bottom: 4rem;
  @media (max-width: 600px) {
    padding: 6rem 4rem;
  }
  b {
    font-size: 2rem;
    color: ${props => props.theme.white};
  }
  position: relative;
  img {
    position: absolute;
    left: -6rem;
    width: 100%;
    top: -8rem;

    @media (max-width: 600px) {
      visibility: hidden;
    }
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -3rem;
    left: 23rem;
    width: 0;
    height: 0;
    border-left: 2rem solid transparent;
    border-right: 2rem solid transparent;
    border-top: 4rem solid ${props => props.theme.primary};
  }
`;

const DialogCircle = styled.div`
  font-family: "Futura";
  display: inline-block;
  background: ${props =>
    props.type === "medical" ? props.theme.secondary : props.theme.primary};
  color: ${props =>
    props.type === "medical" ? props.theme.primary : props.theme.white};
  padding: 6rem 8rem;
  border-radius: 50%;
  font-size: 1.5rem;
  line-height: 1.5;
  z-index: 1;
  margin: 7rem 0rem;
  margin-bottom: 4rem;
  @media (max-width: 600px) {
    padding: 4rem 4rem;
  }
  b {
    font-size: 2rem;
    color: ${props => props.theme.white};
  }
  position: relative;
  img {
    position: absolute;
    left: -2rem;
    width: 100%;
    top: -8rem;

    @media (max-width: 600px) {
      visibility: hidden;
    }
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -1rem;
    z-index: -1;
    left: 5rem;
    width: 0;
    height: 0;
    border-left: 2rem solid transparent;
    border-right: 2rem solid transparent;
    border-top: 4rem solid
      ${props =>
        props.type === "medical" ? props.theme.secondary : props.theme.primary};
  }
`;

const FooterSection = styled.footer`
  text-align: center;
  color: ${props => props.theme.white};
  font-family: "Futura";

  > div:nth-child(2) {
    background: ${props => props.theme.black};
    padding: 2rem;
    > img:first-child {
      width: 14rem;
    }
  }
`;

const Socials = styled.div`
  .btn {
    display: inline-block;
    width: 5rem;
    height: 5rem;
    background: ${props => props.theme.primary};
    margin: 1rem;
    border-radius: 50%;
    box-shadow: 0 5px 15px -5px #00000070;
    color: ${props => props.theme.white};
    overflow: hidden;
    position: relative;
  }
  .btn svg {
    line-height: 5rem;
    font-size: 2.6rem;
    transition: 0.2s linear;
    z-index: 1;
    position: relative;
    top: 1.1rem;
  }
  .btn:hover svg {
    transform: scale(1.3);
    color: ${props => props.theme.white};
  }
  .btn::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    background: ${props => props.theme.teal};
    transform: rotate(45deg);
    left: -110%;
    top: 90%;
  }
  .btn:hover::before {
    animation: aaa 0.7s 1;
    top: -10%;
    left: -10%;
  }
  @keyframes aaa {
    0% {
      left: -110%;
      top: 90%;
    }
    50% {
      left: 10%;
      top: -30%;
    }
    100% {
      top: -10%;
      left: -10%;
    }
  }
`;

const Footer = () => (
  <FooterSection>
    <Dialog>
      Discuss your future with your Mentor over a cup of coffee!
      <br />
      Call us today!
      <br />
      <b>+91 80 889 30 300/+91 9483 795000</b>
      <img src={stars} />
    </Dialog>
    <div>
      <img src={whiteLogo} />
      <Socials>
        <a className="btn" href="#">
          <FaFacebookF />
        </a>
        <a className="btn" href="#">
          <FaTwitter />
        </a>
        <a className="btn" href="#">
          <FaGoogle />
        </a>
        <a className="btn" href="#">
          <FaInstagram />
        </a>
        <a className="btn" href="#">
          <FaYoutube />
        </a>
      </Socials>
      <div>&#174; 2019 Career Shapers, Inc</div>
    </div>
  </FooterSection>
);

export default Footer;
export { DialogCircle };
