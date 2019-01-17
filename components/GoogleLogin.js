import React, { Component } from "react";
import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import GoogleLogin from "react-google-login";
import NProgress from "nprogress";

import { CURRENT_USER_QUERY } from "./User";

const GOOGLE_LOGIN_MUTATION = gql`
  mutation GOOGLE_LOGIN_MUTATION(
    $email: String!
    $name: String!
    $googleId: String!
    $accessToken: String!
    $imageUrl: String!
  ) {
    googleLogin(
      email: $email
      name: $name
      googleId: $googleId
      accessToken: $accessToken
      imageUrl: $imageUrl
    ) {
      id
      name
      email
    }
  }
`;

class GoogleLoginButton extends Component {
  responseGoogleSuccess = async (res, client) => {
    const { accessToken, profileObj } = res;
    const { email, name, googleId, imageUrl } = profileObj;
    console.log("Login Initiated");
    console.log({ email, name, googleId, imageUrl });
    NProgress.start();
    const user = await client.mutate({
      mutation: GOOGLE_LOGIN_MUTATION,
      variables: {
        email,
        name,
        googleId,
        imageUrl,
        accessToken
      },
      refetchQueries: [
        {
          query: CURRENT_USER_QUERY
        }
      ]
    });
    location.hash = "";
    console.log(user);
    NProgress.done();
  };

  responseGoogleError = res => {
    console.log(res);
  };
  render() {
    return (
      <ApolloConsumer>
        {client => (
          <GoogleLogin
            clientId="345968789465-ogdsaka2mafg7agth5f37t4lj1doo699.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={res => this.responseGoogleSuccess(res, client)}
            onFailure={res => this.responseGoogleError(res, client)}
          />
        )}
      </ApolloConsumer>
    );
  }
}

export default GoogleLoginButton;
