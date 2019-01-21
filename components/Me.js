import React, { Component, Fragment } from "react";
import styled from "styled-components";
import User from "./User";

const Header = styled.div`
  display: flex;
  background: ${props => props.theme.secondary};
  padding: 2rem;
  max-width: 100rem;
  align-items: center;
  margin: 0 auto;
  img {
    border-radius: 50%;
  }
  h2 {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
  }
  > div:nth-child(2) {
    margin-left: 2rem;
    margin-top: 2rem;
  }
`;

const Body = styled.div`
  display: flex;
  max-width: 100rem;
  margin: 0 auto;
  @media (max-width: 40rem) {
    flex-direction: column;
  }
  > div:first-child {
    background: ${props => props.theme.primary};
    min-height: 50rem;
    @media (max-width: 40rem) {
      min-height: 1rem;
    }
    color: ${props => props.theme.white};
    ul {
      text-decoration: none;
      margin: 0;
      list-style-type: none;
      padding: 0;
      > li {
        padding: 2rem 3rem;
      }
    }
  }
  > div:last-child {
    padding: 2rem;
    flex-grow: 1;
    > div {
      display: flex;
      margin: 2rem 0;
      border-bottom: 1px solid ${props => props.theme.black};
      > div:first-child {
        span {
          background: ${props => props.theme.primary};
          color: ${props => props.theme.secondary};
          padding: 1rem 1.2rem;
          padding-top: 1.5rem;
          border-radius: 50%;
          position: relative;
          top: 1rem;
        }
      }
      > div:last-child {
        margin-left: 2rem;

        h5 {
          padding: 0;
          margin: 0;
          font-size: 2rem;
        }
        > p:nth-child(2) {
          margin: 0.5rem 0rem;
        }
      }
    }
  }
`;

const TestSection = styled.div`
  h4 {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  a {
    padding: 1rem 4rem;
    padding-top: 1.4rem;
    display: inline-block;
    font-size: 1.8rem;
    background: ${props => props.theme.secondary};
    color: ${props => props.theme.white};
    margin-bottom: 1rem;
  }
`;

class Me extends Component {
  render() {
    return (
      <User>
        {({ data: { me } }) => (
          <div>
            <Header>
              <div>{me.profilePic ? <img src={me.profilePic} /> : null}</div>
              <div>
                <h2>{me.name}</h2>
                <p>{me.email}</p>
              </div>
            </Header>
            <Body>
              <div>
                <ul>
                  <li>Programs</li>
                </ul>
              </div>
              <div>
                <h3>{me.orders.length ? null : "No programs purchased"}</h3>
                {me.orders.map(({ product, amount }, id) => (
                  <div key={id}>
                    <div>
                      <span>{id}</span>
                    </div>
                    <div>
                      <h5>{product.title}</h5>
                      <p>
                        Purchased in &#8377;{" "}
                        {parseFloat(amount * 0.01).toFixed(2)}/-
                      </p>
                      <p>{product.description}</p>
                      {product.tests.length > 0 && (
                        <TestSection>
                          <h4>Tests you are elgibile for-</h4>
                          <p>{`(Register on the link below and wait for us to give you access from the backend)`}</p>
                          {product.tests.map(test => (
                            <a href={test} target="_blank">
                              Link
                            </a>
                          ))}
                        </TestSection>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Body>
          </div>
        )}
      </User>
    );
  }
}

export { Me as default };
