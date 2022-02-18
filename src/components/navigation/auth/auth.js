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
					onClick={(e) => {
						console.log(emailValue, passwordValue);
					}}
				>
					Sign up
				</button>
				<button
					onClick={(e) => {
						console.log(emailValue, passwordValue);
						window.location.href = `/user`;
					}}
				>
					Log in
				</button>
			</div>
		</div>
	);
}
export default Auth;
