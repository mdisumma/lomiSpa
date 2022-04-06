import React, { useState, useEffect } from "react";
import "./booking.css";
import { BiCaretDown } from "react-icons/bi";
import CheckOutForm from "./checkOutForm";

function BookingForm() {
	useEffect(() => {
		fetch("http://ec2-35-177-191-15.eu-west-2.compute.amazonaws.com/services")
			.then((response) => response.json())
			.then(setData);
	}, []);
	useEffect(() => {
		fetch("http://ec2-35-177-191-15.eu-west-2.compute.amazonaws.com/booking")
			.then((response) => response.json())
			.then(setBooking);
	}, []);

	const [data, setData] = useState([]);
	const [booking, setBooking] = useState([]);
	const [nameValue, setNameValue] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [dateValue, setDateValue] = useState("");
	const [serviceName, setServiceName] = useState("");
	const [timeValue, setTimeValue] = useState("");
	const [durationValue, setDurationValue] = useState("");
	const [notesValue, setNotesValue] = useState("");
	const [getPrice, setGetPrice] = useState([]);
	const [price, setPrice] = useState("");
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
					<div className="dropDownContainer">
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
								document.querySelector("#dropDownName").style.display = "block";
							}}
						>
							<BiCaretDown />{" "}
						</button>
						<ul className="dropDown" id="dropDownName">
							{data.map((service) => (
								<li
									onClick={(e) => {
										const serviceNameValue = e.target.innerText;
										console.log(serviceNameValue);
										setServiceName(serviceNameValue);
										document.querySelector(".dropDown").style.display = "none";
										const selectService = data.filter((item) => {
											return item.name === serviceNameValue;
										});
										console.log(selectService[0].price);
										setGetPrice(selectService[0].price);
										console.log(getPrice);
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
					<div className="dropDownContainer">
						<input
							className="bookingInputs"
							id="bookingTime"
							name="bookingTime"
							type="text"
							value={timeValue}
							onChange={(e) => setTimeValue(e.target.value)}
						/>
						<button
							onClick={() => {
								document.querySelector("#dropDownTime").style.display = "block";
							}}
						>
							<BiCaretDown />{" "}
						</button>
						<ul
							className="dropDown"
							id="dropDownTime"
							onClick={(e) => {
								const selectTime = e.target.innerText;
								console.log(selectTime);
								setTimeValue(selectTime);
								document.querySelector("#dropDownTime").style.display = "none";

								const selectDateCheck = booking.filter((item) => {
									return item.date === dateValue;
								});

								const selectTimeCheck = selectDateCheck.filter((item) => {
									return item.time === selectTime;
								});
								console.log(selectDateCheck);
								console.log(selectTimeCheck);
								if (selectTimeCheck.length > 0) {
									alert("the time slot is already booked");
									setTimeValue("");
								}
							}}
						>
							<li>9.00</li>
							<li>10.00</li>
							<li>11.00</li>
							<li>12.00</li>
							<li>13.00</li>
							<li>14.00</li>
							<li>15.00</li>
							<li>16.00</li>
							<li>17.00</li>
						</ul>
					</div>

					<label className="bookingLabels" htmlFor="bookingDuration">
						Service duration
					</label>
					<input
						className="bookingInputs"
						id="bookingDuration"
						name="bookingDuration"
						type="number"
						value={durationValue}
						onChange={(e) => {
							setDurationValue(e.target.value);
						}}
						onBlur={() => {
							if (durationValue === "60") {
								console.log(getPrice[0]);
								setPrice(getPrice[0]);
							} else if (durationValue === "90") {
								console.log(getPrice[1]);
								setPrice(getPrice[1]);
							} else if (durationValue === "120") {
								console.log(getPrice[2]);
								setPrice(getPrice[2]);
							} else alert("please provide a valid time");
						}}
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
					<div className="bookingLabels">
						Price:
						<img src="images/peso.svg" alt="philippine peso" width="16px" />
						{price}
					</div>
					<CheckOutForm
						price={price}
						nameValue={nameValue}
						emailValue={emailValue}
						dateValue={dateValue}
						serviceName={serviceName}
						timeValue={timeValue}
						durationValue={durationValue}
						notesValue={notesValue}
					/>
				</div>
			</div>
		</div>
	);
}
export default BookingForm;
