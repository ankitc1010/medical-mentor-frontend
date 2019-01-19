import React, { Component } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import Head from "next/head";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";

import "react-toastify/dist/ReactToastify.css";

import { MentorHeading, Heading } from "./Home";

import neethelp from "./img/neethelp.jpg";
import questions from "./img/questions.png";

const NeetHelpSection = styled.section`
  max-width: 70rem;
  margin: 0 auto;
  > img {
    width: 100%;
    margin: 2rem 0;
    border: 1px solid grey;
  }
`;

const CREATE_NEET_HELP_MUTATION = gql`
  mutation CREATE_NEET_HELP_MUTATION(
    $email: String!
    $name: String!
    $phonenumber: String!
    $info: String
  ) {
    createNeetHelp(
      data: {
        email: $email
        name: $name
        phonenumber: $phonenumber
        info: $info
      }
    ) {
      id
      name
    }
  }
`;

class NeetHelp extends Component {
  state = {
    name: "",
    email: "",
    phonenumber: "",
    info: ""
  };
  handleSubmit = async (e, createNeetHelp) => {
    e.preventDefault();
    try {
      const res = await createNeetHelp({
        variables: {
          ...this.state
        }
      });
      this.setState({
        name: "",
        email: "",
        phonenumber: "",
        info: ""
      });
      toast.success("Success! Your form submitted.");
    } catch (e) {
      this.setState({
        name: "",
        email: "",
        phonenumber: "",
        info: ""
      });
      toast.success("Success! Your form is already submitted.");
    }
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <NeetHelpSection>
        <Heading>
          <h1>
            NEET Application Correction
            <div />
          </h1>
        </Heading>
        <img src={neethelp} />
        <MentorHeading type="medical">
          <h3>
            <ul>
              <li>Doubt in NEET application correction?</li>
              <li>Don't know what Qualifying Examination code to put?</li>
              <li>Not sure about state of domicile for AIQ 15% seats?</li>
            </ul>
            <img src={questions} />
            <div />
          </h3>
        </MentorHeading>
        <Mutation mutation={CREATE_NEET_HELP_MUTATION}>
          {(createNeetHelp, { error, loading }) => {
            return (
              <Form onSubmit={e => this.handleSubmit(e, createNeetHelp)}>
                <Head>
                  <title>NEET Application Correction | Career Shapers</title>
                  <meta
                    name="description"
                    content="Assiting you in making your NEET aspirations, possible."
                  />
                </Head>
                <fieldset disabled={loading} aria-busy={loading}>
                  <h2>Contact Form</h2>
                  <p>
                    If you are facing problems with the NEET process, we are
                    there to help you
                  </p>
                  <label htmlFor="name">
                    Name
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={this.state.name}
                      onChange={this.saveToState}
                      required
                    />
                  </label>
                  <label htmlFor="password">
                    Phone Number
                    <input
                      type="number"
                      name="phonenumber"
                      placeholder="Phone Number"
                      required
                      value={this.state.phonenumber}
                      onChange={this.saveToState}
                    />
                  </label>
                  <label htmlFor="password">
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      value={this.state.email}
                      onChange={this.saveToState}
                    />
                  </label>
                  <label htmlFor="password">
                    Additional Information
                    <textarea
                      type="text"
                      name="info"
                      placeholder="Additional Information"
                      required
                      value={this.state.info}
                      onChange={this.saveToState}
                    />
                  </label>

                  <button type="submit">
                    {loading ? "Submitting!" : "Contact Me, Now!"}
                  </button>
                </fieldset>
              </Form>
            );
          }}
        </Mutation>
        <ToastContainer />
      </NeetHelpSection>
    );
  }
}

export default NeetHelp;
