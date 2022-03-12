import React, { useState, useEffect } from "react";
import "./booking.css";
import { BiCaretDown } from "react-icons/bi";

function BookingForm() {
	useEffect(() => {
		fetch("http://ec2-3-10-208-236.eu-west-2.compute.amazonaws.com/services")
			.then((response) => response.json())
			.then(setData);
	}, []);

	const [data, setData] = useState([]);
	const [nameValue, setNameValue] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [dateValue, setDateValue] = useState("");
	const [serviceName, setServiceName] = useState("");
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
					<label className="bookingLabels" htmlFor="query">
						Service name
					</label>
					<div id="nameDropDown">
						<input
							className="bookingInputs"
							type="text"
							name="query"
							id="query"
							value={serviceName}
							readOnly
						/>
						<button
							onClick={() => {
								document.querySelector(".dropDown").style.display = "block";
							}}
						>
							<BiCaretDown />{" "}
						</button>
						<ul className="dropDown">
							{data.map((service) => (
								<li
									onClick={(e) => {
										const serviceNameValue = e.target.innerText;
										console.log(serviceNameValue);
										setServiceName(serviceNameValue);
										document.querySelector(".dropDown").style.display = "none";
									}}
									key={service._id}
								>
									{service.name}
								</li>
							))}
						</ul>
					</div>
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
								serviceName &&
								timeValue &&
								durationValue
							) {
								const submitbooking = {
									name: nameValue,
									email: emailValue,
									date: dateValue,
									service: serviceName,
									time: timeValue,
									duration: durationValue,
									notes: notesValue,
								};
								console.log(submitbooking);
								setNameValue("");
								setEmailValue("");
								setDateValue("");
								setServiceName("");
								setTimeValue("");
								setDurationValue("");
								setNotesValue("");
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
