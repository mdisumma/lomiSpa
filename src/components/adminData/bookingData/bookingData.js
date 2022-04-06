import React, { useState, useEffect } from "react";
import "./bookingData.css";

function BookingData() {
	const [data, setData] = useState([]);
	const [dateValue, setDateValue] = useState("");

	useEffect(() => {
		fetch("http://ec2-35-177-191-15.eu-west-2.compute.amazonaws.com/booking")
			.then((response) => response.json())
			.then(setData);
	}, []);

	const filterAppointment = data.filter((item) => {
		return item.date === dateValue;
	});

	if (dateValue !== "") {
		return (
			<div>
				<h2>Booking List</h2>
				<div className="bookingFilter">
					<label className="bookingLabels" htmlFor="dateValue">
						date
					</label>
					<input
						className="bookingInputs"
						id="dateValue"
						name="dateValue"
						type="date"
						value={dateValue}
						onChange={(e) => setDateValue(e.target.value)}
					/>
					<button
						onClick={() => {
							setDateValue("");
						}}
					>
						clear
					</button>
				</div>

				{filterAppointment.map((booking) => (
					<ul key={booking._id} className="bookingData">
						<li>
							<b>Date:</b> {booking.date}
						</li>
						<li>
							<b>Name:</b> {booking.name}
						</li>
						<li>
							<b>Email:</b> {booking.email}
						</li>
						<li>
							<b>Service:</b> {booking.service}
						</li>
						<li>
							<b>Time:</b> {booking.time}
						</li>
						<li>
							<b>Duration:</b> {booking.duration}
						</li>
						<li>
							<b>Note:</b> {booking.notes}
						</li>
					</ul>
				))}
			</div>
		);
	} else {
		return (
			<div>
				<h2>Booking List</h2>
				<div className="bookingFilter">
					<label className="bookingLabels" htmlFor="dateValue">
						Select date
					</label>
					<input
						className="bookingInputs"
						id="dateValue"
						name="dateValue"
						type="date"
						value={dateValue}
						onChange={(e) => setDateValue(e.target.value)}
					/>
				</div>

				{data.map((booking) => (
					<ul key={booking._id} className="bookingData">
						<li>
							<b>Date:</b> {booking.date}
						</li>
						<li>
							<b>Name:</b> {booking.name}
						</li>
						<li>
							<b>Email:</b> {booking.email}
						</li>
						<li>
							<b>Service:</b> {booking.service}
						</li>
						<li>
							<b>Time:</b> {booking.time}
						</li>
						<li>
							<b>Duration:</b> {booking.duration}
						</li>
						<li>
							<b>Note:</b> {booking.notes}
						</li>
					</ul>
				))}
			</div>
		);
	}
}
export default BookingData;
