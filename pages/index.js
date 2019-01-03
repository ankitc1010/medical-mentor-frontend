import Head from "next/head";

import Home from "../components/Home";
import Footer from "../components/Footer";

const HomePage = props => (
  <div>
    <Head>
      <title>Career Shapers</title>
      <meta type="description" value="Demo" />
    </Head>
    <Home />
    <Footer />
  </div>
);

export default HomePage;
