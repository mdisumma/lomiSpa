import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";

function PaymentForm(props) {
	const [success, setSuccess] = useState(false);
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (e) => {
		// e.preventDefault();
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
				<form className="formGroup">
					<fieldset>
						<div className="FormRow">
							<CardElement />
						</div>
					</fieldset>
					{/* <button>Pay Online</button> */}
					<button
						id="payButton"
						type="button"
						onClick={(e) => {
							if (
								props.nameValue &&
								props.emailValue &&
								props.dateValue &&
								props.serviceName &&
								props.timeValue &&
								props.durationValue
							) {
								const submitbooking = {
									name: props.nameValue,
									email: props.emailValue,
									date: props.dateValue,
									service: props.serviceName,
									time: props.timeValue,
									duration: props.durationValue,
									notes: props.notesValue,
								};
								console.log(submitbooking);

								const post = {
									method: "POST",
									headers: { "Content-Type": "application/json" },
									body: JSON.stringify(submitbooking),
								};
								fetch(
									"http://ec2-3-10-208-236.eu-west-2.compute.amazonaws.com/booking",
									post
								)
									.then((response) => response.json())
									.then((result) => {
										console.log(result);
										alert("thank you for booking online");
									});
								handleSubmit();
							} else {
								alert("please complete the booking form");
							}
						}}
					>
						Pay
					</button>
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
