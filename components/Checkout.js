import React, { Component, Fragment } from "react";
import { Query, Mutation } from "react-apollo";
import Head from "next/head";
import styled from "styled-components";
import gql from "graphql-tag";
import Router from "next/router";
import formatMoney from "../lib/formatMoney";

import CheckoutButton from "./CheckoutButton";
import Error from "./ErrorMessage";

const PRODUCT_QUERY = gql`
  query PRODUCT_QUERY($id: String!) {
    product(id: $id) {
      id
      title
      description
      image
      largeImage
      price
    }
  }
`;

const CheckoutStyle = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  > div:nth-child(2) {
    display: flex;
    > div:last-child {
      margin-left: 2rem;
      text-align: right;
      h2 {
        text-align: right;
        font-size: 2.5rem;
      }
    }
  }
  > div:last-child {
    display: flex;
    > div:first-child {
      font-size: 2rem;
      width: 25rem;
    }
  }
`;

class Checkout extends Component {
  render() {
    console.log(this.props);
    const { query, user } = this.props;
    return (
      <Query query={PRODUCT_QUERY} variables={{ id: query.id }}>
        {res => {
          const { data, error, loading } = res;
          if (loading) {
            return <div>Loading</div>;
          }
          if (error) {
            return <Error error={error} />;
          }
          const {
            product: { id, title, description, image, largeImage, price }
          } = data;
          return (
            <CheckoutStyle>
              <Head>
                <script src="https://checkout.razorpay.com/v1/checkout.js" />
              </Head>
              <h1>Checkout</h1>
              <div>
                <div>
                  <img src={image} alt="product" width="250" />
                </div>
                <div>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
              </div>
              <div>
                <div>Total</div>
                <div>{price}</div>
              </div>
              <CheckoutButton product={data.product} user={user} />
            </CheckoutStyle>
          );
        }}
      </Query>
    );
  }
}

export default Checkout;
