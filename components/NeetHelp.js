import React, { Component } from "react";
import Head from "next/head";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";

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
    createNeetHelp({
      variables: {
        ...this.state
      }
    });
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <Mutation mutation={CREATE_NEET_HELP_MUTATION}>
          {(createNeetHelp, { error, loading }) => {
            return (
              <Form onSubmit={e => this.handleSubmit(e, createNeetHelp)}>
                <Head>
                  <title>NEET Help | Career Shapers</title>
                  <meta
                    name="description"
                    content="Assiting you in making your NEET aspirations, possible."
                  />
                </Head>
                <fieldset>
                  <h2>NEET HELP FORM</h2>
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

                  <button type="submit">Contact Me, Now!</button>
                </fieldset>
              </Form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default NeetHelp;
