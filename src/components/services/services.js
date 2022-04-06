import "./services.css";
import React, { useState, useEffect } from "react";

function Services(props) {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("http://ec2-35-177-191-15.eu-west-2.compute.amazonaws.com/services")
			.then((response) => response.json())
			.then(setData);
	}, []);

	if (data.length > 0) {
		console.log(data);
		return (
			<section id="services">
				<h2>Services</h2>
				{data.map((service) => (
					<div className="services" key={service._id}>
						<h3>{service.name}</h3>
						<p className="description">{service.description}</p>
						<div className="prices">
							<p>Prices:</p>
							<p>
								60 min{" "}
								<img src="images/peso.svg" alt="philippine peso" width="16px" />
								{service.price[0]}
							</p>
							<p>
								90 min{" "}
								<img src="images/peso.svg" alt="philippine peso" width="16px" />
								{service.price[1]}
							</p>
							<p>
								120 min{" "}
								<img src="images/peso.svg" alt="philippine peso" width="16px" />
								{service.price[2]}
							</p>
							{props.bookOnline}
						</div>
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
