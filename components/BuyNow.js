import React, { Component } from "react";
import styled from "styled-components";
import Router from "next/router";
import User from "./User";

const Button = styled.a`
  display: inline-block;
  background: ${props =>
    props.type === "engineer" ? props.theme.primary : props.theme.secondary};
  color: ${props =>
    props.type === "engineer" ? props.theme.white : props.theme.primary};
  font-family: "Rockwell";
  padding: 1.2rem 3rem;
  cursor: pointer;
`;

class BuyNow extends Component {
  handleSubmit = me => {
    console.log(me);
    if (!me) {
      return (location.hash = "signin-popup");
    }
    Router.push({
      pathname: "/checkout",
      query: { id: this.props.id }
    });
  };

  render() {
    return (
      <User>
        {({ data: { me } }) => (
          <Button onClick={() => this.handleSubmit(me)} type={this.props.type}>
            Buy Now
          </Button>
        )}
      </User>
    );
  }
}

export default BuyNow;
