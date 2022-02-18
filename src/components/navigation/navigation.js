import React, { useState } from "react";
import UserNav from "./userNav";
import "./navigation.css";

function Navigation() {
	return (
		<nav>
			<UserNav authLable="log in" />
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
