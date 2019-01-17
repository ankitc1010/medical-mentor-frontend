import React, { Component, Fragment } from "react";
import Router from "next/router";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import { FaAngleLeft } from "react-icons/fa";

import Form, { BackButton } from "./styles/Form";

import Error from "./ErrorMessage";
import { CURRENT_USER_QUERY } from "./User";
import { CloseButton } from "./RegistrationPopUp";

const ForgotPassword = styled.a`
  text-decoration: underline;
  font-size: 1rem;
  font-weight: bold;
`;

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  saveToState = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSignIn = async (e, signin) => {
    e.preventDefault();
    const user = await signin();
    window.location.hash = "#signed-in";
    Router.push({
      pathname: "/"
    });
  };

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { error, loading }) => (
          <Fragment>
            <CloseButton>
              <a href="#">&times;</a>
            </CloseButton>
            <Form method="post" onSubmit={e => this.handleSignIn(e, signin)}>
              <fieldset disabled={loading} aria-busy={loading}>
                <BackButton onClick={this.props.back}>
                  <FaAngleLeft />
                </BackButton>
                <h2>
                  Login to <br /> Account
                </h2>
                <Error error={error} />
                <label htmlFor="email">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.saveToState}
                  />
                  <span>Email</span>
                </label>
                <label htmlFor="password">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.saveToState}
                  />
                  <span>Password</span>
                </label>
                <ForgotPassword onClick={this.props.forgot}>
                  Forgot Password?
                </ForgotPassword>
                <button type="submit">Submit</button>
              </fieldset>
            </Form>
          </Fragment>
        )}
      </Mutation>
    );
  }
}

export default SignIn;
