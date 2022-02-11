import "./services.css";
import React, { useState, useEffect } from "react";

function Services() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:4000/services")
			.then((response) => response.json())
			.then(setData);
	}, []);

	if (data.length > 0) {
		console.log(data);
		return (
			<section id="services">
				<h2>Services</h2>
				{data.map((service) => (
					<div key={service._id}>
						<h3>{service.name}</h3>
						<p>{service.description}</p>
					</div>
				))}
			</section>
		);
	} else {
		return (
			<section>
				<h2>Services</h2>
				<p>no data is available</p>
			</section>
		);
	}
}

export default Services;
