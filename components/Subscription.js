import React, { Component } from "react";
import Recaptcha from "react-recaptcha";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";

import { Subscription, Input } from "./Home";
import SmallButton from "./styles/Button";

import "react-toastify/dist/ReactToastify.css";

const CREATE_SUBSCRIPTION_MUTATION = gql`
  mutation CREATE_SUBSCRIPTION_MUTATION($email: String!, $type: String!) {
    createSubscription(data: { email: $email, type: $type }) {
      id
      email
      type
    }
  }
`;

class SubscriptionComponent extends Component {
  state = {
    isVerified: false,
    email: "",
    type: "engineer"
  };
  verifyCallback = () => {
    console.log("Verified");
    this.setState({
      isVerified: true
    });
  };
  callback = () => {
    console.log("Loaded Recaptcha");
  };
  changeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleSubmit = async createSubscription => {
    console.log("hello");

    if (this.state.email.includes("@") && this.state.isVerified) {
      console.log("hello");
      const subscription = await createSubscription({
        variables: {
          email: this.state.email,
          type: this.state.type
        }
      });
      toast.success("Subscribed successfully");
      this.setState({
        email: ""
      });
    }
  };

  changeRadio = e => {
    this.setState({
      type: e.target.value
    });
  };
  render() {
    const { email, type } = this.state;
    return (
      <Mutation mutation={CREATE_SUBSCRIPTION_MUTATION}>
        {(createSubscription, { loading, error }) => (
          <Subscription>
            <h2>Subscribe to our Newsletter</h2>
            <div>
              <div>
                <input
                  type="radio"
                  name="cool"
                  checked={type === "engineer"}
                  value="engineer"
                  onChange={this.changeRadio}
                />{" "}
                Engineering Students
              </div>
              <div>
                <input
                  type="radio"
                  name="cool"
                  checked={type === "medical"}
                  value="medical"
                  onChange={this.changeRadio}
                />{" "}
                Medical Students
              </div>
            </div>
            <div>
              <Recaptcha
                sitekey="6LfomIsUAAAAAMLrqrd22mnQTELlSdvqgI919szw"
                render="explicit"
                verifyCallback={this.verifyCallback}
                onloadCallback={this.callback}
              />
            </div>
            <div>
              <Input
                placeholder="Enter Your Email"
                type="email"
                onChange={this.changeEmail}
                value={email}
              />
              <SmallButton
                onClick={() => this.handleSubmit(createSubscription)}
              >
                Subscribe
              </SmallButton>
            </div>
            <ToastContainer />
            <div />
          </Subscription>
        )}
      </Mutation>
    );
  }
}

export { SubscriptionComponent as default };
