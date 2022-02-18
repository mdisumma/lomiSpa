import React, { useState } from "react";
import Auth from "./auth/auth";

function LogIn() {
	const [authForm, setAuthForm] = useState(null);

	return (
		<div className="userButtons">
			<button
				onClick={() => {
					if (authForm === null) {
						setAuthForm(<Auth />);
					} else {
						setAuthForm(null);
					}
				}}
			>
				Sign up / Log in
			</button>
			{authForm}
		</div>
	);
}
export default LogIn;
