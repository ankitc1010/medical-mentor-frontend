import React, { Component } from "react";
import { Mutation } from "react-apollo";
import NProgress from "nprogress";
import Router from "next/router";
import gql from "graphql-tag";

import { CURRENT_USER_QUERY } from "./User";
import Error from "./ErrorMessage";

import calculatePrice from "../lib/calcTotalPrice";

import Button from "./styles/Button";

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($id: String!, $paymentId: String!) {
    createOrder(id: $id, paymentId: $paymentId) {
      id
    }
  }
`;

class CheckoutButton extends Component {
  state = {
    payment_amount: 2000
  };
  handlePayments = async (e, createOrder) => {
    e.preventDefault();

    const { product, user } = this.props;
    const amount = calculatePrice(product.price);
    const self = this;
    const options = {
      key: "rzp_test_6JG1xgZpLNa1jx",
      amount: amount,
      name: product.name,
      description: product.description,

      async handler(response) {
        const paymentId = response.razorpay_payment_id;
        console.log(paymentId);
        NProgress.start();
        // Using my server endpoints to capture the payment
        try {
          const order = await createOrder({
            variables: {
              id: product.id,
              paymentId
            }
          });
          console.log(order);
          NProgress.done();
          Router.push("/me");
        } catch (e) {
          console.log(e);
        }
      },

      prefill: {
        name: user.name,
        email: user.email
      },
      notes: {
        address: "Bengaluru,India"
      },
      theme: {
        color: "#f9BD21"
      }
    };
    const rzp1 = new window.Razorpay(options);

    rzp1.open();
  };
  render() {
    console.log(this.props);
    return (
      <Mutation
        mutation={CREATE_ORDER_MUTATION}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(createOrder, { error, loading }) => {
          if (error) {
            console.log(error);
            return <Error error={error} />;
          }
          if (loading) return <div>Loading</div>;
          return (
            <div onClick={e => this.handlePayments(e, createOrder)}>
              <Button>Checkout</Button>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default CheckoutButton;
