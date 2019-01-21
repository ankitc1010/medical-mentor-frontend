import React, { Component, Fragment } from "react";
import { Query, Mutation } from "react-apollo";
import Head from "next/head";
import styled from "styled-components";
import gql from "graphql-tag";
import Router from "next/router";
import formatMoney from "../lib/formatMoney";

import calculatePrice from "../lib/calcTotalPrice";

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
  max-width: 80rem;
  margin: 0 auto;
  margin-bottom: 4rem;
  > h1 {
    font-weight: normal;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.black};
    margin-bottom: 4rem;
  }
  > div:nth-child(2) {
    > div:first-child {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid ${props => props.theme.black};
      @media (max-width: 40rem) {
        flex-direction: column;
      }
      > div {
        width: 25rem;
        text-align: center;
        @media (max-width: 40rem) {
          text-align: left;
        }
        img {
          width: 80%;
          margin: 0 auto;
          @media (max-width: 40rem) {
            width: 50%;
            margin: 0;
            margin-left: 2rem;
            margin-bottom: 2rem;
          }
        }
      }
      > div:last-child {
        margin-left: 2rem;
        text-align: left;
        font-family: "Futura";
        flex-grow: 1;
        h2 {
          text-align: left;
          margin-top: 0;
          font-weight: normal;
          font-size: 2.5rem;
        }
        p {
          line-height: 1.2;
          font-size: 1.7rem;
        }
      }
    }
    > div:nth-child(2) {
      font-family: "Futura";
      margin: 1rem 2rem;
      > div {
        display: flex;
        margin: 0.5rem 0rem;
        @media (max-width: 40rem) {
          justify-content: space-between;
        }
        > div:first-child {
          width: 25rem;
          @media (max-width: 40rem) {
            width: auto;
          }
        }
      }
      > div:last-child {
        border-top: 4px solid ${props => props.theme.black};
        margin: 1.5rem 0rem;
        padding: 1.5rem 0rem;
        font-size: 2.5rem;
        @media (max-width: 40rem) {
          font-size: 2rem;
          display: flex;
          justify-content: space-between;
        }
        > div:first-child {
          @media (max-width: 40rem) {
            width: auto;
          }
        }
      }
    }
    > div:last-child {
      display: flex;
      margin-left: 27rem;
      @media (max-width: 40rem) {
        justify-content: right;
        margin-left: 2rem;
      }
      > div:first-child {
        font-size: 2rem;
        width: 25rem;
      }
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
                  <div>
                    <img src={image} alt="product" />
                  </div>
                  <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <div>Base Price</div>
                    <div>&#x20b9; {price}/-</div>
                  </div>
                  <div>
                    <div>Transaction Charges</div>
                    <div>
                      &#x20b9;{" "}
                      {parseFloat(calculatePrice(price) * 0.01 - price).toFixed(
                        2
                      )}
                      /-
                    </div>
                  </div>
                  <div>
                    <div>Total</div>
                    <div>
                      &#x20b9;{" "}
                      {parseFloat(calculatePrice(price) * 0.01).toFixed(2)}/-
                    </div>
                  </div>
                </div>
                <CheckoutButton product={data.product} user={user} />
              </div>
            </CheckoutStyle>
          );
        }}
      </Query>
    );
  }
}

export default Checkout;
