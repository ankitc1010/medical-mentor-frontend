import React, { Component } from "react";
import styled from "styled-components";

import { Heading2, MentorHeading } from "./Home";
import { DialogCircle } from "./Footer";
import questions from "./img/questions.png";

import logo from "./img/medicalmentor.png";
import starscircle from "./img/starscircle.png";
import doctor from "./img/doctor.png";
import seminar from "./img/seminar.png";
import mentorship from "./img/mentorship.png";
import c360 from "./img/medical/pricing/c360.png";

import medical1 from "./img/medical/medical1.png";
import medical2 from "./img/medical/medical2.png";
import medical3 from "./img/medical/medical3.png";
import medical4 from "./img/medical/medical4.png";
import medical5 from "./img/medical/medical5.png";
import medical6 from "./img/medical/medical6.png";
import medical7 from "./img/medical/medical7.png";
import medical8 from "./img/medical/medical8.png";

import mp1 from "./img/medical/pricing/m1.png";
import mp2 from "./img/medical/pricing/m2.png";
import mp3 from "./img/medical/pricing/m3.png";
import mp4 from "./img/medical/pricing/m4.png";
import mp5 from "./img/medical/pricing/m5.png";
import mp6 from "./img/medical/pricing/m6.png";
import mp7 from "./img/medical/pricing/m7.png";
import mp8 from "./img/medical/pricing/m8.png";

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
  .grey {
    color: ${props => props.theme.grey};
  }
  .black {
    color: ${props => props.theme.black};
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
        left: ${props => (props.type === "engineer" ? "-12rem" : "-15rem")};
        top: ${props => (props.type === "engineer" ? "-15rem" : "-20rem")};
        width: ${props => (props.type === "engineer" ? "600%" : "initial")};
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
          width: 50%;
          left: 0rem;
          top: 0rem;
        }
      }
    }
  }
`;

const Section = styled.div`
  margin: 0 auto;
  text-align: center;
  padding-top: 4rem;
`;

const DockSeminar = styled.div`
  position: relative;
  display: inline-block;
  max-width: 100rem;
  height: 50rem;
  > div {
    display: flex;
    > div:first-child {
      position: relative;
      width: 50%;
      height: 100%;
      > img {
        width: 45rem;
        position: absolute;
        left: 8rem;
        top: 10rem;
      }
      > div {
        position: absolute;
        width: 100%;
        left: ${props => (props.type === "mentorship" ? "-3rem" : "34rem")};
        top: -4rem;
        width: 20rem;
        height: 20rem;
        padding: 2rem;
        > img {
          top: -3.5rem;
          left: -0.5rem;
        }
      }
    }
    > div:last-child {
      height: 1px;
      position: relative;
      width: 50%;
      top: 17rem;
      left: 5rem;
      > div {
        > h2 {
          width: 70%;
        }
      }
      > p {
        width: 70%;
      }
    }
  }
  @media (max-width: 850px) {
    height: 100%;
    > div {
      flex-direction: column;
      > div:first-child {
        width: 100%;
        display: block;
        height: 100%;
        text-align: center;
        padding-top: 10rem;
        position: relative;
        @media (max-width: 440px) {
          padding-top: 20rem;
        }
        > img {
          width: 70%;
          position: relative;
          top: 0;
          left: 0;
        }
        > div {
          position: absolute;
          width: 20rem !important;
          height: 15rem !important;
          left: 50%;
          top: -4rem;
          width: 20rem;
          height: 20rem;
          padding: 2rem;
          font-size: 1.2rem;
          @media (max-width: 440px) {
            left: 20%;
          }
          > img {
            top: -5.5rem;
            left: -0.5rem;
          }
        }
      }
      > div:last-child {
        position: relative;
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        > div {
          > h2 {
            width: 100%;
          }
        }
        > p {
          width: 100%;
        }
      }
    }
  }
`;

const Paragraph = styled.p`
  font-family: "Futura";
  width: inherit;
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100rem;
  margin: 0 auto;
  margin-top: 4rem;
  @media (max-width: 600px) {
    margin-top: 2rem;
    grid-template-columns: 1fr;
  }
  > div {
    display: flex;
    margin: 2rem;
    @media (max-width: 600px) {
      margin: 1rem 0.5rem;
    }
    > img {
      width: 5rem;
      height: 5rem;
      @media (max-width: 600px) {
        width: 3rem;
        height: 3rem;
      }
    }
    > div {
      text-align: left;
      margin-left: 2rem;
      @media (max-width: 600px) {
        margin-left: 1rem;
      }
      h4 {
        margin: 0;
        padding: 0;
        font-weight: 700;
      }
      > p {
        margin: 0;
        padding: 0;
        font-family: "Futura";
        font-weight: 300;
      }
    }
  }
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100rem;
  margin: 0 auto;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
  .gold {
    background: #fff7ea;
    -webkit-box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.75);
  }
  > div {
    margin: 3rem 2rem;
    @media (max-width: 850px) {
      margin: 3rem 0rem;
      @media (max-width: 700px) {
        margin: 1rem 0;
      }
    }
    > div:first-child {
      font-family: "Futura";
      border-bottom: 1px solid black;
      padding: 1rem;
      > div:first-child {
        margin: 2.5rem 1rem;
      }
      > div:nth-child(3) {
        margin: 1.5rem 0.5rem;
      }
      h4 {
        font-size: 4rem;
        margin: 0;
        padding: 0;
      }
      > a:nth-child(4) {
        display: inline-block;
        background: ${props => props.theme.secondary};
        color: ${props => props.theme.primary};
        font-family: "Rockwell";
        padding: 2rem 3rem;
      }
    }
    > div:last-child {
      text-align: left;
      padding: 2rem 3rem;
      @media (max-width: 850px) {
        padding: 2rem 2rem;
        @media (max-width: 600px) {
          padding: 1rem;
        }
      }
      > div:nth-child(2) {
        > div {
          display: flex;
          margin: 2rem 0;

          img {
            width: 4rem;
            height: initial;
          }
          > div:nth-child(2) {
            margin: 0rem 2rem;
            h5 {
              margin: 0;
              padding: 0;
              font-size: 1.4rem;
              font-family: "Futura";
            }
            p {
              margin: 0;
              padding: 0;
              font-size: 1.3rem;
              font-family: "Futura";
              ul {
                margin: 0.5rem;
                @media (max-width: 600px) {
                  margin: 0;
                  padding: 0;
                  padding-left: 2rem;
                }
              }
            }
          }
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
                    <li>
                      Confused about the admissions process into good medical
                      colleges?
                    </li>
                    <li>
                      Looking for guidance to understand your NEET Scores?
                    </li>
                    <li>
                      Have doubts about your eligibility to apply for other
                      state medical seats?
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
        <Section>
          <Heading2>
            <h2>Seminars & Workshops</h2>
          </Heading2>
          <DockSeminar>
            <div>
              <div>
                <img src={seminar} />
                <DialogCircle type="medical">
                  <p>
                    "Education is our passport to the future. For tomorrow
                    belongs to the people who prepare for it today."
                    <br />
                    -Malcolm X
                  </p>
                  <img src={starscircle} />
                </DialogCircle>
              </div>
              <div>
                <TagLine>
                  <h2 className="grey">
                    <span className="secondary largest">Learn</span>{" "}
                    <span className="grey large">the important stuff</span>
                    <br />
                    Without the <span className="secondary">sweat</span>!
                  </h2>
                </TagLine>
                <Paragraph>
                  Career Shaper's 'Knowledge Series', is a set of workshops and
                  seminars developed exclusively for students perparing for the
                  medical entrance exams and aspiring for a career in the field
                  of medical. These thoughtfull-crafted sessions will cover a
                  wide range of topics that will address concerns, answer
                  queries and clarify doubts of both students and parents.
                </Paragraph>
              </div>
            </div>
          </DockSeminar>
          <GridSection>
            <div>
              <img src={medical1} />
              <div>
                <h4>All about NEET Counselling</h4>
                <p>
                  Students and parents are confused about this stage of the
                  process. Get all your queries about AIQ and Karnataka NEET
                  Counselling answered by our panel of experts.
                </p>
              </div>
            </div>
            <div>
              <img src={medical2} />
              <div>
                <h4>Look beyond MBBS</h4>
                <p>
                  To most students medicine means only MBBS. But there are many
                  more medical courses like BDS, BAMS, BHMS, BUMS, BPT, etc. Our
                  Seminars will open up a whole new world of medicine for you.
                </p>
              </div>
            </div>
            <div>
              <img src={medical3} />
              <div>
                <h4>Study Medicine Overseas</h4>
                <p>
                  The huge mismatch between between seats available and aspiring
                  students means intense competition. A good option is to
                  consider studying medicine abroad. Our Seminars will guide you
                  through the process.
                </p>
              </div>
            </div>
            <div>
              <img src={medical4} />
              <div>
                <h4>Life in a Medical College</h4>
                <p>
                  A brand new syllabus, lectures that are nothing life you did
                  in high scholl, students from diverse backgrounds, new
                  challenges... We make your experience less overwhelming and
                  more rewarding.
                </p>
              </div>
            </div>
          </GridSection>
        </Section>
        <Section>
          <Heading2>
            <h2>The Mentorship Program</h2>
          </Heading2>
          <DockSeminar>
            <div>
              <div>
                <img src={mentorship} />
                <DialogCircle type="medical">
                  <p>
                    "A mentor is someone who seese more talent and ability
                    within you, than you see in yourself, and helps bring it out
                    of you."
                    <br />- Bob Proctor
                  </p>
                  <img src={starscircle} />
                </DialogCircle>
              </div>
              <div>
                <TagLine>
                  <h2 className="grey">
                    <span className="black largest">An</span>{" "}
                    <span className="grey large">
                      ear to <span className="largest secondary">listen</span>
                    </span>
                    <br />
                    <span className="largest">
                      A hand to <span className="secondary">guide</span>
                    </span>
                  </h2>
                </TagLine>
                <Paragraph>
                  Career Shaper's Mentorship Program is designed to guide
                  students applying for medical streams. Our Mentorship Program
                  is like having your own personal coach who will empower you
                  with all the information you need and work with you every step
                  of the way, till you reach your goal.
                </Paragraph>
              </div>
            </div>
          </DockSeminar>
          <GridSection>
            <div>
              <img src={medical5} />
              <div>
                <h4>Documentation & Application</h4>
                <p>
                  Filling the application can be a complicated and tedious
                  process. The documentation process too is laborious. A smooth
                  transition in these initial stages can make your life simpler!
                </p>
              </div>
            </div>
            <div>
              <img src={medical6} />
              <div>
                <h4>Shortlist Institutes</h4>
                <p>
                  Every medical institute in different stages have different
                  cut-off scores. The smallest error here, can cost you a
                  career. Trust us to handhold you in this most crucial process.
                </p>
              </div>
            </div>
            <div>
              <img src={medical7} />
              <div>
                <h4>Periodic Alerts</h4>
                <p>
                  Access to relevant information and updates is the right of
                  every student. Keep yourself abreast of notification releases,
                  announcements, important dates on a day-to-day basis. It's
                  news you can use.
                </p>
              </div>
            </div>
            <div>
              <img src={medical4} />
              <div>
                <h4>Tracking & Monitoring</h4>
                <p>
                  Tracking counseling rounds and seat cancellations across 150
                  Institutes in India is a challenge. We will guide you through
                  mock round, spot round and institutional round for merit-based
                  admission.
                </p>
              </div>
            </div>
          </GridSection>
        </Section>
        <Section>
          <Heading2>
            <h2>Pricing</h2>
          </Heading2>
          <PricingGrid>
            <div>
              <div>
                <div>SILVER</div>
                <h4>&#8377;15,980/-</h4>
                <div>One time payment</div>
                <a>Buy Now</a>
              </div>
              <div>
                <h5>It includes</h5>
                <div>
                  <div>
                    <div>
                      <img src={c360} />
                    </div>
                    <div>
                      <h5>MBBS Componion by Career 360</h5>
                      <p>
                        <ul>
                          <li>
                            Access to all e-books + various tools including Prep
                            Test, Prep Meter, Rank Predictor, etc.
                          </li>
                          <li>Mode of delivery - Online</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={mp2} />
                    </div>
                    <div>
                      <h5>Medical Alamanac</h5>
                      <p>
                        <ul>
                          <li>
                            A comprehensive handbook which answers all questions
                            on preparation, cut-off, fees and admission process
                            through NEET
                          </li>
                          <li>Mode of Delivery - Offline</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={mp1} />
                    </div>
                    <div>
                      <h5>Test Series</h5>
                      <p>
                        <ul>
                          <li>
                            This assessment platform helps you in
                            self-evaluation and comparative analysis with
                            toppers and other peers.
                          </li>
                          <li>Mode of Delivery - Online</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={mp3} />
                    </div>
                    <div>
                      <h5>Shortlist your Success!</h5>
                      <p>
                        <ul>
                          <li>
                            Based on your inputs like NEET score/AIR/home state/
                            category. A personalized report designed to make
                            sure you get best option available.
                          </li>
                          <li>Mode of Delivery - Offline and Email</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={mp4} />
                    </div>
                    <div>
                      <h5>Application Filling</h5>
                      <p>
                        <ul>
                          <li>
                            Support with filling of application forms for
                            AIQ/Deemed, ESI, AFMC, AIMS, JIPMER & different
                            state counsellings.
                          </li>
                          <li>Mode of Delivery - Tele-support/ at MM Office</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={mp5} />
                    </div>
                    <div>
                      <h5>Medical Alamanac</h5>
                      <p>
                        <ul>
                          <li>
                            A comprehensive handbook which answers all questions
                            on preparation, cut-off, fees and admission process
                            through NEET
                          </li>
                          <li>Mode of Delivery - Offline</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={mp6} />
                    </div>
                    <div>
                      <h5>News You Can Use</h5>
                      <p>
                        <ul>
                          <li>
                            Regular SMS/Email alerts on announcements,
                            notifications, updates, counselling dates, etc.
                          </li>
                          <li>Mode of Delivery - SMS and Email</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={mp2} />
                    </div>
                    <div>
                      <h5>Guidance from your Medical Mentor</h5>
                      <p>
                        <ul>
                          <li>
                            An intensive one-to-one session with your Medical
                            Mentor, who will answer your queries about NEET
                            Counselling
                          </li>
                          <li>Mode of Delivery - Offline</li>
                          <li className="highlight">Two Session</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={mp6} />
                    </div>
                    <div>
                      <h5>Seminars and Workshops</h5>
                      <p>
                        <ul>
                          <li>All about NEET Counselling</li>
                          <li>Look beyond MBBS</li>
                          <li>Study Medicine overseas</li>
                          <li>Life in a medical college</li>
                          <li>Mode of Delivery - Offline</li>
                          <li className="highlight">One Session</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gold">
              <div>
                <div>GOLD</div>
                <h4>&#8377;24,980/-</h4>
                <div>One time payment</div>
                <a>Buy Now</a>
              </div>
              <div>
                <h5>It includes everything in the silver pack +</h5>
                <div>
                  <div>
                    <div>
                      <img src={mp2} />
                    </div>
                    <div>
                      <h5>Guidance from your Medical Mentor</h5>
                      <p>
                        <ul>
                          <li>
                            An intensive one-to-one session with your Medical
                            Mentor, who will answer your queries about NEET
                            Counselling
                          </li>
                          <li>Mode of Delivery - Offline</li>
                          <li className="highlight">Five Sessions</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={mp6} />
                    </div>
                    <div>
                      <h5>Seminars and Workshops</h5>
                      <p>
                        <ul>
                          <li>All about NEET Counselling</li>
                          <li>Look beyond MBBS</li>
                          <li>Study Medicine overseas</li>
                          <li>Life in a medical college</li>
                          <li>Mode of Delivery - Offline</li>
                          <li className="highlight">Four Sessions</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={mp7} />
                    </div>
                    <div>
                      <h5>Counselling</h5>
                      <p>
                        <ul>
                          <li>
                            Post result consultation with our career expert
                            based on actual NEET score on AIQ, Deemed, Karnataka
                            and Other State Counselling
                          </li>

                          <li>Mode of Delivery - MM Office</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={mp8} />
                    </div>
                    <div>
                      <h5>Documentation</h5>
                      <p>
                        <ul>
                          <li>
                            Support in the crucial application process and help
                            with documentation, verification and submission in
                            the right format
                          </li>

                          <li>Mode of Delivery - Offline and Email</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PricingGrid>
        </Section>
      </div>
    );
  }
}

export {
  Header,
  Facts,
  TagLine,
  Dock,
  Section,
  DockSeminar,
  Paragraph,
  GridSection,
  PricingGrid,
  Medical as default
};
