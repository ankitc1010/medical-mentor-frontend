import React, { Component } from "react";
import Head from "next/head";

import Header from "../components/Header";
import Medical from "../components/Medical";
import Footer from "../components/Footer";

const MedicalPage = () => (
  <div>
    <Head>
      <title>Medical Mentor</title>
      <meta type="description" value="Demo" />
    </Head>
    <Medical />
  </div>
);

export default MedicalPage;
