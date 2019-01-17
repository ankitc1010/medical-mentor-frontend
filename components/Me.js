import React, { Component } from "react";
import styled from "styled-components";
import User from "./User";

const Header = styled.div`
  display: flex;
  background: ${props => props.theme.secondary};
  padding: 2rem;
  max-width: 100rem;
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
  > div:first-child {
    background: ${props => props.theme.primary};
    min-height: 50rem;
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
                <p>+91-8105630497</p>
              </div>
            </Header>
            <Body>
              <div>
                <ul>
                  <li>Courses</li>
                </ul>
              </div>
              <div>
                <h3>No courses selected</h3>
              </div>
            </Body>
          </div>
        )}
      </User>
    );
  }
}

export { Me as default };
