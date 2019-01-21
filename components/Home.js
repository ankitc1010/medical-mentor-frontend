import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

import Testimonials from "./Testimonials";
import BuyNow from "./BuyNow";

import Input from "./styles/Input";
import SmallButton from "./styles/Button";
import MentorHeading from "./styles/Heading";

import banner from "./img/banner.png";
import engineer from "./img/engineer.png";
import doctor from "./img/doctor.png";
import engineeringmentor from "./img/engineeringmentor.png";
import medicalmentor from "./img/medicalmentor.png";
import questions from "./img/questions.png";

import psychometric from "./img/psychometric.png";
import testseries from "./img/testseries.png";

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
    font-size: 2rem !important;
    font-family: "Futura" !important;
    margin: 0;
  }
`;

const Heading2 = styled.div`
  text-align: center;
  margin-top: 4rem;
  h2 {
    font-weight: normal;
    display: inline-block;
    line-height: 1;
    font-family: "Rockwell";
    font-size: 3.5rem;
    margin: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  margin: 1rem 2rem;
  padding: 1rem 2rem;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(158, 158, 158, 1);
  -moz-box-shadow: 0px 2px 5px 0px rgba(158, 158, 158, 1);
  box-shadow: 0px 2px 5px 0px rgba(158, 158, 158, 1);
  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 5rem;
      height: 5rem;
    }
    h3 {
      font-weight: normal;
      font-size: 2rem;
    }
  }
  p {
    font-family: "Futura";
    text-align: left;
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 1.5;
    margin-top: 2rem;
  }
  > div:first-child {
    text-align: ${props => (props.type === "engineer" ? "left" : "right")};
    @media (max-width: 600px) {
      text-align: center;
    }
  }
  > div:nth-child(3) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    > h3 {
      line-height: 1.5;
      font-family: "Futura";
    }
    button {
      margin-top: 1rem;
    }
    img {
      width: ${props => (props.type === "engineer" ? "80%" : "100%")};
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      img {
        width: ${props => (props.type === "engineer" ? "40%" : "50%")};
      }
      > div {
        grid-row-start: 1;
      }
    }
  }
  @media (max-width: 600px) {
    margin: 2rem 0;
    padding: 2rem 1rem;
  }
`;

const Subscription = styled.section`
  text-align: center;
  color: ${props =>
    props.type === "engineer" ? props.theme.black : props.theme.white};
  background: ${props =>
    props.type === "engineer" ? props.theme.secondary : props.theme.primary};
  padding: 2rem 1rem;
  position: relative;
  margin: 2rem 0rem;
  font-family: "Futura";
  h2 {
    font-size: 3rem;
    font-family: "Rockwell";
    font-weight: normal;
  }
  > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      padding: 1rem;
    }
  }
  > div:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
      flex-direction: column;
      margin: 1rem;
    }
  }
  > div:last-child {
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
    pointer-events: none;
  }
`;

const Home = () => (
  <Fragment>
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
      <img src={banner} style={{ width: "100%" }} />
    </section>
    <section>
      <Heading2>
        <h2>Our Programs</h2>
      </Heading2>
      <SubHeading>
        <h2>Career Counselling Programs for Students</h2>
      </SubHeading>
      <Grid>
        <Card>
          <div>
            <img src={medicalmentor} width="220" />
          </div>
          <MentorHeading>
            <h3>
              <ul>
                <li>
                  Confused about the admissions process into good medical
                  colleges?
                </li>
                <li>Looking for guidance to understand your NEET Scores?</li>
                <li>
                  Have doubts about your eligibility to apply for other state
                  medical seats?
                </li>
              </ul>
              <img src={questions} />
              <div />
            </h3>
          </MentorHeading>
          <div>
            <h3>
              We have all the answers!
              <br />
              Discuss your future with your Medical Mentor over a cup of coffee!
              <br />
              <Link href="/medical" prefetch>
                <SmallButton>Know More</SmallButton>
              </Link>
            </h3>
            <div>
              <img src={doctor} />
            </div>
          </div>
        </Card>
        <Card type="engineer">
          <div>
            <img src={engineeringmentor} width="220" />
          </div>
          <MentorHeading type="engineer">
            <h3>
              <ul>
                <li>Confused about which college to enroll for?</li>
                <li>
                  Want to know more about JEE, BITSAT, VITEEE, KCET and others?
                </li>
                <li>Unsure about the specializations and career prospects?</li>
              </ul>
              <img src={questions} />
              <div />
            </h3>
          </MentorHeading>
          <div>
            <div>
              <img src={engineer} />
            </div>
            <h3>
              We have all the answers!
              <br />
              Discuss your future with your Engineering Mentor over a cup of
              coffee!
              <br />
              <Link href="/engineering" prefetch>
                <SmallButton type="engineer">Know More</SmallButton>
              </Link>
            </h3>
          </div>
        </Card>
        <Card>
          <span>
            <img src={psychometric} />
            <h3>Engineering Psychometric Test</h3>
          </span>
          <MentorHeading type="engineer">
            <h3>
              <ul>
                <li>
                  Confused what branch to opt for in your Engineering Career?
                </li>
                <li>Worried that you will pick a wrong stream?</li>
              </ul>
              <img src={questions} />
              <div />
            </h3>
          </MentorHeading>
          <p>
            We have the answer, just give this test and know what stream you
            should opt for.
          </p>
          <p>
            <BuyNow id="cjr4nz6y5001r0874qf5e9bbv" type="engineer" />
          </p>
        </Card>
      </Grid>
    </section>
    <Subscription>
      <h2>Subscribe to our Newsletter</h2>
      <div>
        <div>
          <input type="radio" /> Engineering Students
        </div>
        <div>
          <input type="radio" /> Medical Students
        </div>
      </div>
      <div>
        <Input placeholder="Enter Your Email" />
        <SmallButton>Subscribe</SmallButton>
      </div>
      <div />
    </Subscription>
    <Subscription type="engineer">
      <Heading2>
        <h2>Testimonials</h2>
      </Heading2>
      <SubHeading>
        <h2>Here what our customers have to say about us.</h2>
      </SubHeading>
      <Testimonials />
      <div />
    </Subscription>
  </Fragment>
);

export {
  Heading,
  Heading2,
  SubHeading,
  Grid,
  Card,
  MentorHeading,
  Home as default
};
