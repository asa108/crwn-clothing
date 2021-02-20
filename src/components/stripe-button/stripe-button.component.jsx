import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishKey =
    "pk_test_51IMnGaG96gc6jz9ytqrlJKNOM7tTECMPFZYma3wMdQnhQsMGqnx6pcEtPvfxtupfYtYcUOVU1G3G1iDbZrwJ7FyN00D5jSjo4j";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful");
  };

  return (
    <StripeCheckout
      label="Buy it now"
      name="CROWN Clithing Ltd."
      billingAddress
      shippingAddress
      //   image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Buy it now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
};

export default StripeCheckoutButton;
