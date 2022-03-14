import React, { useState } from "react";
import "./auth.css";

function Auth() {
	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");
	return (
		<div id="logIn">
			<input
				className="authInputs"
				id="userEmail"
				type="email"
				value={emailValue}
				onChange={(e) => setEmailValue(e.target.value)}
				placeholder="email"
			/>
			<input
				className="authInputs"
				id="userPassword"
				type="password"
				value={passwordValue}
				onChange={(e) => setPasswordValue(e.target.value)}
				placeholder="password"
			/>
			<div className="authInputs">
				<button
					type="button"
					onClick={() => {
						if (emailValue && passwordValue) {
							const post = {
								method: "POST",
								headers: { "Content-Type": "application/json" },
								body: JSON.stringify({
									email: emailValue,
									password: passwordValue,
									auth: "user",
								}),
							};
							fetch(
								"http://ec2-3-10-208-236.eu-west-2.compute.amazonaws.com/findUser/",
								post
							)
								.then((response) => response.json())
								.then((result) => {
									console.log(result);
									if (result === null) {
										fetch(
											"http://ec2-3-10-208-236.eu-west-2.compute.amazonaws.com/user/",
											post
										)
											.then((response) => response.json())
											.then((result) => {
												console.log(result);
												alert("thank you for sign up");
											});
									} else {
										alert("these email and password already exist");
									}
								});
						} else {
							alert("please provide email and password");
						}
					}}
				>
					Sign up
				</button>
				<button
					type="button"
					onClick={() => {
						if (emailValue && passwordValue) {
							fetch(
								"http://ec2-3-10-208-236.eu-west-2.compute.amazonaws.com/findUser/",
								{
									method: "POST",
									headers: { "Content-Type": "application/json" },
									body: JSON.stringify({
										email: emailValue,
										password: passwordValue,
									}),
								}
							)
								.then((response) => response.json())
								.then((result) => {
									if (result !== null) {
										console.log(result);
										if (result.auth === "admin") {
											console.log("admin");
											window.location.href = `http://ec2-3-10-208-236.eu-west-2.compute.amazonaws.com/admin`;
										} else if (result.auth === "user") {
											console.log("user");
											window.location.href = `http://ec2-3-10-208-236.eu-west-2.compute.amazonaws.com/user`;
										} else {
											alert("Please sing up before log in");
										}
									} else {
										alert("Please sing up before log in");
									}
								});
						}
					}}
				>
					Log in
				</button>
			</div>
		</div>
	);
}
export default Auth;
