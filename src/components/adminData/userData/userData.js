import React, { useState, useEffect } from "react";

function UserData() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("http://localhost:4000/users")
			.then((response) => response.json())
			.then(setData);
	}, []);

	// console.log(data);

	return (
		<div>
			<h2>User List</h2>

			{data.map((user) => (
				<ul key={user._id} className="userData">
					<li>
						<b>User name:</b> {user.email}
					</li>
					<li>
						<b>User password:</b> {user.password}
					</li>
				</ul>
			))}
		</div>
	);
}
export default UserData;
