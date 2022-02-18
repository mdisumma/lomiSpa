import React, { useState } from "react";
import "./booking.css";

function BookingForm() {
	const [nameValue, setNameValue] = useState("");
	const [dateValue, setDateValue] = useState("");
	const [serviceValue, setServiceValue] = useState("");
	const [timeValue, setTimeValue] = useState("");
	return (
		<div id="booking">
			<h2>Booking service</h2>
			<div className="bookingContainer">
				<div className="bookingForm">
					<label className="bookingLabels" htmlFor={nameValue}>
						Full Name
					</label>
					<input
						className="bookingInputs"
						id="bookingName"
						type="text"
						value={nameValue}
						onChange={(e) => setNameValue(e.target.value)}
						placeholder="name"
					/>
					<label className="bookingLabels" htmlFor={dateValue}>
						Service Date
					</label>
					<input
						className="bookingInputs"
						id="bookingDate"
						type="date"
						value={dateValue}
						onChange={(e) => setDateValue(e.target.value)}
						placeholder="date"
					/>
					<label className="bookingLabels" htmlFor={serviceValue}>
						Service Name
					</label>
					<input
						className="bookingInputs"
						id="bookingService"
						type="text"
						value={serviceValue}
						onChange={(e) => setServiceValue(e.target.value)}
						placeholder="service"
					/>
					<label className="bookingLabels" htmlFor={timeValue}>
						Service Time
					</label>
					<input
						className="bookingInputs"
						id="bookingTime"
						type="time"
						value={timeValue}
						onChange={(e) => setTimeValue(e.target.value)}
						placeholder="time"
					/>

					<button
						onClick={(e) => {
							console.log(e);
						}}
					>
						submit
					</button>
				</div>
			</div>
		</div>
	);
}
export default BookingForm;
