import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";

function PaymentForm(props) {
	const [success, setSuccess] = useState(false);
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: elements.getElement(CardElement),
		});

		if (!error) {
			try {
				const { id } = paymentMethod;
				const response = await axios.post("http://localhost:4000/payment", {
					amount: props.price * 100,
					id,
				});

				if (response.data.success) {
					console.log("successful payment");
					setSuccess(true);
				}
			} catch (error) {
				console.log("Error", error);
			}
		} else {
			console.log(error.message);
		}
	};
	return (
		<>
			{!success ? (
				<form className="formGroup" onSubmit={handleSubmit}>
					<fieldset>
						<div className="FormRow">
							<CardElement />
						</div>
					</fieldset>
					<button id="payButton">Pay Online</button>
				</form>
			) : (
				<div>
					<div className="PaymentComplete">Payment complete</div>
				</div>
			)}
		</>
	);
}
export default PaymentForm;
