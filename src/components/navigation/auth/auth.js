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
							fetch("http://localhost:4000/findUser/", post)
								.then((response) => response.json())
								.then((result) => {
									console.log(result);
									if (result === null) {
										fetch("http://localhost:4000/user/", post)
											.then((response) => response.json())
											.then((result) => console.log(result));
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
							// console.log(emailValue, passwordValue);
							const post = {
								method: "POST",
								headers: { "Content-Type": "application/json" },
								body: JSON.stringify({
									email: emailValue,
									password: passwordValue,
									auth: "user",
								}),
							};
							fetch("http://localhost:4000/findUser/", post)
								.then((response) => response.json())
								.then((result) => {
									console.log(result);
									if (result !== null) {
										window.location.href = `/user`;
									} else {
										alert("Please sing up before log in");
									}
								});
						} else {
							alert("please provide email and password");
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
