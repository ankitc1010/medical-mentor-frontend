import Head from "next/head";

import Medical from "../components/Medical";

import Footer from "../components/Footer";

const HomePage = props => (
  <div>
    <Head>
      <title>Medical Mentor</title>
      <meta type="description" value="Demo" />
    </Head>
    <Medical />
  </div>
);

export default HomePage;
