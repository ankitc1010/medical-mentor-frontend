import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { ToastContainer, toast } from "react-toastify";

import {
  Header,
  Facts,
  TagLine,
  Dock,
  Section,
  DockSeminar,
  Paragraph,
  GridSection,
  PricingGrid
} from "./Medical";
import { DialogCircle } from "./Footer";
import { Heading2, MentorHeading, SubHeading, Card, Grid } from "./Home";

import Form from "./styles/Form";
import SmallButton from "./styles/Button";

import starscircle from "./img/starscircle.png";
import medicalmentor from "./img/medicalmentor.png";
import engineeringmentor from "./img/engineeringmentor.png";
import doctor from "./img/doctor.png";
import engineer from "./img/engineer.png";
import questions from "./img/questions.png";
import seminar from "./img/about.png";

import engineering1 from "./img/engineering/engineering1.png";
import engineering2 from "./img/engineering/engineering2.png";
import engineering3 from "./img/engineering/engineering3.png";
import engineering4 from "./img/engineering/engineering4.png";

import vikram from "./img/team/Vikram.jpg";
import mahipal from "./img/team/Mahipal.jpg";
import ratan from "./img/team/Ratan.jpg";
import sripal from "./img/team/Sripal.jpg";
import jignesh from "./img/team/Jignesh.jpg";

import "react-toastify/dist/ReactToastify.css";

const CREATE_CONTACT_MUTATION = gql`
  mutation CREATE_CONTACT_MUTATION(
    $email: String!
    $name: String!
    $phonenumber: String!
    $message: String
  ) {
    createContact(
      data: {
        email: $email
        name: $name
        phonenumber: $phonenumber
        message: $message
      }
    ) {
      id
      name
    }
  }
`;

const GridTeam = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100rem;
  margin: 0 auto;
  margin-top: 4rem;
  @media (max-width: 600px) {
    margin-top: 2rem;
    grid-template-columns: 1fr;
    direction: rtl;
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    img {
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
      transition: 0.2s;
      @media (max-width: 480px) {
        width: 8rem;
        height: 8rem;
      }
    }
    img:hover {
      transform: scale(1.25, 1.25);
    }
    > div {
      margin-left: 2rem;
      h3 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        @media (max-width: 480px) {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
      }
      p {
        @media (max-width: 480px) {
          margin-top: 0.5rem;
        }
      }
    }
  }
  .ratan {
    position: relative;
    @media (min-width: 790px) {
      left: 2rem;
    }
  }
`;

const DetailSection = styled.div`
  display: block !important;
  text-align: left;
  margin-top: 9rem !important;
  h3 {
    display: inline-block;
    font-size: 1.5rem;
    font-weight: normal;
    font-family: "Rockwell";
    cursor: pointer;
    padding: 0.8rem 2rem;
    margin: 0;
    font-size: 2rem;
    background: ${props =>
      props.type === "engineer" ? props.theme.primary : props.theme.primary};
    color: ${props =>
      props.type === "engineer" ? props.theme.white : props.theme.white};
  }
  p {
    font-size: 1.8rem;
    line-height: 1.3;
    margin-top: 0.5rem;
    margin-bottom: 4rem;
  }
`;

class ContactUs extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    phonenumber: ""
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <Section>
          <Heading2>
            <h2>Contact Us</h2>
          </Heading2>
          <DockSeminar type="about">
            <div>
              <div>
                <img src={seminar} />
                <DialogCircle type="engineer">
                  <p>
                    "Believe in yourself. You are braver than you think, more
                    talented than you know, and capable of more than you
                    imagine."
                    <br />
                  </p>
                  <img src={starscircle} />
                </DialogCircle>
              </div>
              <div>
                <TagLine>
                  <h2 className="grey">
                    <span className="black largest">Hello!</span>{" "}
                    <span className="grey large">
                      Let's get to <span className="black">know</span>
                    </span>
                    <br />
                    <span className="largest grey">
                      each other better{" "}
                      <span className="secondary">better</span>!
                    </span>
                  </h2>
                </TagLine>
                <Paragraph>
                  We, at Career Shapers, are a team of young professionals
                  dedicated to the advancement of students like you. You could
                  think of us as your friendly neighbourhood guide, who will
                  handhold you from making the right career choice, choosing the
                  right course/institution and even help you settle down in your
                  new environs! Our innovative offerings has been designed
                  exclusively for students aspiring to get into Engineering and
                  Medical. We are here to answer all your queries regarding
                  specializations, entrance exams and admission procedures for
                  colleges across India - and the world too!
                </Paragraph>
              </div>
            </div>
          </DockSeminar>
          <GridSection>
            <DetailSection>
              <h3>Office</h3>
              <p>
                HVP Cypress - II, #96, 2nd Floor, Kavi Lakshmisha Road Opp. Jain
                College, VV Puram, Bengaluru - 560 004
              </p>
              <h3>Email</h3>
              <p>consult@mycareershapers.in</p>
              <h3>Phone Number</h3>
              <p>+91 80 889 30 300/+91 4983 795 000</p>
            </DetailSection>
            <div>
              <Mutation mutation={CREATE_CONTACT_MUTATION}>
                {(createContact, { error, loading }) => (
                  <Form
                    method="post"
                    onSubmit={async e => {
                      e.preventDefault();
                      await createContact({
                        variables: {
                          ...this.state
                        }
                      });
                      this.setState({
                        name: "",
                        email: "",
                        message: "",
                        phonenumber: ""
                      });
                      toast.success("We will be contacting you.");
                    }}
                    style={{
                      width: "100%"
                    }}
                  >
                    <fieldset disabled={loading} aria-busy={loading}>
                      <h2>React Out</h2>
                      <label htmlFor="email">
                        Email
                        <input
                          type="email"
                          name="email"
                          placeholder="email"
                          value={this.state.email}
                          onChange={this.saveToState}
                          required
                        />
                      </label>
                      <label htmlFor="name">
                        Name
                        <input
                          type="text"
                          name="name"
                          placeholder="name"
                          value={this.state.name}
                          onChange={this.saveToState}
                          required
                        />
                      </label>
                      <label htmlFor="password">
                        Phone Number
                        <input
                          type="number"
                          name="phonenumber"
                          placeholder="phone number"
                          value={this.state.password}
                          onChange={this.saveToState}
                          required
                        />
                      </label>
                      <label htmlFor="password">
                        Message
                        <textarea
                          type="text"
                          name="message"
                          placeholder="message"
                          value={this.state.message}
                          onChange={this.saveToState}
                        />
                      </label>

                      <button type="submit">Submit</button>
                    </fieldset>
                  </Form>
                )}
              </Mutation>
            </div>
          </GridSection>
        </Section>
        <ToastContainer />
      </div>
    );
  }
}

export default ContactUs;
