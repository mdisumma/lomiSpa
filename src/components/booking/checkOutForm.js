import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./paymentForm";

const PUBLIC_KEY =
	"pk_test_51KdsopL6aPjGx3LqzNVM4IHEwNxuwjdT1Wq76QMPjLQD78pOVBHxrSOVPpf667NKUFd6g09HusYYLZ2XQooJ4Nw400A97gkAN9";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer(props) {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm price={props.price} />
		</Elements>
	);
}
