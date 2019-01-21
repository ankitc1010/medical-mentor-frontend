import React from "react";

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

import { Heading2, MentorHeading } from "./Home";
import { DialogCircle } from "./Footer";
import BuyNow from "./BuyNow";
import questions from "./img/questions.png";

import logo from "./img/engineeringmentor.png";
import starscircle from "./img/starscircle.png";
import engineer from "./img/engineer.png";
import seminar from "./img/seminar.png";
import mentorship from "./img/mentorship.png";
import c360 from "./img/medical/pricing/c360.png";

import engineering1 from "./img/engineering/engineering1.png";
import engineering2 from "./img/engineering/engineering2.png";
import engineering3 from "./img/engineering/engineering3.png";
import engineering4 from "./img/engineering/engineering4.png";
import engineering5 from "./img/engineering/engineering5.png";
import engineering6 from "./img/engineering/engineering6.png";
import engineering7 from "./img/engineering/engineering8.png";
import engineering8 from "./img/engineering/engineering8.png";

import mp1 from "./img/engineering/pricing/1.png";
import mp2 from "./img/engineering/pricing/2.png";
import mp3 from "./img/engineering/pricing/3.png";
import mp4 from "./img/engineering/pricing/4.png";
import mp5 from "./img/engineering/pricing/5.png";
import mp6 from "./img/engineering/pricing/6.png";
import mp7 from "./img/engineering/pricing/7.png";
import mp8 from "./img/engineering/pricing/8.png";

const Engineering = () => (
  <div>
    <Header>
      <img src={logo} />
      <br />
      <Facts>
        <div>
          <div>
            <div>15,00,000+</div>
            <div>Engineering Aspirants</div>
          </div>
          <div>
            <div>32,000+</div>
            <div>Seats Across IITs/NITs/IIITs</div>
          </div>
          <div>
            <div>6,300+</div>
            <div>Engineering Colleges in India</div>
          </div>
          <div>
            <div>75+</div>
            <div>Private Engineering Entrance Exams</div>
          </div>
          <div>
            <div>40+</div>
            <div>Engineering Specializations</div>
          </div>
        </div>
      </Facts>
      <TagLine>
        <h1 className="primary">
          <span className="large primary">Your</span>{" "}
          <span className="largest secondary">future success</span>
          <br />
          <span className="larger">
            Depends on the <span className="largest black">choices</span>
          </span>
          <br />
          <span className="large">you make today!</span>
        </h1>
      </TagLine>
      <Dock type="engineer">
        <div>
          <MentorHeading type="engineer">
            <h3>
              <ul>
                <li>Confused aboout which college to enroll for?</li>
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
            <img src={engineer} />
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
            <DialogCircle type="engineer">
              <p>
                "Education is our passport to the future. For tomorrow belongs
                to the people who prepare for it today."
                <br />
                -Malcolm X
              </p>
              <img src={starscircle} />
            </DialogCircle>
          </div>
          <div>
            <TagLine>
              <h2 className="grey">
                <span className="primary largest">Learn</span>{" "}
                <span className="grey large">the important stuff</span>
                <br />
                Without the <span className="primary">sweat</span>!
              </h2>
            </TagLine>
            <Paragraph>
              Career Shaper's 'Knowledge Series', is a set of workshops and
              seminars developed exclusively for students perparing for the
              medical entrance exams and aspiring for a career in the field of
              medical. These thoughtfull-crafted sessions will cover a wide
              range of topics that will address concerns, answer queries and
              clarify doubts of both students and parents.
            </Paragraph>
          </div>
        </div>
      </DockSeminar>
      <GridSection>
        <div>
          <img src={engineering1} />
          <div>
            <h4>New Age Engineering Course</h4>
            <p>
              Robotics, Internet of Things (IoT) and Information Security, Big
              Data, Cloud Technology, Data Science... explore the exciting new
              world of opportunities waiting for you in the field of
              engineering.
            </p>
          </div>
        </div>
        <div>
          <img src={engineering2} />
          <div>
            <h4>Choosing the right stream/college</h4>
            <p>
              With over 40 engineering courses and 100s of institutions,
              choosing the right stream and the right college can be quite
              challenging. Our valuable tips and guidance will help you make the
              right choice.
            </p>
          </div>
        </div>
        <div>
          <img src={engineering3} />
          <div>
            <h4>Life at an engineering college</h4>
            <p>
              It's a whole new chapter in your life - make sure it's a page
              turner! Get right advice on how to make the most of every day,
              cope with the new curriculum, balance study and extra-curricular
              activities, etc.
            </p>
          </div>
        </div>
        <div>
          <img src={engineering4} />
          <div>
            <h4>Study Engineering Overseas</h4>
            <p>
              Top rated engineering programs, technical competencies, renowned
              faculty and an opportunity to experience a new culture. Our
              Seminars will guide you to the best engineering institutions
              abroad.
            </p>
          </div>
        </div>
      </GridSection>
    </Section>
    <Section>
      <Heading2>
        <h2>The Mentorship Program</h2>
      </Heading2>
      <DockSeminar type="mentorship">
        <div>
          <div>
            <img src={mentorship} />
            <DialogCircle type="engineer">
              <p>
                "A mentor is someone who seese more talent and ability within
                you, than you see in yourself, and helps bring it out of you."
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
                  ear to <span className="largest primary">listen</span>
                </span>
                <br />
                <span className="largest">
                  A hand to <span className="primary">guide</span>
                </span>
              </h2>
            </TagLine>
            <Paragraph>
              Career Shaper's Mentorship Program is designed to guide students
              applying for medical streams. Our Mentorship Program is like
              having your own personal coach who will empower you with all the
              information you need and work with you every step of the way, till
              you reach your goal.
            </Paragraph>
          </div>
        </div>
      </DockSeminar>
      <GridSection>
        <div>
          <img src={engineering5} />
          <div>
            <h4>Engineering Stream Selector</h4>
            <p>
              With over 40 engineering streams it's not easy choosing a stream
              that is both to one's liking as well as offers potential for
              growth. We'll help you make the right choice through our
              specialized tool.
            </p>
          </div>
        </div>
        <div>
          <img src={engineering6} />
          <div>
            <h4>Shortlist Institutes</h4>
            <p>
              There are 1,000s of engineering colleges in India offering
              different specializations and different benefits. Your Engineering
              Mentor will help you arrive at the most appropriate institute for
              you.
            </p>
          </div>
        </div>
        <div>
          <img src={engineering7} />
          <div>
            <h4>Periodic Alerts</h4>
            <p>
              Access to relevant information and updates is the right of every
              student. Keep yourself abreast of notification releases,
              announcements, important dates on a day-to-day basis. It's news
              you can use.
            </p>
          </div>
        </div>
        <div>
          <img src={engineering4} />
          <div>
            <h4>One Stop Solution for Aspirants</h4>
            <p>
              Stop running around in circles for your admission. Get all
              services under one roof - from identifying the right stream and
              right college to the admission process and support till your first
              day in college.
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
            <h4>&#8377;4,991/-</h4>
            <div>One time payment</div>
            <BuyNow id="cjr4nr8gp000v0874wot9hqtz" />
          </div>
          <div>
            <h5>It includes</h5>
            <div>
              <div>
                <div>
                  <img src={c360} />
                </div>
                <div>
                  <h5>B.Tech Companion by Career 360</h5>
                  <p>
                    <ul>
                      <li>
                        Access to all e-books, college predictor tools, etc.
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
                  <h5>Application Filling</h5>
                  <p>
                    <ul>
                      <li>
                        Why run around to multiple institutions for application
                        forms. Get them right here and support with filling them
                        up too!
                      </li>
                      <li>Mode of Delivery - Online + Offline</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img src={mp1} />
                </div>
                <div>
                  <h5>Psychometric Test</h5>
                  <p>
                    <ul>
                      <li>
                        Why run around to multiple institutions for application
                        forms. Get them right here and support with filling them
                        up too!
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
                        Based on your inputs. A personalized report designed to
                        guide you on the options you should opt for.
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
                  <h5>Guidance from your Engineering Mentor</h5>
                  <p>
                    <ul>
                      <li>
                        An intensive one-to-one session with your Engineering
                        Mentor, who will answer your queries and clarify your
                        doubts.
                      </li>
                      <li>Mode of Delivery - Offline</li>
                      <li className="highlight">One Session</li>
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
                      <li>How to choose right College/Stream</li>
                      <li>New age engineering careers</li>
                      <li>Life at an engineering college</li>
                      <li>Study Engineering Overseas</li>
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
            <h4>&#8377;11,993/-</h4>
            <div>One time payment</div>
            <BuyNow id="cjr4nt1v2001b087470gukbpp" />
          </div>
          <div>
            <h5>It includes everything in the silver pack +</h5>
            <div>
              <div>
                <div>
                  <img src={mp2} />
                </div>
                <div>
                  <h5>Guidance from your Engineering Mentor</h5>
                  <p>
                    <ul>
                      <li>
                        An intensive one-to-one session with your Engineering
                        Mentor, who will answer your queries and clarify
                      </li>
                      <li className="hightlight">Mode of Delivery - Offline</li>
                      <li className="ultra-highlight">Three Sessions</li>
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
                      <li>How to choose right College/Stream</li>
                      <li>New age engineering careers</li>
                      <li>Life at an engineering college</li>
                      <li>Study Engineering Overseas</li>
                      <li className="highlight">Mode of Delivery - Offline</li>
                      <li className="ultra-highlight">Three Sessions</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img src={mp7} />
                </div>
                <div>
                  <h5>Counselling & Documentation</h5>
                  <p>
                    <ul>
                      <li>
                        Post result consultation with your mentor, for
                        documentation, counselling process and getting best
                        option available.
                      </li>

                      <li>Mode of Delivery - Offline and Email</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img src={mp8} />
                </div>
                <div>
                  <h5>Complete Tracking and Monitoring</h5>
                  <p>
                    <ul>
                      <li>
                        We handhold you through the entire process - from start
                        to finish, till you get admission in your desired
                        college.
                      </li>

                      <li>Mode of Delivery - All</li>
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

export default Engineering;
