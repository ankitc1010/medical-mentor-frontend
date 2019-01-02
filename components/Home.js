import React from "react";
import styled from "styled-components";

import banner from "./img/medical.svg";

const Heading = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-top: 2rem;
  h1 {
    font-weight: normal;
    display: inline-block;
    position: relative;
    margin: 0 auto;
    background: ${props => props.theme.secondary};
    color: ${props => props.theme.primary};
    padding: 0.8rem 2rem;
    line-height: 1;
    font-size: 4rem;
    padding-top: 1.4rem;
    > div {
      width: 96%;
      height: 100%;
      height: inherit;
      border: 1px solid black;
      position: absolute;
      top: 0px;
      bottom: 0;
      left: 1rem;
      right: -4rem;
      transform: rotate(2deg);
    }
  }
`;

const SubHeading = styled.div`
  text-align: center;
  margin: 2rem auto;
  h2 {
    font-weight: normal;
    display: inline-block;
    line-height: 1;
    font-family: "Futura";
  }
`;

const Home = () => (
  <section>
    <Heading>
      <h1>
        Your True Education Partner
        <div />
      </h1>
    </Heading>
    <SubHeading>
      <h2>
        Take the world's most-advanced
        <br />
        career assessment and find your best-fit career
      </h2>
    </SubHeading>
    <img src={banner} />
  </section>
);

export default Home;
