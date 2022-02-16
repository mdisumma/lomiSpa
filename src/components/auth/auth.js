import React, { useState } from "react";
import "./auth.css";

function Auth() {
	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");
	return (
		<div id="logIn">
			<input
				className="inputs"
				id="userEmail"
				type="email"
				value={emailValue}
				onChange={(e) => setEmailValue(e.target.value)}
				placeholder="email"
			/>
			<input
				className="inputs"
				id="userPassword"
				type="password"
				value={passwordValue}
				onChange={(e) => setPasswordValue(e.target.value)}
				placeholder="password"
			/>
			<div className="inputs">
				<button
					onClick={(e) => {
						console.log(emailValue, passwordValue);
					}}
				>
					sign in
				</button>
				<button
					onClick={(e) => {
						console.log(emailValue, passwordValue);
					}}
				>
					sign up
				</button>
			</div>
		</div>
	);
}
export default Auth;
