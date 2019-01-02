import React, { Fragment } from "react";
import styled, { css } from "styled-components";

import SmallButton from "./styles/Button";
import MentorHeading from "./styles/Heading";

import banner from "./img/banner.png";
import engineer from "./img/engineer.png";
import doctor from "./img/doctor.png";
import engineeringmentor from "./img/engineeringmentor.png";
import medicalmentor from "./img/medicalmentor.png";
import questions from "./img/questions.png";

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
  > div:first-child {
    text-align: ${props => (props.type === "engineer" ? "left" : "right")};
  }
  > div:nth-child(3) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    > h3 {
      line-height: 1.5;
    }
    button {
      margin-top: 1rem;
    }
    img {
      width: 100%;
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      img {
        width: 50%;
      }
      > div {
        grid-row-start: 1;
      }
    }
  }
  @media (max-width: 600px) {
    margin: 0;
    padding: 0.5rem 1rem;
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
              <SmallButton>Know More</SmallButton>
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
            <div>
              <img src={engineer} />
            </div>
            <h3>
              We have all the answers!
              <br />
              Discuss your future with your Engineering Mentor over a cup of
              coffee!
              <br />
              <SmallButton type="engineer">Know More</SmallButton>
            </h3>
          </div>
        </Card>
      </Grid>
    </section>
  </Fragment>
);

export default Home;
