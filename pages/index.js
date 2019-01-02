import Head from "next/head";

import Home from "../components/Home";

const HomePage = props => (
  <div>
    <Head>
      <title>Career Shapers</title>
      <meta type="description" value="Demo" />
    </Head>
    <Home />
  </div>
);

export default HomePage;
