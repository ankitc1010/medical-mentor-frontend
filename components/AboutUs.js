import React from "react";
import styled from "styled-components";

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

const GridTeam = styled.div`
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

const AboutUs = () => (
  <div>
    <Section>
      <Heading2>
        <h2>About Us</h2>
      </Heading2>
      <DockSeminar type="about">
        <div>
          <div>
            <img src={seminar} />
            <DialogCircle type="engineer">
              <p>
                "Believe in yourself. You are braver than you think, more
                talented than you know, and capable of more than you imagine."
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
                  each other better <span className="secondary">better</span>!
                </span>
              </h2>
            </TagLine>
            <Paragraph>
              We, at Career Shapers, are a team of young professionals dedicated
              to the advancement of students like you. You could think of us as
              your friendly neighbourhood guide, who will handhold you from
              making the right career choice, choosing the right
              course/institution and even help you settle down in your new
              environs! Our innovative offerings has been designed exclusively
              for students aspiring to get into Engineering and Medical. We are
              here to answer all your queries regarding specializations,
              entrance exams and admission procedures for colleges across India
              - and the world too!
            </Paragraph>
          </div>
        </div>
      </DockSeminar>
      <GridSection>
        <div>
          <img src={engineering1} />
          <div>
            <h4>Empowering through Information</h4>
            <p>
              Career Shapers is the brainchild of educationists of 20+ years.
              Their belief that the right information is the secret of success
              has endeared them to students across India.
            </p>
          </div>
        </div>
        <div>
          <img src={engineering2} />
          <div>
            <h4>Aspirations to Achievements</h4>
            <p>
              Pooling their expertise and their strengths, our mentors have set
              up convenient and accessible platforms which effetively bridge the
              gap between the students' aspirations and the career path ahead.
            </p>
          </div>
        </div>
        <div>
          <img src={engineering3} />
          <div>
            <h4>Confusion to Clarity</h4>
            <p>
              Our passion to guide students has led us across the length and
              breadth of the country. Over the last 5 years, we have guided
              lakhs of students pan India to make informed career choices.
            </p>
          </div>
        </div>
        <div>
          <img src={engineering4} />
          <div>
            <h4>Virtual to Reality</h4>
            <p>
              While we have kept pace with the latest technology and harness it
              for your advantage, let's be honest, nothing can quite replace a
              face to face conversation. Let's get real in this virtual world!
            </p>
          </div>
        </div>
      </GridSection>
    </Section>
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
              <SmallButton type="engineer">Know More</SmallButton>
            </h3>
          </div>
        </Card>
      </Grid>
    </section>
    <section>
      <Heading2>
        <h2>Career Shapers Team</h2>
      </Heading2>
      <GridTeam>
        <div>
          <img src={vikram} />
          <div>
            <h3>Vikram Kumar</h3>
            <p>Founder & CEO</p>
          </div>
        </div>
        <div>
          <img src={jignesh} />
          <div>
            <h3>Jignesh Kumar</h3>
            <p>Director</p>
          </div>
        </div>
        <div>
          <img src={mahipal} />
          <div>
            <h3>Mahipal Jain</h3>
            <p>Board Advisor</p>
          </div>
        </div>
        <div>
          <img src={sripal} />
          <div>
            <h3>CA Sripal Jain</h3>
            <p>Board Advisor</p>
          </div>
        </div>
        <div className="ratan">
          <img src={ratan} />
          <div>
            <h3>Dr Ratan Salecha</h3>
            <p>Board Advisor</p>
          </div>
        </div>
      </GridTeam>
    </section>
  </div>
);

export default AboutUs;
