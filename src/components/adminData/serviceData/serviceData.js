import React, { useState, useEffect } from "react";

function ServiceData() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("http://localhost:4000/services")
			.then((response) => response.json())
			.then(setData);
	}, []);

	// console.log(data);
	return (
		<div>
			<h2>Services List</h2>

			{data.map((service) => (
				<ul key={service._id} className="servicesData">
					<li>
						<b>Service name:</b> {service.name}
					</li>
					<li>
						<b>Service description:</b> {service.description}
					</li>
					<li>
						<ul>
							<b>Service price:</b>
							<li>
								<b>60 min</b> {service.price[0]}
							</li>
							<li>
								<b>90 min</b> {service.price[1]}{" "}
							</li>
							<li>
								<b>120 min</b> {service.price[2]}
							</li>
						</ul>
					</li>
				</ul>
			))}
		</div>
	);
}
export default ServiceData;
