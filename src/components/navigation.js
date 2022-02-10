import "./navigation.css";

function Navigation() {
	return (
		<nav>
			<a href="#top">
				<img src="/lomi-spa-mono.svg" alt="" loading="lazy"></img>
			</a>
			<button className="buttonToggle">
				<i className="fas fa-bars"></i>
			</button>
			<ul className="toggle">
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
