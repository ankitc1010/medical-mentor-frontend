import React, { Component } from "react";
import Router from "next/router";

import User from "../components/User";
import Me from "../components/Me";

const MePage = params => (
  <User>
    {res => {
      if (!res.data.me) {
        return <div>You are not logged in</div>;
      }
      return <Me {...params} />;
    }}
  </User>
);

export { MePage as default };
