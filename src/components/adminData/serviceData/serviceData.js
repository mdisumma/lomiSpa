import React, { useState, useEffect } from "react";
import "./serviceData.css";

function ServiceData() {
	const [data, setData] = useState([]);
	const [serviceNameValue, setServiceNameValue] = useState("");
	const [serviceDescriptionValue, setServiceDescriptionValue] = useState("");
	const [firstPriceValue, setFirstPriceValue] = useState("");
	const [secondPriceValue, setSecondPriceValue] = useState("");
	const [thirtPriceValue, setThirtPriceValue] = useState("");

	useEffect(() => {
		fetch("http://localhost:4000/services")
			.then((response) => response.json())
			.then(setData);
	}, []);

	// console.log(data);
	return (
		<div className="adminSevices">
			<h2>Services List</h2>
			<div className="serviceForm">
				<label className="serviceNameLabels" htmlFor="serviceNameValue">
					service name
				</label>
				<input
					className="serviceInputs"
					id="serviceNameValue"
					name="serviceNameValue"
					type="text"
					value={serviceNameValue}
					onChange={(e) => setServiceNameValue(e.target.value)}
					placeholder="insert a service name"
				/>
				<label
					className="serviceDescriptionLabels"
					htmlFor="serviceDescriptionValue"
				>
					service description
				</label>
				<input
					className="serviceInputs"
					id="serviceDescriptionValue"
					name="serviceDescriptionValue"
					type="text"
					value={serviceDescriptionValue}
					onChange={(e) => setServiceDescriptionValue(e.target.value)}
					placeholder="insert a service description"
				/>
				<label className="servicePriceLabels" htmlFor="servicePricesValue">
					service price
				</label>
				<div className="servicePricesValue">
					<input
						className="servicePrices"
						id="firstPriceValue"
						name="firstPriceValue"
						type="number"
						value={firstPriceValue}
						onChange={(e) => setFirstPriceValue(e.target.value)}
						placeholder="60 min price"
					/>
					<input
						className="servicePrices"
						id="secondPriceValue"
						name="secondPriceValue"
						type="number"
						value={secondPriceValue}
						onChange={(e) => setSecondPriceValue(e.target.value)}
						placeholder="120 min price"
					/>
					<input
						className="servicePrices"
						id="thirtPriceValue"
						name="thirtPriceValue"
						type="number"
						value={thirtPriceValue}
						onChange={(e) => setThirtPriceValue(e.target.value)}
						placeholder="180 min price"
					/>
				</div>
				<button
					onClick={() => {
						if (
							serviceNameValue &&
							serviceDescriptionValue &&
							firstPriceValue &&
							secondPriceValue &&
							thirtPriceValue
						) {
							const newService = {
								name: serviceNameValue,
								description: serviceDescriptionValue,
								price: [firstPriceValue, secondPriceValue, thirtPriceValue],
							};
							const post = {
								method: "POST",
								headers: { "Content-Type": "application/json" },
								body: JSON.stringify(newService),
							};
							fetch("http://localhost:4000/services", post)
								.then((response) => response.json())
								.then((result) => {
									console.log(result);
									alert("the new service is submited");
								});
							window.location.reload();
							console.log(newService);
						}
					}}
				>
					submit
				</button>
			</div>
			{data.map((service) => (
				<ul key={service._id} className="servicesData">
					<li>{service.name}</li>
					<li>{service.description}</li>
					<li>
						<ul className="prices">
							<b>Service price:</b>
							<li>{service.price[0]}</li>
							<li>{service.price[1]}</li>
							<li>{service.price[2]}</li>
						</ul>
					</li>
					<button
						onClick={(e) => {
							const findServiceData = {
								name: e.target.parentElement.childNodes[0].innerText,
								description: e.target.parentElement.childNodes[1].innerText,
								price: [
									e.target.parentElement.childNodes[2].childNodes[0]
										.childNodes[1].innerText,
									e.target.parentElement.childNodes[2].childNodes[0]
										.childNodes[2].innerText,
									e.target.parentElement.childNodes[2].childNodes[0]
										.childNodes[3].innerText,
								],
							};
							fetch("http://localhost:4000/services", {
								method: "DELETE",
								headers: { "Content-Type": "application/json" },
								body: JSON.stringify(findServiceData),
							})
								.then((response) => response.json())
								.then((result) => {
									console.log(result);
								});
							window.location.reload();
							console.log(e);
							console.log(findServiceData);
						}}
					>
						delete
					</button>
				</ul>
			))}
		</div>
	);
}
export default ServiceData;
