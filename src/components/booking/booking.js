import React, { useState } from "react";
import "./booking.css";

function BookingForm() {
	const [nameValue, setNameValue] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [dateValue, setDateValue] = useState("");
	const [serviceValue, setServiceValue] = useState("");
	const [timeValue, setTimeValue] = useState("");
	const [durationValue, setDurationValue] = useState("");
	const [notesValue, setNotesValue] = useState("");
	return (
		<div id="booking">
			<h2>Book Online</h2>
			<div className="bookingContainer">
				<div className="bookingForm">
					<label className="bookingLabels" htmlFor="bookingName">
						Customer name
					</label>
					<input
						className="bookingInputs"
						id="bookingName"
						name="bookingName"
						type="text"
						value={nameValue}
						onChange={(e) => setNameValue(e.target.value)}
						placeholder="customer name"
					/>
					<label className="bookingLabels" htmlFor="bookingEmail">
						Customer email
					</label>
					<input
						className="bookingInputs"
						id="bookingEmail"
						name="bookingEmail"
						type="email"
						value={emailValue}
						onChange={(e) => setEmailValue(e.target.value)}
						placeholder="customer name"
					/>
					<label className="bookingLabels" htmlFor="bookingDate">
						Booking date
					</label>
					<input
						className="bookingInputs"
						id="bookingDate"
						name="bookingDate"
						type="date"
						value={dateValue}
						onChange={(e) => setDateValue(e.target.value)}
					/>
					<label className="bookingLabels" htmlFor="bookingService">
						Service name
					</label>
					<input
						className="bookingInputs"
						id="bookingService"
						name="bookingService"
						type="text"
						value={serviceValue}
						onChange={(e) => setServiceValue(e.target.value)}
						placeholder="service name"
					/>
					<label className="bookingLabels" htmlFor="bookingTime">
						Service <i>9am to 6pm</i>
					</label>
					<input
						className="bookingInputs"
						id="bookingTime"
						name="bookingTime"
						type="time"
						value={timeValue}
						onChange={(e) => setTimeValue(e.target.value)}
						min="09:00"
						max="18:00"
						required
					/>

					<label className="bookingLabels" htmlFor="bookingDuration">
						Service duration
					</label>
					<input
						className="bookingInputs"
						id="bookingDuration"
						name="bookingDuration"
						type="number"
						value={durationValue}
						onChange={(e) => setDurationValue(e.target.value)}
						min="60"
						max="120"
						step="30"
					/>
					<label className="bookingLabels" htmlFor="bookingNotes">
						Appointment notes
					</label>
					<textarea
						className="bookingInputs"
						id="bookingNotes"
						name="bookingNotes"
						type="text"
						value={notesValue}
						onChange={(e) => setNotesValue(e.target.value)}
						rows="3"
					/>

					<button
						type="button"
						onClick={(e) => {
							if (
								nameValue &&
								emailValue &&
								dateValue &&
								serviceValue &&
								timeValue &&
								durationValue
							) {
								const submitbooking = {
									name: nameValue,
									email: emailValue,
									date: dateValue,
									service: serviceValue,
									time: timeValue,
									duration: durationValue,
									notes:notesValue,
								};
								console.log(submitbooking);
								setNameValue("");
								setEmailValue("");
								setDateValue("");
								setServiceValue("");
								setTimeValue("");
								setDurationValue("");
								setNotesValue("");
								const post = {
									method: "POST",
									headers: { "Content-Type": "application/json" },
									body: JSON.stringify(submitbooking),
								};
								fetch("http://localhost:4000/booking", post)
									.then((response) => response.json())
									.then((result) => {
										console.log(result);
										alert("thank you for booking online");
									});
							} else {
								alert("please complete the booking form");
							}
						}}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}
export default BookingForm;
