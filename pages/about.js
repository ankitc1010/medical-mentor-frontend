import React from "react";
import Head from "next/head";

import AboutUs from "../components/AboutUs";

const About = params => (
  <div>
    <Head>
      <title>About Us</title>
      <meta type="description" value="Demo" />
    </Head>
    <AboutUs {...params} />
  </div>
);

export default About;
