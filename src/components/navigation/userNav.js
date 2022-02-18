import React, { useState } from "react";
import Auth from "./auth/auth";

function UserNav(props) {
	const [authForm, setAuthForm] = useState(null);

	const logIn = () => {
		if (authForm === null) {
			setAuthForm(<Auth />);
		} else {
			setAuthForm(null);
		}
	};
	return (
		<div className="nav-user">
			<a href="#top">
				<img src="/lomi-spa-mono.svg" alt="company logo" loading="lazy"></img>
			</a>
			<div className="userButtons">
				<button onClick={props.authUser}>{props.authLable}</button>
			</div>
			{authForm}
		</div>
	);
}
export default UserNav;
