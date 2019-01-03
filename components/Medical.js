import React, { Component } from "react";
import styled from "styled-components";

import { MentorHeading } from "./Home";
import questions from "./img/questions.png";

import logo from "./img/medicalmentor.png";
import doctor from "./img/doctor.png";

const Header = styled.header`
  text-align: center;
  > img:first-child {
    width: 30rem;
  }
`;

const Facts = styled.div`
  display: inline-block;
  > div {
    display: table;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 2rem 1rem;
    border-bottom: 4px solid ${props => props.theme.secondary};
    div {
      display: table-row;
      flex-direction: row;
      align-items: inherit;
      font-size: 3rem;

      > div:first-child {
        display: table-cell;
        text-align: right;
        font-weight: bold;
        margin-right: 1rem;
        padding-right: 1rem;
      }
      > div:last-child {
        display: table-cell;
        text-align: left;
        font-weight: normal;
        font-size: 2rem;
      }
    }
  }
`;

const TagLine = styled.div`
  .small {
    font-size: 1rem;
  }
  .medium {
    font-size: 1.5rem;
  }
  .large {
    font-size: 2rem;
  }
  .larger {
    font-size: 2.5rem;
  }
  .largest {
    font-size: 3rem;
  }
  .primary {
    color: ${props => props.theme.primary};
  }
  .secondary {
    color: ${props => props.theme.secondary};
  }
`;

const Dock = styled.div`
  position: relative;
  display: inline-block;
  max-width: 100rem;
  > div {
    display: flex;
    > div:first-child {
      position: relative;
      flex-grow: 2;
      left: -15rem;
      width: 600%;
    }
    > div:last-child {
      height: 1px;
      position: relative;
      flex-grow: 1;
      width: 50%;
      img {
        position: absolute;
        left: -15rem;
        top: -20rem;
      }
    }
  }
  @media (max-width: 850px) {
    > div {
      display: flex;
      flex-direction: column-reverse;
      > div:first-child {
        position: relative;
        flex-grow: 1;
        left: 0;
        width: 100%;
      }
      > div:last-child {
        height: inherit;
        position: relative;
        flex-grow: 1;
        width: 100%;
        img {
          position: relative;
          width: 40%;
          left: 0rem;
          top: 0rem;
        }
      }
    }
  }
`;

class Medical extends Component {
  render() {
    return (
      <div>
        <Header>
          <img src={logo} />
          <br />
          <Facts>
            <div>
              <div>
                <div>90,000</div>
                <div>MBBS & BDS Seats!</div>
              </div>
              <div>
                <div>13,00,000</div>
                <div>Aspirants!</div>
              </div>
            </div>
          </Facts>
          <TagLine>
            <h1 className="primary">
              <span className="larger secondary">Preparing</span>{" "}
              <span className="small">for</span>{" "}
              <span className="larger">NEET</span>{" "}
              <span className="medium">is tough</span>,
              <br />{" "}
              <span className="largest">
                {" "}
                but the <span className="secondary">competition</span>
              </span>
              <br /> <span className="large">for seats is even tougher!!</span>
            </h1>
          </TagLine>
          <Dock>
            <div>
              <MentorHeading>
                <h3>
                  <ul>
                    <li>Confused about which college to enroll for?</li>
                    <li>
                      Want to know more about JEE, BITSAT, VITEEE, KCET and
                      others?
                    </li>
                    <li>
                      Unsure about the specializations and career prospects?
                    </li>
                  </ul>
                  <img src={questions} />
                  <div />
                </h3>
              </MentorHeading>
              <div>
                <img src={doctor} />
              </div>
            </div>
          </Dock>
        </Header>
      </div>
    );
  }
}

export default Medical;
