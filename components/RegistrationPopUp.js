import React, { Component, Fragment } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { FaEnvelope, FaUserCircle } from "react-icons/fa";

import SignUp from "./SignUpNew";
import SignIn from "./SignInNew";
import RequestReset from "./RequestResetNew";

import logo from "./img/logo.png";

const DynamicComponentWithNoSSR = dynamic(import("../components/GoogleLogin"), {
  ssr: false
});

const PopUpDialog = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000000c9;
  z-index: 10;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
  > div {
    width: 396px;
    padding: 5rem 2rem;
    border-radius: 4px;
    height: 50rem;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    overflow-y: scroll;
    text-align: center;
    transform: translate(-50%, -50%) scale(0.5);
    box-shadow: 0 2rem 4rem rgba(black, 0.2);
    transition: all 0.4s;

    h2 {
      font-weight: 300;
      font-size: 3.5rem;
      margin: 0;
      padding: 0;
      margin-top: 2rem;
      margin-bottom: 0.5rem;
      line-height: 1.2;
    }

    @media (max-width: 480px) {
      & {
        width: 99%;
        height: 95%;
        border-radius: 0;
      }
    }
  }
  &:target {
    opacity: 1;
    visibility: visible;
    > div {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const EmailOptions = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  font-family: "Futura";
  > div {
    flex: 1;
    cursor: pointer;
    > svg {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }
  }
  > div:first-child {
    text-align: right;
    margin-right: 1rem;
  }
  > div:last-child {
    text-align: left;
    margin-left: 1rem;
  }
`;

const Footer = styled.div`
  font-size: 1rem;
`;

const CloseButton = styled.span`
  a {
    position: fixed;
    right: 2rem;
    top: 2rem;
    font-size: 3rem;
  }
`;

const Default = ({ showSignIn, showSignUp }) => (
  <Fragment>
    <CloseButton>
      <a href="#">&times;</a>
    </CloseButton>
    <img src={logo} width="100" />
    <h2>Welcome!</h2>
    <DynamicComponentWithNoSSR />
    <EmailOptions>
      <div onClick={showSignIn}>
        <FaEnvelope /> LOGIN
      </div>
      <div onClick={showSignUp}>
        <FaUserCircle /> CREATE
      </div>
    </EmailOptions>
    <Footer>
      By signing up, you agree to our <a href="#terms">Terms of Service</a> and{" "}
      <a href="#privacy">Privacy policy</a>.
    </Footer>
  </Fragment>
);

class SignInPopUp extends Component {
  state = {
    type: "default"
  };

  changeState = type => {
    this.setState({
      type
    });
  };

  showPopUpContent = () => {
    const { type } = this.state;
    if (type === "default") {
      return (
        <Default
          showSignIn={() => this.changeState("signin")}
          showSignUp={() => this.changeState("signup")}
        />
      );
    }
    if (type === "signin") {
      return (
        <SignIn
          back={() => this.changeState("default")}
          forgot={() => this.changeState("forgot")}
        />
      );
    }
    if (type === "signup") {
      return <SignUp back={() => this.changeState("default")} />;
    }
    return <RequestReset back={() => this.changeState("signin")} />;
  };

  render() {
    return (
      <PopUpDialog id="signin-popup">
        <div>{this.showPopUpContent()}</div>
      </PopUpDialog>
    );
  }
}

export { CloseButton, SignInPopUp as default };
