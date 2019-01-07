import React from "react";
import Head from "next/head";

import Engineering from "../components/Engineering";

const EngineeringPage = params => (
  <div>
    <Head>
      <title>Engineering Mentor</title>
      <meta type="description" value="Demo" />
    </Head>

    <Engineering {...params} />
  </div>
);

export default EngineeringPage;
