import React, { useState } from "react";
import Auth from "../auth/auth";
import "./navigation.css";

function Navigation() {
	const [authForm, setAuthForm] = useState(null);
	return (
		<nav>
			<div className="nav-user">
				<a href="#top">
					<img src="/lomi-spa-mono.svg" alt="company logo" loading="lazy"></img>
				</a>
				<div className="userButtons">
					<button>booking</button>
					<button
						onClick={() => {
							if (authForm === null) {
								setAuthForm(<Auth />);
							} else {
								setAuthForm(null);
							}
						}}
					>
						login
					</button>
				</div>
				{authForm}
			</div>

			<ul className="nav-page">
				<li className="link">
					<a href="#gallery">Gallery</a>
				</li>
				<li className="link">
					<a href="#services">Services</a>
				</li>
				<li className="link">
					<a href="#contacts">Contacts</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
