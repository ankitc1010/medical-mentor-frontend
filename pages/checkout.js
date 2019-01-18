import React from "react";

import Checkout from "../components/Checkout";
import User from "../components/User";

const CheckoutPage = params => (
  <User>
    {({ data: { me } }) => {
      if (!me) {
        return <div>You are not signed in</div>;
      }
      return <Checkout {...params} user={me} />;
    }}
  </User>
);

export { CheckoutPage as default };
