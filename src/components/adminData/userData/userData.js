import React, { useState, useEffect } from "react";
import "./userData.css";

function UserData() {
	const [data, setData] = useState([]);
	const [userEmailValue, setUserEmailValue] = useState("");
	const [userPasswordValue, setUserPasswordValue] = useState("");

	useEffect(() => {
		fetch("http://ec2-35-177-191-15.eu-west-2.compute.amazonaws.com/users")
			.then((response) => response.json())
			.then(setData);
	}, []);

	// console.log(data);

	return (
		<div>
			<h2>User List</h2>
			<div className="userForm">
				<label className="userEmailLabels" htmlFor="userEmailValue">
					user email
				</label>
				<input
					className="bookingInputs"
					id="userEmailValue"
					name="userEmailValue"
					type="email"
					value={userEmailValue}
					onChange={(e) => setUserEmailValue(e.target.value)}
					placeholder="insert a valid email"
				/>
				<label className="" htmlFor="userPasswordValue">
					user password
				</label>
				<input
					className="userPasswordValue"
					id="userPasswordValue"
					name="userPasswordValue"
					type="text"
					value={userPasswordValue}
					onChange={(e) => setUserPasswordValue(e.target.value)}
					placeholder="insert a password"
				/>
				<button
					onClick={() => {
						if (userEmailValue && userPasswordValue) {
							const submitUserData = {
								email: userEmailValue,
								password: userPasswordValue,
								auth: "user",
							};
							console.log(submitUserData);
							const post = {
								method: "POST",
								headers: { "Content-Type": "application/json" },
								body: JSON.stringify(submitUserData),
							};
							fetch(
								"http://ec2-35-177-191-15.eu-west-2.compute.amazonaws.com/user",
								post
							)
								.then((response) => response.json())
								.then((result) => {
									console.log(result);
									alert("the new user is submited");
								});
							window.location.reload();
						} else {
							alert("please insert an email and a password");
						}
					}}
				>
					submit
				</button>
			</div>

			{data.map((user) => (
				<ul key={user._id} className="userData">
					<li>{user.email}</li>
					<li>{user.password}</li>

					<button
						id="deleteUser"
						onClick={(e) => {
							const findUserData = {
								email: e.target.parentElement.childNodes[0].innerText,
								password: e.target.parentElement.childNodes[1].innerText,
							};
							console.log(findUserData);
							fetch(
								"http://ec2-35-177-191-15.eu-west-2.compute.amazonaws.com/user",
								{
									method: "DELETE",
									headers: { "Content-Type": "application/json" },
									body: JSON.stringify(findUserData),
								}
							)
								.then((response) => response.json())
								.then((result) => {
									console.log(result);
								});
							window.location.reload();
						}}
					>
						delete
					</button>
				</ul>
			))}
		</div>
	);
}
export default UserData;
