import React, { Component, Fragment } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Router from "next/router";

import { FaAngleLeft } from "react-icons/fa";

import Form, { BackButton } from "./styles/Form";

import { CloseButton } from "./RegistrationPopUp";
import Error from "./ErrorMessage";

import { CURRENT_USER_QUERY } from "./User";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    name: ""
  };

  saveToState = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSignUp = async (e, signup) => {
    e.preventDefault();
    const user = await signup();
    location.hash = "signed-up";
    Router.push({
      pathname: "/"
    });
  };

  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading }) => (
          <Fragment>
            <CloseButton>
              <a href="#">&times;</a>
            </CloseButton>
            <Form method="post" onSubmit={e => this.handleSignUp(e, signup)}>
              <fieldset disabled={loading} aria-busy={loading}>
                <BackButton onClick={this.props.back}>
                  <FaAngleLeft />
                </BackButton>
                <h2>
                  Create an <br />
                  account
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
                <label htmlFor="name">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.saveToState}
                  />
                  <span>Name</span>
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
                <button type="submit">Submit</button>
              </fieldset>
            </Form>
          </Fragment>
        )}
      </Mutation>
    );
  }
}

export default SignUp;
